"use client";
import { Button } from "@/lib/shad_cn/components/ui/button";
import { SidebarMenuButton, useSidebar } from "@/lib/shad_cn/components/ui/sidebar";
import { ChevronLeft, ChevronRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FC, useEffect, useState } from "react";

export interface INavigationMenu {
    title: string,
    link: string
    icon: FC,
    hidden?: boolean
}

export function ToggleSidebar() {
    const { state, setOpen, isMobile } = useSidebar();


    function toggleSidebar() {
        if (state === 'expanded') {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }

    if (isMobile) {
        return;
    }


    return <>
        <SidebarMenuButton className="cursor-pointer" onClick={toggleSidebar}>

            {state === 'expanded' ?
                <ChevronLeft />
                : <ChevronRight />
            }

            Collapse
        </SidebarMenuButton>

    </>
}


export function DarkModeButton() {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }


    return <>
        <Button
            variant={'ghost'}
            size={'icon-lg'}
            className={'rounded-full'}
            onClick={() => { setTheme(theme === 'dark' ? 'light' : 'dark') }}>
            {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
    </>
}
