"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/lib/shad_cn/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/shad_cn/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const highlights = [
    {
      title: "Authentic Products",
      desc: "We sell only genuine Herbalife products sourced through authorized distribution channels. No counterfeit stock. No quality risks.",
    },
    {
      title: "Fitness-Centered",
      desc: "Our entire website is built around fitness, wellness, weight management, and healthy living, not random eCommerce clutter.",
    },
    {
      title: "Trusted Delivery",
      desc: "Secure packaging, reliable logistics, and doorstep delivery across Delhi and India.",
    },
    {
      title: "Customer Support",
      desc: "We focus on long-term health, not one-time sales. Our goal is results, not just orders.",
    },
  ];

  const social = [
    {
      name: "@theaiemperor",
      caption: "https://www.instagram.com/theaiemperor_",
      href: "https://www.instagram.com/theaiemperor_",
      logo: "https://www.svgrepo.com/show/452229/instagram-1.svg"
    },
    {
      name: "+91 7734865267",
      caption: "Whatsapp Number",
      href: "tel:+917734865267",
      logo: "https://www.svgrepo.com/show/475692/whatsapp-color.svg"
    },
    {
      name: "Google Maps",
      caption: "New Delhi, India",
      href: "https://maps.app.goo.gl/F5gLmweRDfSBQuTQ8",
      logo: "https://www.svgrepo.com/show/485263/google-map-style-pin.svg"
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-linear-to-b from-gray-900 to-black text-white overflow-hidden">
        <Image
          src="https://www.herbalife.com/dmassets/regional-reusable-assets/workflow/emea/india/hero-banner-images/fi-friends-running-in-the-park.jpg?fmt=webp-alpha"
          alt="Store interior"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            About Us
          </motion.h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            We are a Delhi-based fitness-focused eCommerce platform and official distribution partners of Herbalife, dedicated to making health, weight management, and daily nutrition accessible for everyone.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            <h2 className="text-4xl font-bold">
              Who We Are
            </h2>
            <div>
              We are a Delhi-based fitness-focused online store and an authorized sales partner for Herbalife products, dedicated to helping people achieve healthier, stronger, and more confident lives.
            </div>

            <div>
              <b>Our mission </b>  is simple make premium Herbalife nutrition products accessible online while guiding customers toward better fitness, weight management, and overall well-being.
            </div>

            <div>
              We don’t just sell products. We support lifestyles, fitness goals, and long-term transformations. From weight loss solutions to daily nutrition and energy support, we ensure every product we offer is 100% genuine, reliable, and delivered with care.
            </div>

            <div>
              We bridge the gap between trusted Herbalife products and customers who want convenient online access, fast delivery, and dependable service.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="https://www.herbalife.com/dmassets/global-reusable-assets/images/li-man-woman-wearing-herbalife-t-shirt-laughing.jpg:desktop-w1248h533-234?qlt=85&ts=1742573580576&dpr=off"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full! h-full!"
            />
          </motion.div>
        </div>
      </section>

      {/* Social profiles */}
      <section>
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-10 ">
            Connect With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              social.map(item => {
                return <Link key={item.name} href={item.href} target="_blank">
                  <Card className="p-1 flex-row items-center ">
                    <Avatar className="p-2 w-16 h-16">
                      <AvatarImage src={item.logo} />
                      <AvatarFallback>{item.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <div className="font-bold">
                        {item.name}
                      </div>
                      <div className="text-xs">
                        {item.caption}
                      </div>
                    </div>

                  </Card>
                </Link>
              })
            }
          </div>
        </div>
      </section>

      {/* Highlights / Why Choose Us */}
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-10 ">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, i) => (
              <div key={i}>
                <Card className="h-full hover:shadow-xl transition gap-2">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.desc}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
