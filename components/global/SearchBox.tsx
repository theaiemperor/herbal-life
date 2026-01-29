"use client";
import { Input } from "@/lib/shad_cn/components/ui/input";
import { Dispatch, SetStateAction } from "react";


interface Props {
    text: string
    setText: Dispatch<SetStateAction<string>>;
}


export default function SearchBox({ text, setText }: Props) {

    return (
        <Input
            value={text}
            onChange={(e) => { setText(e.target.value) }}
            placeholder="Search here"
        />
    )
}
