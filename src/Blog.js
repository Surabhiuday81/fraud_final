import React from 'react';
import {  Typography, Container, useTheme } from '@mui/material';

const Blog = () => {
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
                Blog
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to our blog! Here you will find the latest news and updates related to fraud detection and financial security.
            </Typography>
            <Typography variant="body1" paragraph>
                Stay tuned for insightful articles, case studies, and tips on how to protect yourself from fraudulent activities.
            </Typography>
        </Container>
    );
};

export default Blog;