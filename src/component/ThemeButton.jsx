"use client";

import { useTheme } from "next-themes";
import { CgDarkMode } from "react-icons/cg";
import { CiDark, CiLight } from "react-icons/ci";
import { FaSun } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

export function ThemeChanger() {
    const { theme, setTheme } = useTheme();

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <CiLight size={25} /> : <MdDarkMode size={25} />}
        </button>
    );
}