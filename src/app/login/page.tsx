'use client';

import { Button, Paper, TextField } from "@mui/material"
import React from 'react';


function Login() {
    return (
        <>
            <TextField id="username" label="Username" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            <Button id="login" size="small" >
                Login
            </Button>
            <Button id="forgot-pass" size="small" >
                Forgot
            </Button>
        </>
    );
}

function SendData() {
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