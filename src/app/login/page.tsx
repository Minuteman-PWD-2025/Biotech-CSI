'use client';

import { Button, Paper, TextField } from "@mui/material"
import React from 'react';


function SendData({string} : id) {
    // put actual stuff to look at user data here
}

function ForgotPass() {
    // put actual forgot password stuff here
}

function Login() {
    return (
        <>
            <TextField id="username" label="Username" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            <Button id="login" size="small" onClick={ () => SendData('login')}>
                Login
            </Button>
            <Button id="forgot-pass" size="small" onClick={ () => ForgotPass()}>
                Forgot
            </Button>
        </>
    );
}


export default function Data() {

    return (
        <div className="tab">
            <Paper elevation={8}>
                <Login></Login>
            </Paper>
        </div>
    );
}