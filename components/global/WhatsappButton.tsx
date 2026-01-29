import { Button } from "@/lib/shad_cn/components/ui/button";
import { cn } from "@/lib/shad_cn/utils";
import abs from "@/utils/abs";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    msg: string,
    className?: string
    btnClassName?: string
}

export default function WhatsappButton({ msg, className, btnClassName, children }: Props) {


    return <>
        <Link
            href={`whatsapp://send?phone=+${abs.whatsapp}&text=${encodeURIComponent(msg)}`}
            className={className}>
            <Button className={cn("w-full", btnClassName)}>
                <Image
                    width={20}
                    height={20}
                    alt="Whatsapp"
                    src={`${abs.base_path}/whatsapp.svg`} />
                {children || "Chat Now"}
            </Button>
        </Link >
    </>
};