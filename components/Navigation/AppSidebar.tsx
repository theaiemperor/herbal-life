"use client";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/lib/shad_cn/components/ui/sidebar";
import abs from "@/utils/abs";
import routes_main from "@/utils/routes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavigationMenu, ToggleSidebar } from "./NavigationUtils";
import { Badge } from "@/lib/shad_cn/components/ui/badge";
import { User } from "lucide-react";


interface Props {
    menu: INavigationMenu[]
    profile_url?: string
    badgeText?: string
    home_url: string
    showOnlyOnMobile?: boolean
}


export function AppSidebar(props: Props) {

    const pathname = usePathname();
    const { state, isMobile } = useSidebar();

    if (props.showOnlyOnMobile && !isMobile) {
        return;
    }

    return (
        <Sidebar variant={'floating'} collapsible={'icon'}>
            <SidebarHeader className="h-32">
                <Link href={routes_main.home.link}>
                    <SidebarContent className="flex flex-col items-center gap-2 cursor-pointer mt-5">
                        <Image
                            src={abs.logo}
                            alt="logo"
                            width={40}
                            height={40}
                            className="rounded-md"
                        />
                        {
                            state === 'expanded' &&
                            <>
                                <motion.div
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.15,
                                        duration: 0.3,
                                        ease: "easeOut",
                                    }}
                                    className="text-lg font-bold flex-1 flex flex-col items-center"
                                >
                                    <div>
                                        {abs.name}
                                    </div>
                                    <Badge hidden={!props.badgeText}>
                                        {props.badgeText}
                                    </Badge>
                                </motion.div>

                            </>
                        }
                    </SidebarContent>
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-2">
                            {props.menu.map((item) => (
                                <SidebarMenuItem hidden={item.hidden} key={item.title}>
                                    <SidebarMenuButton isActive={(pathname === item.link && item.link === props.home_url) || (pathname.startsWith(item.link) && item.link !== props.home_url)} >
                                        <Link href={item.link} className="flex items-center gap-2 flex-1">
                                            <item.icon />
                                            <div>{item.title}</div>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            {
                props.profile_url &&
                <SidebarFooter>
                    <SidebarMenu className="gap-2">
                        <SidebarMenuItem>
                            <ToggleSidebar />
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            }
        </Sidebar>
    )
}
