'use client';

import { Button, Paper, TextField, Grid, Box, Stack, InputAdornment, IconButton} from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';


interface LoginData {
    id: string;
    username: string;
    password: string;
}


function SendData({ id, username, password } : LoginData) {
    // put actual stuff to look at user data here, ideally will look through our database for user data
    console.log("send data! " + id + " " + username + " " + password);
}

function ForgotPass() {
    // put actual forgot password stuff here, sending stuff to emails and whatnot
    console.log("forgot password! ");
}


function Login() {


    const userId = "login";
    const userName = "logan walker";
    const userPass = "password test";

    const [showPassword, setShowPassword] = React.useState(false);

    function HandlePasswordToggle() {
        
            setShowPassword((show) => !show)
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <h1> Login </h1>
            <TextField id="username" label="Username" variant="outlined" InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircleIcon />
                    </InputAdornment>
                ),
            }} />
            <TextField id="password" type={showPassword ? "text" : "password"} label="Password" variant="outlined" InputProps={{

                startAdornment: (
                    <InputAdornment position="start">
                        <IconButton
                            id="password"
                            onClick={HandlePasswordToggle}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}/>
            <Button id="login" size="small" onClick={ () => SendData({ id: userId, username: userName, password: userPass}) } endIcon={<SendIcon />} >
                Login
            </Button>
            <Button id="forgot-pass" size="small" onClick={ () => ForgotPass()} >
                Forgot password
            </Button>
        </>
    );
}


export default function Data() {

    return (
        <div className="tab">
                <Stack spacing={2} width={360}>
                    <Paper elevation={4}>
                        <Grid container spacing={2} justifyContent="center">
                            <Box sx={{
                                p: 4,
                                borderRadius: 6,
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr' },
                                gap: 2
                            }}>
                                <Login />
                            </Box>
                        </Grid>
                    </Paper>
                </Stack>
        </div>
    );
}