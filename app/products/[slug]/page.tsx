import { products } from "@/data/products"
import ProductDetailPage from "./ProductDetailPage"


export function generateStaticParams() {
    return products.map(p => ({ slug: p.slug }))
}

export default async function ProductSlug({ params }: any) {

    const { slug } = await params;

    if (!slug) {
        return;
    }

    return <ProductDetailPage slug={slug} />
}
