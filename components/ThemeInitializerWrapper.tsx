'use client'

import { Provider } from "react-redux";
import ThemeInitializer from "./ThemeInitializer";
import store from "../redux-store/store";

const ThemeInitializerWrapper = () => (
    <Provider store={store}>
        <ThemeInitializer />
    </Provider>
)

export default ThemeInitializerWrapper