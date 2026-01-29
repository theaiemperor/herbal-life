"use client";
import { cn } from "@/lib/shad_cn/utils";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { PropsWithChildren } from "react";


interface Props extends PropsWithChildren {
    className?: string
    hidden?: boolean

}

export default function Loader({ className, hidden, children }: Props) {
    return (
        <div hidden={hidden} className={cn('flex h-full w-full flex-col items-center justify-center', className)}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-4"
            >
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="font-medium text-muted-foreground"
                >
                    {children || "Loading, please wait..."}
                </motion.span>
            </motion.div>
        </div>
    );
}