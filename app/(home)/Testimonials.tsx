"use client"
import { Card } from "@/lib/shad_cn/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from '@/lib/shad_cn/components/ui/carousel'
import { Star } from "lucide-react"

interface Testimonial {
    name: string
    address: string
    rating: number
    testimonial: string
}

const testimonials: Testimonial[] = [
    {
        name: "Rohit Sharma",
        address: "Delhi, India",
        rating: 5,
        testimonial:
            "I've tried multiple products before, but these Herbalife supplements actually helped me stay consistent with my fitness goals.",
    },
    {
        name: "Neha Verma",
        address: "Noida, India",
        rating: 4,
        testimonial:
            "Delivery was fast and the products were genuine. Weight management feels easier now with proper nutrition.",
    },
    {
        name: "Amit Kapoor",
        address: "Gurugram, India",
        rating: 5,
        testimonial:
            "Trustworthy store. I appreciate the clear guidance and original products. Definitely continuing.",
    },
    {
        name: "Pooja Singh",
        address: "Faridabad, India",
        rating: 4,
        testimonial:
            "Simple ordering, good support, and effective products. Exactly what I needed for my wellness routine.",
    },
]

export default function TestimonialSection() {

    return (
        <section className="w-full py-20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">
                What Our Customers Say
            </h2>

            <div className="flex justify-center">
                <Carousel
                    className="max-w-2xl w-[70vw] px-5"
                >
                    <CarouselContent>
                        {
                            testimonials.map(t => {
                                return <CarouselItem key={t.name} className="flex justify-center">
                                    <Card className="p-6 flex flex-col gap-3 h-full max-w-xl w-full">
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < t.rating
                                                        ? "fill-yellow-400 text-yellow-400"
                                                        : "text-muted-foreground"
                                                        }`}
                                                />
                                            ))}
                                        </div>

                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            “{t.testimonial}”
                                        </p>

                                        <div className="mt-auto">
                                            <p className="font-medium">{t.name}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {t.address}
                                            </p>
                                        </div>
                                    </Card>
                                </CarouselItem>
                            })
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />

                </Carousel>
            </div>
        </section>
    )
}
