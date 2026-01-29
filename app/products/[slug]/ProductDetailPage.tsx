"use client"
import WhatsappButton from "@/components/global/WhatsappButton"
import { products } from "@/data/products"
import { Badge } from "@/lib/shad_cn/components/ui/badge"
import { Card } from "@/lib/shad_cn/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/shad_cn/components/ui/tabs"
import numUtils from "@/utils/numUtils"
import { Check } from "lucide-react"
import { useState } from "react"
import ProductCard from "../ProductBox"



export default function ProductDetailPage({ slug }: { slug: string }) {

    const product = products.find(p => p.slug === slug);

    if (!product) {
        return;
    }

    const featuredProducts = products.filter(p => p.isFeatured && p.slug !== slug);


    const mediaList = [product.thumbnail, ...product.media]
    const [activeMedia, setActiveMedia] = useState(mediaList[0]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col-reverse lg:flex-row gap-4">

                    <div className="flex lg:flex-col gap-3">
                        {mediaList.map((src, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveMedia(src)}
                                className={`relative h-20 w-20 rounded-md overflow-hidden border ${activeMedia === src ? "border-primary" : "border-muted"
                                    }`}
                            >
                                <img src={src} alt="preview" className="object-cover" />
                            </button>
                        ))}
                    </div>

                    <Card className="relative md:flex-1 h-90 sm:h-105 lg:h-130">
                        <img
                            src={activeMedia}
                            alt={product.title}
                            className="object-contain p-6"
                        />
                    </Card>
                </div>



                {/* Product Info */}
                <div className="w-full flex justify-center">
                    <div className="flex flex-col justify-between gap-5 w-sm ">

                        <h1 className="text-2xl sm:text-3xl font-semibold">
                            {product.title}
                        </h1>
                        <Badge className="px-3 py-1.5 font-bold" >
                            {product.category}
                        </Badge>
                        <p className="text-muted-foreground">
                            {product.short_description}
                        </p>


                        <div className="flex flex-col flex-1 gap-2 mt-5 ">
                            <div className="text-5xl font-bold">
                                ₹{numUtils.formatNumber(product.price)}
                            </div>
                            <div className="flex gap-1 text-sm font-semibold">
                                M.R.P.
                                <p className="line-through">
                                    ₹{numUtils.formatNumber(product.mrp)}
                                </p>
                            </div>
                        </div>
                        <div>
                            <Badge variant={'outline'} className="px-3 py-1.5 font-bold" >
                                <Check />
                                {product.brand}
                            </Badge>
                        </div>
                        <div className="flex flex-col justify-between gap-5 ">
                            <div className="text-xs">
                                Our products are available through Herbalife Independent Associates. This page is not intended as a substitute for the advice of a qualified and registered medical practitioner. This product is not intended to diagnose, treat, cure or prevent any disease.
                            </div>
                            <WhatsappButton msg={`hello, I want to know about ${product.title}`} btnClassName="rounded-full">
                                Connect With Associates
                            </WhatsappButton>

                        </div>
                    </div>
                </div>
            </div>


            {product.details && product.details.length > 0 && (
                <Tabs defaultValue={product.details[0].title} className="flex justify-center p-2 mt-20">
                    <TabsList className="flex flex-wrap self-center">
                        {product.details.map((d) => (
                            <TabsTrigger key={d.title} value={d.title}>
                                {d.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {product.details.map((d) => {
                        const gap = d.description.length > 4 ? 'gap-2' : 'gap-8'
                        return <TabsContent key={d.title} value={d.title} >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-9">
                                <div className={`flex flex-col ${gap}`}>
                                    {d.description.map((line, i) => (
                                        <div key={i} className="text-lg leading-relaxed">
                                            {line}
                                        </div>
                                    ))}
                                </div>

                                <div className="w-full h-full flex justify-center">
                                    <img
                                        src={d.thumbnail || (d.title === 'Overview' && product.media[0]) || product.thumbnail}
                                        alt="img"
                                        className="w-auto h-96 rounded-lg"
                                    />
                                </div>
                            </div>
                        </TabsContent>
                    })}
                </Tabs>
            )}


            <section className="py-20 ">
                <div className="mx-auto  px-4">
                    <h2 className="text-xl font-bold mb-10">Featured Products</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredProducts.slice(0, 6).map((product, i) => (
                            <ProductCard {...product} key={i} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
