import React from 'react';
import { Box, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import introAnimation from './animations/intro.json'; // Ensure this path is correct

const Introduction = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: introAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on smaller screens, horizontally on larger screens
                alignItems: 'center',
                justifyContent: 'center', // Center content horizontally
                textAlign: { xs: 'center', md: 'left' },
                p: 4,
                bgcolor: 'background.paper',
                gap: { xs: 1, md: 2 }, // Adjust gap between text and animation
                overflow: 'hidden', // Prevents cropping of animation
            }}
        >
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, maxWidth: '50%', pr: { md: 2 } }}>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    Welcome to Our Financial Fraud Detection
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Discover how our advanced fraud detection technology helps safeguard your financial transactions.
                    Enter your credit card features to check for any fraudulent activity with our reliable predictor.
                </Typography>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', overflow: 'hidden', maxWidth: '50%' }}>
                <Lottie options={defaultOptions} height={300} width={300} style={{ maxHeight: '100%', maxWidth: '100%' }} /> {/* Adjusted size */}
            </Box>
        </Box>
    );
};

export default Introduction;