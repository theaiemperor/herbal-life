"use client";
import WhatsappButton from "@/components/global/WhatsappButton";
import { Button } from "@/lib/shad_cn/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "../products/ProductBox";
import TestimonialSection from "./Testimonials";
import { products } from "@/data/products";

export default function HomePage() {

  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <div className="flex flex-col">
      <section className="relative h-[90vh] w-full overflow-hidden">
        <img
          src="https://www.herbalife.com/dmassets/regional-reusable-assets/workflow/emea/india/lifestyle/li-man-drinking-formula-1-shale-kitchen.jpg?fmt=webp-alpha"
          alt="Weight loss image"
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Fuel Your Fitness. Transform Your Life
          </motion.h1>
          <p className="mt-4 text-lg max-w-2xl">
            Your digital gateway to authentic fitness, nutrition, and wellness
          </p>
          <WhatsappButton msg={"hello, I am here to know about your products"} className="mt-5">
            Chat with us
          </WhatsappButton>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto  px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">Featured Products</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredProducts.slice(0, 6).map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-9">
            <Link href={'/products'}>
              <Button
                size={'lg'}
                variant="outline">
                Explore All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <TestimonialSection />
    </div>
  );
}
