import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, InputBase } from '@mui/material';
import { Menu as MenuIcon, Search, Cancel } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';


const Navbar = () => {
    const [image, setImage] = useState('');

    const handleSearch = () => {
        console.log("make api call");
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar title="Pixabay" position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Pixabay Gallery App
                    </Typography>


                </Toolbar>
            </AppBar>
        </Box>
    )
}


export default Navbar
