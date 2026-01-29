import { categoryList } from "@/data/categories";
import CategoryProductPage from "./CategoryProductPage";

export async function generateStaticParams() {
    return categoryList.map(slug => ({ slug }))
}



export default async function CategorySlug({ params }: any) {

    const { slug } = await params;

    if (!slug) {
        return;
    }
    return <CategoryProductPage slug={slug} />
}

