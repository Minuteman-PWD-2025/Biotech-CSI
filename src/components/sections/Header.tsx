import { AppBar, IconButton, Toolbar, Typography, makeStyles } from "@mui/material";

export default function Header() {
    return (
        <AppBar className="header">
            <Toolbar variant="regular" component="div">
                <Typography variant="h6" color="inherit" component="div">
                    Biotech CSI
                </Typography>
            </Toolbar>
        </AppBar>
    )
}