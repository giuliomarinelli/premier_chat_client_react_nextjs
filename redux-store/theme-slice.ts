import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from '../Models/enums/theme.enum'

const initialState = {
    value: Theme.LIGHT
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.value = action.payload;
            localStorage.setItem('theme', action.payload.toString());
        },
        toggleTheme: (state) => {
            state.value = state.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
            localStorage.setItem('theme', state.value.toString());
        }
    }
})

export const { setTheme, toggleTheme } = themeSlice.actions

export default themeSlice.reducer