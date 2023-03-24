import { createContext } from "react";

const ThemeContext = createContext({ dark: false, toggole: () => { } });

export default ThemeContext;