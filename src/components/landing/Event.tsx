import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { APPCONSTANT } from "@/constant/App.constant";
import Link from "next/link";
import AppImage from "../ui/AppImage";
import AppTitle from "../ui/AppTittle";
import { Starfield } from "./Starfield";
import { Planet } from "./Planet";

export function SupportingEventsSection() {
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
    <section id="events" className="py-20 ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <AppTitle>
              Acara Pendukung
            </AppTitle>
          </h2>
          <div className="w-20 h-1 bg-brandLight mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            <AppTitle>
              Selain kompetisi utama, OLMAT UINSA menghadirkan beragam acara seru
              yang menambah wawasan dan semangat kebersamaan. Jangan lewatkan
              keseruannya!
            </AppTitle>

          </p>
        </div>

        <Tabs
          defaultValue={`${APPCONSTANT.supportEvent[0].name}`}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList
              className="grid w-full max-w-md h-full items-center justify-center
             grid-cols-1 md:grid-cols-3 gap-2 glass-strong"
            >
              {APPCONSTANT.supportEvent.map((item, i) => (
                <TabsTrigger
                  key={i}
                  value={item.name}
                  className="data-[state=active]:bg-brandLight data-[state=active]:text-black text-white"
                >
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {APPCONSTANT.supportEvent.map((item, i) => (
            <TabsContent value={item.name} key={i} className="glass p-10 rounded-3xl">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <Starfield count={100} />
                <motion.div
                  variants={itemVariants}
                  className="order-2 lg:order-1"
                >
                  <div className="space-y-6">

                    <AppTitle className="font-bold text-3xl">
                      {item.name}
                    </AppTitle>
                    <p className="text-white">{item.desc}</p>
                    <div className="space-y-4">
                      {item.options.map((opt, i) => (
                        <div key={i} className="flex items-start">
                          <div className="h-6 w-6 flex items-center justify-center mt-0.5 mr-3">
                            <span className="bg-brandLight text-xs h-2 w-2 rounded-full font-bold"></span>
                          </div>
                          <div className="w-full">
                            <p className="font-medium">
                              <AppTitle>
                                {opt.label}
                              </AppTitle>
                            </p>
                            <p className="text-white">{opt.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center mt-6 gap-4">
                      {item.juknis && (
                        <Link target="_blank" href={item.juknis}>
                          <Button className="border-brandLight border text-brandLight bg-brandLight/5 rounded-full hover:bg-brand hover:text-white duration-500">
                            <Download />
                            Unduh JUKLAK JUKNIS
                          </Button>
                        </Link>
                      )}
                      <Button
                        disabled={item.registerLink === ""}
                        className="text-brandDark font-bold bg-gradient-to-b from-brandLight via-white to-brandLight rounded-full hover:scale-110 duration-500 ease-in-out transition-all"
                      >
                        <Link
                          target="_blank"
                          className="flex gap-2 items-center"
                          href={item.registerLink || ""}
                        >
                          {item.registerLink !== "" ? (
                            <>
                              Daftar <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          ) : (
                            <>Comming Soon</>
                          )}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="order-1 lg:order-2"
                >
                  <div className="relative aspect-square">
                    <div className="absolute inset-0 shadow-none rounded-2xl overflow-hidden">
                      <AppImage
                        src={item.img}
                        alt={`${item.name} Image`}
                        sizes="1"
                        className="w-full h-full overflow-hidden rounded-2xl shadow-xl"
                        object="object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
