import React from 'react';
import { Typography, Container, useTheme } from '@mui/material';

const ContactUs = () => {
    const theme = useTheme(); // Access the current theme

    return (
        <Container 
            component="main" 
            maxWidth="md" 
            sx={{ 
                p: 4, 
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'background.paper', 
                borderRadius: 2, 
                boxShadow: 3, 
                border: `1px solid ${theme.palette.divider}` 
            }}
        >
            <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
                Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
                We would love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us.
            </Typography>
            <Typography variant="body1" paragraph>
                Email: <a href="mailto:surabhiuday81@gmail.com">Surabhiuday81@gmail.com</a>
            </Typography>
            <Typography variant="body1">
                Phone: +91 7093987668
            </Typography>
        </Container>
    );
};

export default ContactUs;