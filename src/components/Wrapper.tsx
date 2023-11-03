"use client";

import Sidebar from "./sections/Sidebar"
import Header from "./sections/Header"
import React, { useMemo } from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";

export default function Wrapper({ children }: { children: React.ReactNode }) {
    const globalTheme = useTheme(); //(optional) if you already have a theme defined in your app root, you can import here

    const tableTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: globalTheme.palette.mode, //let's use the same dark/light mode as the global theme
                    primary: globalTheme.palette.primary, 
                },
                typography: {
                    button: {
                        accentColor: "palegoldenrod",
                    },
                },
            }),
        [globalTheme],
    );


    return (
        <ThemeProvider theme={tableTheme}>
            <div className="wrapper">
                <Sidebar />
                <Header />
                {children}
            </div>
        </ThemeProvider>
    )
}