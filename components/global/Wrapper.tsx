"use client";
import { SidebarProvider } from '@/lib/shad_cn/components/ui/sidebar'
import routes_main from '@/utils/routes'
import { PropsWithChildren } from 'react'
import { AppSidebar } from '../Navigation/AppSidebar'
import Navbar from '../Navigation/Navbar'

export default function Wrapper({ children }: PropsWithChildren) {
    return (

        <SidebarProvider className="grid grid-rows-[auto_1fr]">
            <AppSidebar
                home_url={routes_main.home.link}
                menu={Object.values(routes_main)}
                showOnlyOnMobile
            />
            <Navbar />
            <main >
                {children}
            </main>
        </SidebarProvider>
    )
}
