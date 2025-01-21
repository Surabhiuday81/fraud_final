import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const WhyUseFraudDetector = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 4,
                bgcolor: 'background.default',
                minHeight: '300px', // Adjust height as needed
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: { xs: 3, md: 4 }, // Adjust padding based on screen size
                    maxWidth: '1000px',
                    width: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                    },
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: { xs: '1.5rem', md: '2rem' }, // Adjust font size for mobile
                    }}
                >
                    Why Use a Fraud Detector?
                </Typography>
                <Typography 
                    variant="body1" 
                    sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, lineHeight: 1.6 }} // Improved readability
                >
                    In today's fast-paced digital world, protecting your financial transactions is more crucial than ever. Our fraud detection technology provides real-time insights to catch fraudulent activities before they affect you. Leveraging advanced algorithms and behavioral analysis, we ensure that your transactions are safeguarded against the latest fraud trends. Experience peace of mind with our cutting-edge fraud detection solutions.
                </Typography>
            </Paper>
        </Box>
    );
};

export default WhyUseFraudDetector;
