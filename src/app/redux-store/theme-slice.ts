import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Theme } from '../Models/enums/theme.enum'
import { stat } from 'fs';
import { useColorScheme } from '@mui/material';

const initialState = {
    value: Theme.LIGHT
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.value = action.payload;
            if (state.value === Theme.DARK) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        },
        toggleTheme: (state) => {
            state.value = state.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
            localStorage.setItem('theme', state.value.toString());
            if (state.value === Theme.DARK) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }
    }
})

export const { setTheme, toggleTheme } = themeSlice.actions

export default themeSlice.reducer