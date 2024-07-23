'use client'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux-store/store"
import { useEffect } from "react"
import { setTheme } from "../redux-store/theme-slice"
import { Theme } from "../Models/enums/theme.enum"

const ThemeInitializer = () => {

    const themeDispatch: AppDispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme.value)
  
    useEffect(() => {
  
      const themeFromStorage = localStorage.getItem('theme')
      if (themeFromStorage && (themeFromStorage === 'light' || themeFromStorage === 'dark')) {
        themeDispatch(setTheme(themeFromStorage as unknown as Theme))
      } else {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        themeDispatch(setTheme(prefersDarkScheme ? Theme.DARK : Theme.LIGHT))
      }
  
      console.log(theme)
  
    }, [themeDispatch, theme])

    return <h1>hello world</h1>

}

export default ThemeInitializer