import React from 'react';
import { Typography, Container, useTheme } from '@mui/material';

const Blog = () => {
    const theme = useTheme(); // Access the current theme

    return (
        <Container
            component="main"
            maxWidth="md"
            sx={{
                p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'background.paper',
                borderRadius: 2,
                boxShadow: 3,
                border: `1px solid ${theme.palette.divider}`,
                mt: { xs: 2, sm: 3 }, // Responsive top margin
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    mb: { xs: 1, sm: 2 },
                    color: 'primary.main',
                    fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' }, // Responsive font size
                }}
            >
                Blog
            </Typography>
            <Typography
                variant="body1"
                paragraph
                sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive font size
                }}
            >
                Welcome to our blog! Here you will find the latest news and updates related to fraud detection and financial security.
            </Typography>
            <Typography
                variant="body1"
                paragraph
                sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive font size
                }}
            >
                Stay tuned for insightful articles, case studies, and tips on how to protect yourself from fraudulent activities.
            </Typography>
        </Container>
    );
};

export default Blog;
