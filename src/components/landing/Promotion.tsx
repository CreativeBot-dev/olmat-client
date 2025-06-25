import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { APPCONSTANT } from "@/constant/App.constant";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { EyeIcon, Heart, MessageCircleMore, ShoppingCart } from "lucide-react";
import { convertRupiah } from "@/helper/common";
import Link from "next/link";

export default function PromotionSection() {
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
    <section id="promotion" className="container mx-auto px-6 mb-4">
      {/* Social Media and E-Commerce Cards */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand">
            Sosial Media dan E-Commerce
          </h2>
          <div className="w-20 h-1 bg-brand mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ikuti info terbaru dan dapatkan merchandise resmi Olimpiade
            Matematika UINSA di sini!
          </p>
        </div>

        <Tabs defaultValue="Shopee" className="w-full">
          <div className=" flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger
                className="data-[state=active]:bg-brand data-[state=active]:text-white"
                value="Shopee"
              >
                Shopee
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-brand data-[state=active]:text-white"
                value="sosmed"
              >
                Sosial Media
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="Shopee">
            <div className="mb-7">
              <div className="flex gap-4 items-center font-bold text-xl">
                <p className="text-orange-500 text-xl p-2 bg-brandDark/40 rounded-full">
                  {APPCONSTANT.socialEcommerce.shopee.icon}
                </p>
                {APPCONSTANT.socialEcommerce.shopee.name}
              </div>
              <p className="mt-4">{APPCONSTANT.socialEcommerce.shopee.desc}</p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 lg:gap-12"
            >
              {APPCONSTANT.socialEcommerce.shopee.item.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="order-2 lg:order-1"
                >
                  <Card className="overflow-hidden group border-none drop-shadow-md">
                    <div className="relative aspect-square">
                      <div className="absolute left-5 top-2 px-3 gap-2 bg-brandDark/50 flex items-center z-10 text-foreground rounded-full py-1">
                        <CardTitle className=" mt-1 font-medium text-foreground/60">
                          Buku Olimpiade
                        </CardTitle>
                      </div>
                      <Image
                        src={item.tumbnail}
                        alt={item.label}
                        fill
                        sizes="1"
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      {/* {product.bestseller && <Badge className="absolute top-2 right-2 bg-amber-500">Bestseller</Badge>} */}
                    </div>
                    <CardHeader className="p-4 pb-0 text-foreground/80"></CardHeader>
                    <CardContent className="p-4 pt-2">
                      <p>{item.label}</p>
                      <p className="font-bold w-full mb-3 text-lg">
                        {item.price === 0
                          ? "Coming Soon"
                          : convertRupiah(item.price)}
                      </p>
                      <div className="grid lg:grid-cols-2 gap-3">
                        <Link
                          href={item.chat}
                          target="_blank"
                          className=" hover:bg-brandDark/20 text-brand hover:text-brand  border-brand w-full border flex items-center justify-center gap-2 px-4 py-2 rounded-md  duration-300"
                        >
                          <MessageCircleMore className="mr-2 h-4 w-4" />
                          Chat Sekarang
                        </Link>
                        <Link
                          href={item.link}
                          target="_blank"
                          className="bg-brand hover:bg-brandDark/50 text-white hover:text-brand  border-brand w-full border flex items-center justify-center gap-2 px-4 py-2 rounded-md  duration-300"
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Beli Sekarang
                        </Link>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="p-4 pt-0 flex flex-col lg:flex-row justify-between bg-pink-300"></CardFooter> */}
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="sosmed">
            <div className="mb-7">
              <div className="flex gap-4 items-center font-bold text-xl">
                <p className="text-orange-500 text-xl p-2 bg-brandDark/40 rounded-full">
                  {APPCONSTANT.socialEcommerce.socialMedia.icon}
                </p>
                {APPCONSTANT.socialEcommerce.socialMedia.name}
              </div>
              <p className="mt-4">
                {APPCONSTANT.socialEcommerce.socialMedia.desc}
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              // className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12"
              className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 lg:gap-12"
            >
              {APPCONSTANT.socialEcommerce.socialMedia.item.map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Link href={item.link} target="_blank">
                    <Card className="overflow-hidden group border-none drop-shadow-md">
                      <div className="relative aspect-square">
                        <div className="absolute left-5 top-2 px-3 gap-2 bg-white text-brand flex items-center z-10 text-foreground rounded-full">
                          {item.icon}
                          {item.key}
                        </div>
                        <Image
                          src={item.tumbnail}
                          alt={item.caption}
                          fill
                          sizes="1"
                          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        />
                        {/* {product.bestseller && <Badge className="absolute top-2 right-2 bg-amber-500">Bestseller</Badge>} */}
                        <CardContent className="absolute bg-black/0 group-hover:bg-black/50 duration-300 grid place-items-center w-full h-full inset-0  opacity-0 group-hover:opacity-100">
                          <div className="flex gap-4 text-white font-bold">
                            <p className="flex gap-2 items-center">
                              <Heart /> {item.like}
                            </p>
                            <p className="flex gap-2 items-center">
                              <EyeIcon /> {item.view}
                            </p>
                          </div>
                        </CardContent>
                        {/* <CardFooter className="absolute -bottom-3 pt-10 text-sm bg-gradient-to-b from-white/0 to-white z-0 w-full">
                          {item.caption}
                        </CardFooter> */}
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* <TabsContent value="Tiktok">
            <div className="mb-7">
              <div className="flex gap-4 items-center font-bold text-xl">
                <p className="text-black text-xl p-2 bg-brandDark/40 rounded-full">
                  {APPCONSTANT.socialEcommerce.tiktok.icon}
                </p>
                {APPCONSTANT.socialEcommerce.tiktok.name}
              </div>
              <p className="mt-4">{APPCONSTANT.socialEcommerce.tiktok.desc}</p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              // className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12"
              className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 lg:gap-12"
            >
              {APPCONSTANT.socialEcommerce.tiktok.item.map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Link href={item.link} target="_blank">
                    <Card className="overflow-hidden group border-none drop-shadow-md">
                      <div className="relative aspect-[3/4]">
                        <div className="absolute left-5 top-2 px-3 gap-2 bg-brandDark/50 flex items-center z-10 text-foreground rounded-full py-1"></div>
                        <Image
                          src={item.tumbnail}
                          alt={item.caption}
                          fill
                          sizes="1"
                          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                        />
                        <CardContent className="absolute bg-black/0 group-hover:bg-black/50 duration-300 grid place-items-center w-full h-full inset-0  opacity-0 group-hover:opacity-100">
                          <div className="flex gap-4 text-white font-bold">
                            <p className="flex gap-2 items-center">
                              <Heart /> {item.like}
                            </p>
                            <p className="flex gap-2 items-center">
                              <EyeIcon /> {item.view}
                            </p>
                          </div>
                        </CardContent>
                        <CardFooter className="absolute -bottom-3 pt-3 text-sm bg-gradient-to-b from-white/0 to-white z-0 w-full">
                          {item.caption}
                        </CardFooter>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent> */}
        </Tabs>
      </div>
    </section>
  );
}
