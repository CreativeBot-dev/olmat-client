import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { APPCONSTANT } from "@/constant/App.constant";
import Countdown from "../Countdown";
import Link from "next/link";
import { ROUTES } from "@/routes/router";
import { TUser } from "@/lib/auth";

interface IProps {
  user: TUser | null;
  start: string | null;
  end: string | null;
  now: string;
}

export function HeroSection({ user, start, end, now }: IProps) {
  return (
    <section
      id="hero"
      className="relative flex justify-center items-center min-h-screen pb-36 pt-20 lg:pt-6 mb-28"
    >
      <Image src={"/bg.webp"} fill alt="" className="object-cover opacity-20" />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        style={{ scale: 1.5 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
        className=" hidden md:block md:text-8xl font-black text-white/60 absolute bottom-28  uppercase"
      >
        <p>Olimpiade Matematika</p>
      </motion.div>
      <div className=" container mx-auto px-6 relative z-10 min-h-screen md:min-h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-brand">{APPCONSTANT.name}</span>
              <br />
              <span className="text-secondBrand">{APPCONSTANT.year}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0 italic">
              {APPCONSTANT.theme}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full items-center ">
              {start && end && now > start && now < end && (
                <Link
                  href={
                    user ? ROUTES.DASHBOARD.REGISTER_PARTICIPANTS : ROUTES.LOGIN
                  }
                  className="bg-brand hover:bg-brand/90 rounded-lg flex py-2 px-3 items-center text-white w-fit"
                >
                  Daftar Sekarang <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first"
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/maskot.webp"
                  sizes="1"
                  alt="olmat uinsa"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3 }}
              className="absolute -top-10 -right-5 h-20 w-20 bg-brandDark rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold text-xl">2025</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
              className="absolute -bottom-5 -left-5 h-16 w-16 bg-[#d2b48c] rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold">UINSA</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
      </div>

      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <ChevronsDown className=" w-6 text-brand" />
        <ChevronsDown className=" w-6 text-black" />
        <ChevronsDown className=" w-6 text-brand" />
      </motion.div> */}
      <div className="absolute w-full z-10 -bottom-20 md:-bottom-3 flex justify-center ">
        <Countdown now={now} start={start} end={end} />
      </div>
      <div className="absolute w-full bg-gradient-to-t from-white to-white/0 h-32 bottom-0 "></div>
    </section>
  );
}
