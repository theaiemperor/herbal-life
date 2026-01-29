"use client"
import ProductCard from "@/app/products/ProductBox"
import { categories } from "@/data/categories"
import { products } from "@/data/products"

export default function CategoryProductPage({ slug }: { slug: string }) {


    const filtered = products.filter(p => p.category === slug)
    const category = categories[slug]

    if (!filtered.length || !category) {
        return null
    }

    return (
        <div className="p-3 flex flex-col gap-12">
            <div>
                <div className="text-3xl font-bold">{category.title}</div>
                <div>{category.description}</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map(product => (
                    <div key={product.slug}>
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    )
}
