'use client';

import { Button, Paper, TextField, Grid, Box, Stack } from "@mui/material"
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
            <Button id="login" size="small" variant="outlined" onClick={ () => SendData('login')}>
                Login
            </Button>
            <Button id="forgot-pass" size="small" variant="outlined" onClick={ () => ForgotPass()}>
                Forgot my password
            </Button>
        </>
    );
}


export default function Data() {

    return (
        <div className="tab">
            <Stack spacing={2}>
                <Grid container spacing={2} align="center">
                    <Box sx={{
                        p: 2,
                        borderRadius: 5,
                        display: 'grid',
                        gridTemplateColumns: { md: '1fr 1fr' },
                        gap: 3
                    }}
                    >
                        <Paper elevation={8} align="center">
                            <Login></Login>
                        </Paper>
                    </Box>
                </Grid>
            </Stack>
        </div>
    );
}