'use client';

import { Button, Paper, TextField } from "@mui/material"
import React from 'react';


function SendData({string} : id) {
    // put actual stuff to look at user data here, ideally will look through our database for user data
}

function ForgotPass() {
    // put actual forgot password stuff here, sending stuff to emails and whatnot
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