'use client'

import NavbarItem from "@/app/components/NavbarItem"
import { Home, MessageCircle, BarChart2 } from 'lucide-react'

const navItems = [
    { label: 'Home', href: '/', icon:<Home />},
    { label: 'Chat', href: '/chat', icon:<MessageCircle />},
    { label: 'Insights', href: '/insights', icon:<BarChart2 />},
];

function AppShell ({children}: {children:React.ReactNode}) {

    return (

        <div className="flex h-screen overflow-hidden">
          <nav className="flex flex-col bg-white text-gray-800 px-5 justify-between shadow-md w-xs w-60 bg-white shadow-md border-r border-gray-100">
            <div>
                <div className="mt-6 flex items-center gap-3 pt-3 mb-4 ">
                    <div className="flex items-center gap-2 text-xl font-bold mb-5">
                        <img src="/copepilot.png" alt="Copepilot logo" className="w-6 h-6" />
                        <span>Copepilot</span>
                    </div>
                </div>
                <ul className="space-y-2">
                    {navItems.map((item,i) => (
                        < NavbarItem href={item.href} label={item.label} key={i} icon={item.icon}/>
                    ))}
                </ul>
            </div>
            <div className="flex items-center gap-3 border-t pt-4 border-gray-300 pb-5">
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    E
                </div>
                <div className="text-sm">
                    <p className="font-medium text-gray-800 font-semibold">Emily</p>
                    <p className="text-gray-500 text-xs">Not signed in</p>
                </div>
            </div>
          </nav>
            <div className="flex flex-col flex-1 overflow-y-auto px-20 max-h-screen bg-gray-50">
                <main className="flex-1 py-4">
                    {children}
                </main>
            </div>
        </div>
    )


}

export default AppShell