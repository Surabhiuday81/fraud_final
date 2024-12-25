import React from 'react';
import {  Typography, Container, useTheme } from '@mui/material';

const PrivacyPolicy = () => {
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
                Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
                We value your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your information.
            </Typography>
            <Typography variant="body1" paragraph>
                We collect information that you provide directly to us, as well as information collected automatically when you use our services.
            </Typography>
            <Typography variant="body1" paragraph>
                Your information may be used to improve our services, provide customer support, and communicate with you. We do not share your information with third parties except as required by law.
            </Typography>
            <Typography variant="body1">
                If you have any questions or concerns about our privacy practices, please contact us.
            </Typography>
        </Container>
    );
};

export default PrivacyPolicy;