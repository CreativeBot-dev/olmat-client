import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";
import { APPCONSTANT } from "@/constant/App.constant";
import { FaWhatsapp } from "react-icons/fa6";

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-2 flex flex-col md:flex-row gap-5 items-start">
            <div className="relative aspect-square w-20 md:w-14">
              <Image
                src={"/logo-olm.png"}
                alt="logo-olmat"
                fill
                sizes="1"
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold mb-2">{APPCONSTANT.fullName}</h3>
              <p className="text-sm text-gray-600">{APPCONSTANT.theme}</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Sosial Media</h3>
            <div className="flex space-x-5">
              {APPCONSTANT.footer.socialMedia.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="text-gray-600 hover:text-gray-900 hover:scale-110 duration-300"
                >
                  <p className="w-4 h-4 text-2xl text-black">{item.icon}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Kontak</h3>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <Link href={`mailto:${APPCONSTANT.footer.email}`}>
                  {APPCONSTANT.footer.email}
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <FaWhatsapp className="w-4 h-4" />
                <Link
                  href={`https://api.whatsapp.com/send?phone=${APPCONSTANT.footer.mainWhatsApp}&text=Hai%20kak%20dengan%20OLMAT%20UINSA`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adam : {APPCONSTANT.footer.mainWhatsApp.replace("62", "0")}
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>
            © 2025 OLMAT UINSA created by{" "}
            <Link
              href={"https://mcrama.vercel.app/"}
              target="_blank"
              className="font-bold"
            >
              Mc Rama
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
