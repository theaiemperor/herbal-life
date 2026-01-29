"use client";
import { products } from "@/data/products";
import ProductCard from "./ProductBox";
import SearchBox from "@/components/global/SearchBox";
import { useState } from "react";




export default function Products() {

    const [text, setText] = useState("");

    const p = products.filter(val => val.title.toLowerCase().includes(text.toLowerCase()));

    return <>
        <div className="p-3 flex flex-col gap-5 items-center">
            <div className="w-full max-w-md flex gap-3 items-center ">
                <SearchBox text={text} setText={setText} />
                <span hidden={!text} className="text-lg font-bold text-nowrap">Total: {p.length}</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
                {
                    p.map((product) => {
                        return <div key={product.slug}>
                            <ProductCard {...product} />
                        </div>
                    })
                }
            </div>
        </div>
    </>
};
