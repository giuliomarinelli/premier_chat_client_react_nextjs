'use client'

import { DrawerProvider } from "../context-store/drawer-context"
import { DrawerMenu } from "./DrawerMenu"

export default function DrawerMenuWrapper() {
    return (
        <DrawerProvider>
            <DrawerMenu />
        </DrawerProvider>
    )
}