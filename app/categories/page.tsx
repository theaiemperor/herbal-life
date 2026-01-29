import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ICategory, IProduct } from "@/data/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/lib/shad_cn/components/ui/card";
import Link from "next/link";


type ProductGroup = {
    title: string
    description: string
    slug: keyof ICategory
    thumbnails: string[]
}

export function groupProductsByCategory(
    products: IProduct[],
    categories: ICategory
): ProductGroup[] {
    const map = new Map<keyof ICategory, ProductGroup>()

    for (const product of products) {
        const slug = product.category
        const categoryMeta = categories[slug]

        if (!categoryMeta) continue // ignore broken data silently

        if (!map.has(slug)) {
            map.set(slug, {
                title: categoryMeta.title,
                description: categoryMeta.description,
                slug,
                thumbnails: []
            })
        }

        const group = map.get(slug)!
        if (product.thumbnail && group.thumbnails.length < 3) {
            group.thumbnails.push(product.thumbnail)
        }
    }

    return Array.from(map.values())
}


export default function Categories() {


    const data = groupProductsByCategory(products, categories);


    return (
        <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
            {
                data.map(item => {

                    return <Link key={item.slug} href={'/categories/' + item.slug} className="">
                        <Card key={item.slug} className="gap-0 h-full">
                            <CardHeader>
                                <CardTitle className="text-2xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                {item.description}
                            </CardContent>
                            <div className="grid grid-cols-3">
                                {
                                    item.thumbnails.map(thumb => {
                                        return <img key={thumb} src={thumb} alt="product" />
                                    })
                                }
                            </div>

                        </Card>
                    </Link>
                })
            }
        </div>
    )
}
