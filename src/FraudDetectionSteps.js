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
                    fontSize: { xs: '1.5rem', sm: '2rem' }, // Adjust font size for smaller screens
                    color: 'primary.main'
                }}
            >
                How Our Fraud Detector Works
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    justifyContent: 'center',
                }}
            >
                {steps.map((step, index) => (
                    <Paper
                        key={index}
                        sx={{
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            borderRadius: 2,
                            boxShadow: 3,
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                                boxShadow: 6,
                            },
                            width: { xs: '100%', sm: '45%', md: '30%' }, // Responsive width
                            maxWidth: 375, // Limit max width
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: 60,
                                mb: 2,
                                color: 'primary.main',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {step.icon}
                        </Box>
                        <Typography 
                            variant="h6" 
                            sx={{ 
                                mb: 1, 
                                fontSize: '1.2rem', 
                                fontWeight: 'bold', 
                                textAlign: 'center' 
                            }}
                        >
                            {step.title}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            sx={{ 
                                textAlign: 'center', 
                                fontSize: { xs: '0.9rem', sm: '1rem' } 
                            }}
                        >
                            {step.description}
                        </Typography>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default FraudDetectionSteps;
