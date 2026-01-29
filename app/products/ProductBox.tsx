"use client";
import { IProduct } from "@/data/types";
import { Avatar, AvatarImage } from "@/lib/shad_cn/components/ui/avatar";
import { Badge } from "@/lib/shad_cn/components/ui/badge";
import { Card, CardContent } from "@/lib/shad_cn/components/ui/card";
import numUtils from "@/utils/numUtils";
import Link from "next/link";

export default function ProductCard(product: IProduct) {

    const num = "+917734865267"
    const message = `Hi, I'm interested in product '${product.title}'. Can you tell me more about this`
    const url = `whatsapp://send?phone=${num}&text=${encodeURIComponent(message)}`

    return <>
        <Card className="rounded-lg p-0 bg-accent h-full overflow-clip relative">
            <Link href={'/products/' + product.slug}>
                <Avatar className="w-full h-fit rounded-none" >
                    <AvatarImage src={product.thumbnail} />
                </Avatar>
            </Link>
            <Badge className="absolute top-2 right-2 px-3 py-1.5 font-bold" >
                {product.category}
            </Badge>
            <CardContent className="flex-1 " >
                <div className="py-3">
                    <div className="text-xl">
                        {product.title}
                    </div>
                    <div className="flex mt-3">
                        ₹
                        <div className="flex items-end gap-3 text-2xl font-bold">
                            {numUtils.formatNumber(product.price)}
                        </div>
                    </div>
                    <div className="flex gap-1 text-sm font-semibold">
                        M.R.P.
                        <p className="line-through">
                            ₹{numUtils.formatNumber(product.mrp)}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    </>
};