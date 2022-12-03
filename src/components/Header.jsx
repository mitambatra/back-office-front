import React from 'react';
import Logo from './Logo';
import MenuBar from './MenuBar';
import { AppBar, Toolbar, Avatar, Container } from '@mui/material';

function Header() {

    return (
        <AppBar position="static" sx={{backgroundColor: "#009455", color: "#252122"}}>
            <Container maxWidth="xl" sx={{backgroundColor: "#009455"}}>
                <Toolbar
                    disableGutters
                    sx={{
                        display: "flex",
                        flexFlow: "row wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#009455"
                    }}
                >
                    <Logo />
                    <MenuBar />
                    <Avatar sx={{backgroundColor: "#252122"}}/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header