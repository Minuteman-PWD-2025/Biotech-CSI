﻿'use client';

import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Paper, TextField, Grid, Box, Stack, InputAdornment, IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from 'react';


function Login() {

    const navigate = useNavigate();

    const [inputValue, sendInputValue] = React.useState({
        user: String,
        pass: String
    });

    const handleChange = (name: any) => (event : any) => {
        sendInputValue({ ...inputValue, [name]: event.target.value });
    };

    function SendData() {
        //console.log(inputValue.user + " " + inputValue.pass);
        navigate('/overview');
    }

    function ForgotPass() {
        // put actual forgot password stuff here, sending stuff to emails and whatnot
        console.log("forgot password! ");
    }

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
            <TextField id="username" label="Username" variant="outlined" value={inputValue.user} onChange={handleChange('user')} InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <AccountCircleIcon />
                    </InputAdornment>
                ),
            }} />
            <TextField id="password" type={showPassword ? "text" : "password"} label="Password" variant="outlined" value={inputValue.pass} onChange={handleChange('pass')} InputProps={{

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
            }} />
            <Button id="login" size="small" onClick={ () => SendData() } endIcon={<SendIcon />} >
                Login
            </Button>
            <Button id="forgot-pass" size="small" onClick={ () => ForgotPass() } >
                Forgot password
            </Button>
        </>
    );
}


export default function Data() {
    return (
        <div className="tab" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Stack spacing={2} width={360}>
                <Paper elevation={4}>
                    <Grid container spacing={2} justifyContent="center">
                        <Box
                            sx={{
                                p: 4,
                                borderRadius: 6,
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr' },
                                gap: 2,
                            }}
                        >
                            <Login />
                        </Box>
                    </Grid>
                </Paper>
            </Stack>
        </div>
    );
}