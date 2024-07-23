export interface DrawerContextType {

    open: boolean
    openDrawer: (() => void)
    closeDrawer: (() =>void)
    toggleDrawer: (() => void)

}