import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { APPCONSTANT } from "@/constant/App.constant";
import Countdown from "../Countdown";
import Link from "next/link";
import { ROUTES } from "@/routes/router";
import { TUser } from "@/lib/auth";
import { Planet } from "./Planet";
import { ShootingStar, Starfield } from "./Starfield";
import AppTitle from "../ui/AppTittle";

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
      className="relative flex justify-center items-center min-h-screen  lg:pt-6  bg-gradient-to-b from-brandDark via-black to-brandDark"
    >
      <Starfield count={240} className="z-0" />
      <Planet className="left-[6%] top-[28%] animate-float-slow hidden md:block" size={70} color="linear-gradient(135deg,#88A5E0,#3A60A0)" glow="#3A60A0" />
      <Planet className="right-[8%] top-[22%] animate-float-medium hidden md:block" size={120} color="linear-gradient(135deg,#D8CE73,#4D4177)" ring glow="#D8CE73" />
      <Planet className="right-[18%] bottom-[10%] animate-float-slow hidden lg:block" size={50} color="linear-gradient(135deg,#4D4177,#0B1838)" glow="#88A5E0" />
      <ShootingStar top="30%" delay={0} />
      <ShootingStar top="55%" delay={2} />

      <div className=" container mx-auto px-6 relative z-10 min-h-screen md:min-h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <AppTitle>
                {APPCONSTANT.name}
              </AppTitle>

              <br />

              <span className="bg-gradient-to-b from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent">
                {APPCONSTANT.year}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-xl mx-auto lg:mx-0 italic">
              {APPCONSTANT.theme}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full items-center ">
              {start && end && now > start && now < end && (
                <Link
                  href={
                    user ? ROUTES.DASHBOARD.REGISTER_PARTICIPANTS : ROUTES.LOGIN
                  }
                  className="bg-brandLight hover:bg-brangLowLight duration-300 rounded-lg flex py-2 px-3 items-center text-brandDark font-bold w-fit"
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
              className="absolute -bottom-5 -left-5 h-16 w-16 bg-brand rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-bold">UINSA</span>
            </motion.div>
          </motion.div>
        </div>
      </div>


      <div className="absolute w-full z-10 -bottom-20 md:-bottom-3 flex justify-center ">
        <Countdown now={now} start={start} end={end} />
      </div>
    </section>
  );
}
