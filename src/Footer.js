import React from 'react';
import { Box, Typography, Link, IconButton, Container } from '@mui/material';
import { Facebook, LinkedIn, YouTube, Twitter } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = ({ darkMode, onThemeToggle }) => {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 2, mt: 'auto' }} component="footer">
            <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', gap: 3, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <Link component={RouterLink} to="/blog" color="inherit" underline="none">Blog</Link>
                    <Link component={RouterLink} to="/privacy-policy" color="inherit" underline="none">Privacy Policy</Link>
                    <Link component={RouterLink} to="/terms-and-conditions" color="inherit" underline="none">Terms and Conditions</Link>
                    <Link component={RouterLink} to="/about-us" color="inherit" underline="none">About Us</Link>
                    <Link component={RouterLink} to="/contact-us" color="inherit" underline="none">Contact Us</Link>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton aria-label="Facebook" color="inherit" component="a" href="https://www.facebook.com">
                        <Facebook />
                    </IconButton>
                    <IconButton aria-label="LinkedIn" color="inherit" component="a" href="https://www.linkedin.com/in/surabhi-uday-kumar-642750229">
                        <LinkedIn />
                    </IconButton>
                    <IconButton aria-label="YouTube" color="inherit" component="a" href="https://www.youtube.com">
                        <YouTube />
                    </IconButton>
                    <IconButton aria-label="Twitter" color="inherit" component="a" href="https://www.twitter.com">
                        <Twitter />
                    </IconButton>
                </Box>
                <Typography variant="body2" sx={{ mt: 2 }}>
                    &copy; 2024 FraudXpert. All rights reserved. &trade;
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;