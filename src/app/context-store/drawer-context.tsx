import React, { createContext, ReactNode, useContext, useState } from "react";
import { DrawerContextType } from "../Models/interfaces-types/drawer-context-type.interface"

const defaultValue: DrawerContextType = {
    open: false,
    openDrawer: () => { },
    closeDrawer: () => { },
    toggleDrawer: () => { }
};

const DrawerContext = createContext<DrawerContextType>(defaultValue)

export function DrawerProvider({ children }: { children: ReactNode }) {

    const [open, setOpen] = useState<boolean>(false)

    const openDrawer = () => {
        setOpen(true)
        console.log('opening')
    }
    const closeDrawer = () => setOpen(false)
    const toggleDrawer = () => setOpen(prevState => !prevState)



    return (
        <DrawerContext.Provider value={{ open, openDrawer, closeDrawer, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    )

}

export function useDrawerContext() {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawerContext must be used within a DrawerProvider');
    }
    return context
}

