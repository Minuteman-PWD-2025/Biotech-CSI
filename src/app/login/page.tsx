'use client';

import { Button, Paper, TextField } from "@mui/material"
import React from 'react';


function Login() {
    return (
        <>
            <TextField>
                Username
            </TextField>
            <TextField>
                Password
            </TextField>
            <Button>
                Login
            </Button>
            <Button>
                Forgot my password!
            </Button>
        </>
    );
}

export default function Data() {

    return (
        <div className="tab">
            <Paper>
                <Login></Login>
            </Paper>
        </div>
    );
}