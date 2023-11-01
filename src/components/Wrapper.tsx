"use client";

import Sidebar from "./sections/Sidebar"
import Header from "./sections/Header"
import React from "react";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";

export default function Wrapper({ children } : { children: React.ReactNode}) {
    const muiTheme: ThemeOptions = {
        palette: {
            background: {
                default: "#fff"
            }
        }
    }

    return (
        <ThemeProvider theme={createTheme(muiTheme)}>
        <div className="wrapper">
            <Sidebar/>
            <Header/>

            {children}

            {/* Used for background */}
            <div className="absolute bg-gray-100 outline-1 -outline-offset-1 outline-gray-300 outline row-start-1 row-end-2 col-start-1 col-end-3 -z-1"></div>
        </div>
        </ThemeProvider>
    )
}