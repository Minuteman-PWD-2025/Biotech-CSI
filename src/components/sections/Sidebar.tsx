import { Button, Paper } from "@mui/material"
import { usePathname } from "next/navigation"

// Placeholder. Should derive from one of our custom Button components.
export function SidebarButton({ }) {
    return (
        <></>
    )
}

export default function Sidebar() {
    return (
        <Paper className="sidebar" component="div" elevation={0}>
            <Button className="sidebar-button" variant={usePathname() == "/overview" ? "outlined" : "contained"} disableElevation LinkComponent="a" href="overview">
                Overview
            </Button>
            <Button className="sidebar-button" variant={usePathname() == "/people" ? "outlined" : "contained"} disableElevation LinkComponent="a" href="people">
                People
            </Button>
            <Button className="sidebar-button" variant={usePathname() == "/materials" ? "outlined" : "contained"} disableElevation LinkComponent="a" href="materials">
                Materials
            </Button>
            <Button className="sidebar-button" variant={usePathname() == "/logs" ? "outlined" : "contained"} disableElevation LinkComponent="a" href="logs">
                Logs
            </Button>
        </Paper>
    )
}