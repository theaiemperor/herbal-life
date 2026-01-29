import { categoryList } from "./categories"

export interface IProduct {
    title: string,
    slug: string,
    short_description: string
    thumbnail: string,
    media: string[]
    brand: string,
    category: cl,
    mrp: number
    price: number
    isFeatured?: boolean
    details?: {
        title: string,
        description: string[],
        thumbnail?: string
    }[]
}

type cl = (typeof categoryList)[number]

export interface ICategory {

    [key: cl[number]]: {
        title: string
        description: string
    }

}