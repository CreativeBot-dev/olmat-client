import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { APPCONSTANT } from "@/constant/App.constant";
import AppTitle from "../ui/AppTittle";
import { Starfield } from "./Starfield";
import { Planet } from "./Planet";

export function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="timeline"
      className="py-20 bg-brandDark relative overflow-hidden"
    >
      <Planet className="left-[6%] top-[28%] animate-float-medium hidden md:block" size={120} color="linear-gradient(135deg,#D8CE73,#4D4177)" glow="#D8CE73" />
      <Planet className="right-[8%] top-[22%] animate-float-slow hidden md:block" size={70} color="linear-gradient(135deg,#88A5E0,#3A60A0)" glow="#3A60A0" />
      <Planet className="right-[18%] bottom-[10%] animate-float-slow hidden lg:block" size={50} color="linear-gradient(135deg,#4D4177,#0B1838)" glow="#88A5E0" />

      <Starfield count={150} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <AppTitle>
              Timeline
            </AppTitle>
          </h2>
          <div className="w-20 h-1 bg-brandLight mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            <AppTitle>

              Catat tanggal penting OLMAT UINSA 2025! Ikuti setiap tahapannya
              mulai dari pendaftaran hingga babak final dan raih prestasi
              terbaikmu.
            </AppTitle>
          </p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-brand/30 transform md:translate-x-0 translate-x-[7px]"></div>
          {/* Timeline Events */}
          <div className="space-y-12">
            {APPCONSTANT.timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-start relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute z-20 left-0 md:left-1/2 top-0 h-4 w-4 rounded-full bg-brandLight border-4 border-white transform md:translate-x-[-8px] translate-x-[-1px]"></div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ml-8 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                >
                  <div className="glass p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 text-sm text-brand mb-2">
                      <CalendarDays className="h-4 w-4 text-yellow-400" />
                      <span className="text-white">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-secondBrand">
                      <AppTitle>
                        {event.title}
                      </AppTitle>
                    </h3>
                    <p className="text-white">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
