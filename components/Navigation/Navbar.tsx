"use client";
import { Button } from "@/lib/shad_cn/components/ui/button";
import { Card } from "@/lib/shad_cn/components/ui/card";
import { SidebarTrigger, useSidebar } from "@/lib/shad_cn/components/ui/sidebar";
import abs from "@/utils/abs";
import routes_main from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DarkModeButton } from "./NavigationUtils";


interface Props {
    hideAppNavbar?: boolean
}

export default function Navbar(props: Props) {

    const { isMobile } = useSidebar();
    const pathname = usePathname();

    if (!isMobile && props.hideAppNavbar) {
        return;
    }

    if (isMobile) {
        return <>
            <Card className={'p-1 py-2 rounded-none w-full bg-accent sticky top-0 z-50 '}>
                <div className={'flex flex-wrap gap-2 items-center'}>
                    <SidebarTrigger />
                    <Link href={routes_main.home.link} className={'font-bold flex-1 '}>{abs.name}</Link>
                    <DarkModeButton />
                </div>
            </Card>
        </>
    }

    return <Card className="p-2 flex flex-row items-center rounded-none w-full border-none sticky top-0 z-50">
        <Link hidden={isMobile} href={routes_main.home.link}>
            <img
                src={abs.logo}
                alt="Logo"
                width={25}
                height={25}
            />
        </Link>
        <div className="flex flex-1 gap-2">
            {
                isMobile
                    ? <div className="font-bold text-lg">{abs.name}</div>
                    : Object.values(routes_main).map(route => {

                        const isActive = route.link === pathname;
                        return <Link key={route.title} href={route.link}>
                            <Button variant={isActive ? 'outline' : 'ghost'}>
                                {route.title}
                            </Button>
                        </Link>
                    })
            }
        </div>

        <div>
            <DarkModeButton />
        </div>

    </Card>
};