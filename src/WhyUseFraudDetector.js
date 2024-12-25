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
                    p: 4,
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
                    }}
                >
                    Why Use a Fraud Detector?
                </Typography>
                <Typography variant="body1">
                    In today's fast-paced digital world, protecting your financial transactions is more crucial than ever. Our fraud detection technology provides real-time insights to catch fraudulent activities before they affect you. Leveraging advanced algorithms and behavioral analysis, we ensure that your transactions are safeguarded against the latest fraud trends. Experience peace of mind with our cutting-edge fraud detection solutions.
                </Typography>
            </Paper>
        </Box>
    );
};

export default WhyUseFraudDetector;