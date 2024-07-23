'use client'
import { useDrawerContext } from "../context-store/drawer-context"

export default function DrawerToggler() {

    const { open, closeDrawer, openDrawer, toggleDrawer } = useDrawerContext()

    return (
        <button onClick={toggleDrawer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mt-[3px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
    )

}




