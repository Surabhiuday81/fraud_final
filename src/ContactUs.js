import React from 'react';
import { Typography, Container, useTheme, Link } from '@mui/material';

const ContactUs = () => {
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
                Contact Us
            </Typography>
            <Typography
                variant="body1"
                paragraph
                sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive font size
                }}
            >
                We would love to hear from you! If you have any questions, feedback, or inquiries, please reach out to us.
            </Typography>
            <Typography
                variant="body1"
                paragraph
                sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive font size
                }}
            >
                Email:{" "}
                <Link
                    href="mailto:surabhiuday81@gmail.com"
                    sx={{
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    Surabhiuday81@gmail.com
                </Link>
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Responsive font size
                }}
            >
                Phone:{" "}
                <Link
                    href="tel:+917093987668"
                    sx={{
                        color: 'primary.main',
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    +91 7093987668
                </Link>
            </Typography>
        </Container>
    );
};

export default ContactUs;
