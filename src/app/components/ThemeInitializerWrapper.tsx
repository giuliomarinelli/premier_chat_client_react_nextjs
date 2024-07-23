'use client'

import { Provider } from "react-redux";
import ThemeInitializer from "./ThemeInitializer";
import store from "../redux-store/store";
import { CustomThemeProvider } from "./CustomThemeProvider";

const ThemeInitializerWrapper = () => (
    <Provider store={store}>
        <CustomThemeProvider>
            <ThemeInitializer />
        </CustomThemeProvider>
    </Provider>
)

export default ThemeInitializerWrapper