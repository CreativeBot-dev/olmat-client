import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download } from "lucide-react";
import { APPCONSTANT } from "@/constant/App.constant";
import AppImage from "../ui/AppImage";
import { Button } from "../ui/button";
import { PiStudentBold } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import Link from "next/link";

interface IProps {
  participanCountData: {
    total_active: number;
    sma: number;
    smp: number;
    sd: number;
    school: number;
  };
}
export function AboutSection({ participanCountData }: IProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const dataParticipant = [
    {
      label: "Jenjang SD/MI",
      icon: <PiStudentBold />,
      desc: "Seru-seruan berhitung dan melatih logika sejak dini! Siap jadi juara sejak SD?.",
      countLabel: "Peserta Terdaftar",
      count: participanCountData.sd,
    },
    {
      label: "Jenjang SMP/MTs",
      icon: <PiStudentBold />,
      desc: "Uji kemampuanmu memecahkan soal-soal seru dan menantang di level menengah. Saatnya naik level!",
      countLabel: "Peserta Terdaftar",
      count: participanCountData.smp,
    },
    {
      label: "Jenjang SMA/SMK/MA",
      icon: <PiStudentBold />,
      desc: "Persaingan makin ketat, tapi kamu makin siap! Tunjukkan kehebatanmu di level tertinggi.",
      countLabel: "Peserta Terdaftar",
      count: participanCountData.sma,
    },
    {
      label: "Sekolah Terdaftar",
      icon: <LuSchool />,
      desc: "Ratusan sekolah sudah ikut. Sekolahmu sudah terdaftar belum?",
      countLabel: "Sekolah Terdaftar",
      count: 9000,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-b from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
            Tentang {APPCONSTANT.name}
          </h2>
          <div className="w-20 h-1 bg-brandLight mx-auto mb-6"></div>
          <p className="text-lg bg-gradient-to-b from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent max-w-3xl mx-auto italic">
            {APPCONSTANT.theme}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-6"
            >
              {APPCONSTANT.about.item.map((data, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-b from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
                    {data.label}
                  </h3>
                  <p className="text-white indent-10 text-justify">
                    {data.desc}
                  </p>
                </motion.div>
              ))}
              <div className="flex justify-around">
                <Link
                  target="_blank"
                  href={"/pdf/JUKLAK JUKNIS OLMAT UINSA 2025.pdf"}
                >
                  <Button className="text-brandDark font-bold bg-gradient-to-b from-brandLight via-white to-brandLight rounded-full hover:scale-110 duration-500 ease-in-out transition-all">
                    <Download />
                    Unduh JUKLAK JUKNIS
                  </Button>
                </Link>
                {/* <Button>Pengumuman</Button> */}
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 grid place-items-center">
            <div className="relative w-fit">
              <AppImage
                src="/pamfletolm.webp"
                alt="Math Olympiad Participants"
                className="w-56 overflow-hidden aspect-[3/5] rounded-2xl shadow-xl"
                object="object-cover"
              />

              {/* Floating Stats */}
              <div className="absolute -top-5 -left-5 h-20 w-20 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-brand">18</span>
                <span className="text-xs text-gray-600">Regions</span>
              </div>
              <div className="absolute -bottom-5 -right-5 h-24 w-24 bg-white rounded-lg shadow-xl flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-brand">5K+</span>
                <span className="text-xs text-gray-600">Participants</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        {dataParticipant.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6">
            {dataParticipant.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-full text-2xl text-brandDark bg-brandLight flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg text-yellow-400 font-bold mb-2">{item.label}</h3>
                  <p className="text-white text-sm">{item.desc}</p>
                </div>
                {item.count > 100 && (
                  <div className="flex justify-between p-2 rounded-lg bg-brangLowLight mt-3 text-black">
                    <p className="font-medium">{item.countLabel}</p>
                    <p className="font-bold">{item.count}+</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
