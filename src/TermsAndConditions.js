import React from 'react';
import { Typography, Container, useTheme, Box } from '@mui/material';

const TermsAndConditions = () => {
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
                border: `1px solid ${theme.palette.divider}`, 
                lineHeight: 1.6, // Increased line height for readability
            }}
        >
            <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
                Terms and Conditions
            </Typography>
            <Box sx={{ mb: 3 }}>
                <Typography variant="body1" paragraph>
                    Welcome to our website. These terms and conditions outline the rules and regulations for the use of our services.
                </Typography>
                <Typography variant="body1" paragraph>
                    By accessing this website, you agree to comply with and be bound by these terms and conditions. If you disagree with any part of these terms, please do not use our website.
                </Typography>
                <Typography variant="body1" paragraph>
                    We reserve the right to modify or replace these terms at any time. It is your responsibility to review these terms periodically.
                </Typography>
                <Typography variant="body1" paragraph>
                    If you have any questions about these terms, please contact us.
                </Typography>
            </Box>
        </Container>
    );
};

export default TermsAndConditions;
