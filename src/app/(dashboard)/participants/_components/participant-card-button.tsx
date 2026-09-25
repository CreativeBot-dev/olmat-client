"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";
import { useLayout } from "@/hooks/zustand/layout";

interface ParticipantCardButtonProps {
  id: string;
  name: string;
  school: string;
  region: string;
  imgUrl: string;
  disabled?: boolean;
}

export function ParticipantCardButton({
  id,
  imgUrl,
  name,
  region,
  school,
  disabled = false,
}: ParticipantCardButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { setIsSuccess, setError } = useLayout();

  /**
   * Load image lalu convert menjadi Data URL
   * supaya bisa digunakan oleh jsPDF
   */
  const loadImage = async (src: string): Promise<string> => {
    try {
      const response = await fetch(src);

      if (!response.ok) {
        throw new Error(
          `Failed to load image: ${response.status} ${response.statusText}`,
        );
      }

      const contentType = response.headers.get("content-type");

      /**
       * Pastikan response benar-benar image.
       * Ini mencegah halaman HTML error / verification
       * ikut dimasukkan sebagai foto peserta.
       */
      if (!contentType?.startsWith("image/")) {
        throw new Error(
          `URL did not return an image. Content-Type: ${contentType}`,
        );
      }

      const blob = await response.blob();

      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          resolve(reader.result as string);
        };

        reader.onerror = reject;

        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error("Error loading image:", error);
      throw error;
    }
  };

  const handleDownload = async () => {
    setIsLoading(true);

    try {
      /**
       * ========================================
       * CREATE PDF A5
       * ========================================
       *
       * Portrait A5:
       * width  = 148 mm
       * height = 210 mm
       */
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a5",
      });

      /**
       * ========================================
       * IMAGE URL
       * ========================================
       */
      const participantImageUrl = `/api/proxy-image?path=${encodeURIComponent(
        `imgs/${imgUrl}`,
      )}`;

      const idCardTemplate = "/idcard.webp";

      /**
       * Load foto peserta + background
       */
      const [participantImageDataUrl, idCardTemplateDataUrl] =
        await Promise.all([
          loadImage(participantImageUrl),
          loadImage(idCardTemplate),
        ]);

      /**
       * ========================================
       * BACKGROUND TEMPLATE
       * ========================================
       */
      doc.addImage({
        imageData: idCardTemplateDataUrl,
        x: 0,
        y: 0,
        width: 148,
        height: 210,
      });

      /**
       * ========================================
       * PARTICIPANT PHOTO
       * ========================================
       */
      doc.addImage({
        imageData: participantImageDataUrl,

        // Posisi horizontal foto
        x: 52.2,

        // Posisi vertical foto
        y: 42,

        // Lebar foto
        width: 44,

        // Tinggi foto
        height: 60,
      });

      /**
       * ========================================
       * FONT SETTINGS
       * ========================================
       */

      doc.setFont("helvetica", "bold");

      /**
       * HITAM
       *
       * RGB:
       * 0, 0, 0
       */
      doc.setTextColor(0, 0, 0);

      /**
       * ========================================
       * CENTER POSITION
       * ========================================
       *
       * Lebar A5 = 148 mm
       *
       * Tengah halaman:
       * 148 / 2 = 74
       */
      const centerX = 74;

      /**
       * Lebar maksimal tulisan agar tetap
       * berada dalam area kotak kuning.
       */
      const textMaxWidth = 104;

      /**
       * ========================================
       * AUTO RESIZE + CENTER TEXT
       * ========================================
       *
       * - teks rata tengah
       * - font otomatis mengecil jika terlalu panjang
       */
      const drawFitText = (
        text: string,
        y: number,
        maxWidth: number,
        initialFontSize = 14,
        minFontSize = 9,
      ) => {
        if (!text) return;

        let fontSize = initialFontSize;

        doc.setFontSize(fontSize);

        /**
         * Kecilkan font sampai teks muat
         */
        while (doc.getTextWidth(text) > maxWidth && fontSize > minFontSize) {
          fontSize -= 0.5;

          doc.setFontSize(fontSize);
        }

        /**
         * Tulis teks rata tengah
         */
        doc.text(text, centerX, y, {
          align: "center",
        });
      };

      /**
       * ========================================
       * PARTICIPANT DATA
       * ========================================
       */

      /**
       * NAMA LENGKAP
       */
      drawFitText(name || "", 124, textMaxWidth, 14);

      /**
       * NOMOR PESERTA
       */
      drawFitText(id || "", 147, textMaxWidth, 14);

      /**
       * ASAL SEKOLAH
       */
      drawFitText(school || "", 170.5, textMaxWidth, 12);

      /**
       * RAYON
       */
      drawFitText(region || "", 193, textMaxWidth, 14);

      /**
       * ========================================
       * SAFE FILE NAME
       * ========================================
       */
      const safeName = name?.replace(/[\\/:*?"<>|]/g, "").trim() || "peserta";

      const safeId = id?.replace(/[\\/:*?"<>|]/g, "").trim() || "id";

      /**
       * ========================================
       * DOWNLOAD PDF
       * ========================================
       */
      doc.save(`Kartu Peserta-${safeId}-${safeName}.pdf`);

      setIsSuccess(true, "Participant card downloaded");
    } catch (error) {
      console.error("Error generating PDF:", error);

      setError(true, "Failed to download participant card");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleDownload}
      disabled={disabled || isLoading}
      title={
        disabled
          ? "Only available for approved and paid participants"
          : "Download participant card"
      }
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current rounded-full animate-spin border-t-transparent" />
      ) : (
        <Download className="w-4 h-4" />
      )}

      <span className="sr-only">Download Card</span>
    </Button>
  );
}
