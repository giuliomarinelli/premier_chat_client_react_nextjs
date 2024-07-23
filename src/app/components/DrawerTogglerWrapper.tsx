'use client'
import { DrawerProvider } from "../context-store/drawer-context";
import { DrawerMenu } from "./DrawerMenu";
import DrawerToggler from "./DrawerToggler";

export default function DrawerTogglerWrapper() {
    return (
        <DrawerProvider>
            <DrawerToggler />
            <DrawerMenu />
        </DrawerProvider>
    )
}