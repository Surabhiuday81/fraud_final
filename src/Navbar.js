import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, FormControlLabel, Switch, Box, Button } from '@mui/material';
import { Brightness4 as Brightness4Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, onThemeToggle }) => {
    const [scrolling, setScrolling] = useState(false);
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const appBarStyle = {
        transition: 'background-color 0.3s ease, opacity 0.3s ease',
        backgroundColor: scrolling 
            ? (isLightMode ? 'rgba(25, 118, 210, 0.8)' : 'rgba(33, 33, 33, 0.8)')
            : (isLightMode ? theme.palette.primary.main : 'transparent'),
        color: scrolling ? 'white' : (isLightMode ? 'white' : 'inherit'),
        backdropFilter: 'blur(10px)',
        boxShadow: scrolling ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
    };

    return (
        <AppBar position="fixed" sx={appBarStyle}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                FraudXpert
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit">Products</Button>
                    <Button color="inherit">Partners</Button>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={darkMode}
                                onChange={onThemeToggle}
                                icon={<Brightness7Icon />}
                                checkedIcon={<Brightness4Icon />}
                            />
                        }
                        label="Dark Mode"
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;