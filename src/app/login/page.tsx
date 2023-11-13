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
            <Button id="login" size="small" onClick={ () => SendData('login')}>
                Login
            </Button>
            <Button id="forgot-pass" size="small" onClick={ () => ForgotPass()}>
                Forgot my password
            </Button>
        </>
    );
}


export default function Data() {

    return (
        <div className="tab">
                <Stack spacing={2}>
                    <Paper elevation={8} alignItems="flex-end">
                        <Grid container spacing={2} align="center" justifyContent="center">
                            <Box sx={{
                                p: 4,
                                borderRadius: 6,
                                display: 'grid',
                                gridTemplateColumns: { md: '1fr 1fr' },
                                gap: 2
                            }}
                            >
                                <Login></Login>
                            </Box>
                        </Grid>
                    </Paper>
                </Stack>
        </div>
    );
}