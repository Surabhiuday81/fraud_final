import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { AccessAlarm, Security, People, BarChart } from '@mui/icons-material';

const steps = [
    {
        title: "Real-Time Fraud Detection",
        description: "Transactions are analyzed instantly, allowing us to identify and stop fraudulent activities before they impact your business or personal finances.",
        icon: <AccessAlarm />,
    },
    {
        title: "Machine Learning-Powered Security",
        description: "Our system uses advanced machine learning algorithms that continuously adapt to new fraud patterns, making our detection smarter and more effective over time.",
        icon: <Security />,
    },
    {
        title: "Behavioral Analysis",
        description: "By analyzing typical transaction behaviors, we can spot unusual or suspicious activities, helping to catch fraudsters who may mimic legitimate transactions.",
        icon: <People />,
    },
    {
        title: "Predictive Analytics",
        description: "Using historical data and statistical models, we predict the likelihood of a transaction being fraudulent, enabling us to prevent fraud before it occurs.",
        icon: <BarChart />,
    }
];

const FraudDetectionSteps = () => {
    return (
        <Box sx={{ p: 4, bgcolor: 'background.paper' }}>
            <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                    textAlign: 'center', 
                    mb: 4, 
                    fontWeight: 'bold', 
                    fontSize: '2rem', 
                    color: 'primary.main' // Consistent color with the "Welcome" heading
                }}
            >
                How Our Fraud Detector Works
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap', // Allow wrapping if needed
                    gap: 3, // Space between cards
                    justifyContent: 'center',
                }}
            >
                {steps.map((step, index) => (
                    <Paper
                        key={index}
                        sx={{
                            p: 1, // Padding inside the card
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            borderRadius: 2, // Rounded corners
                            boxShadow: 3,
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: 6,
                            },
                            width: 375, // Increased width for each card
                            height: 225, // Height for each card
                            overflow: 'hidden'
                        }}
                    >
                        <Box sx={{ 
                            fontSize: 80, // Adjusted icon size
                            mb: 2, 
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50, // Adjusted height for icon container
                            width: 50 // Adjusted width for icon container
                        }}>
                            {step.icon}
                        </Box>
                        <Typography variant="h6" sx={{ mb: 1, fontSize: '1.2rem', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {step.title}
                        </Typography>
                        <Typography variant="body2" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'normal' }}>
                            {step.description}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default FraudDetectionSteps;