'use client';

import { Button, Paper, TextField, Grid, Box, Stack} from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import React from 'react';


interface Data {
    id: string;
}

function SendData({ id } : Data) {
    // put actual stuff to look at user data here, ideally will look through our database for user data
    console.log("send data! " + id);
}

function ForgotPass() {
    // put actual forgot password stuff here, sending stuff to emails and whatnot
    console.log("forgot password! ");
}


function Login() {


    const userId = "login";

    return (
        <>
            <h1> Login </h1>
            <TextField id="username" label="Username" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            <Button id="login" size="small" onClick={ SendData({ id: userId }) } endIcon={<SendIcon />} >
                Login
            </Button>
            <Button id="forgot-pass" size="small" onClick={ () => ForgotPass()} endIcon={<QuestionMarkIcon />}>
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