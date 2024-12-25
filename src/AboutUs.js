import React from 'react';
import { Container, Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MissionIcon from '@mui/icons-material/Flag';
import ValuesIcon from '@mui/icons-material/Star';
import CompanyIcon from '@mui/icons-material/Business';

const AboutUs = () => {
    const theme = useTheme();

    return (
        <Container component="main" maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h2" align="center" sx={{ mb: 4, color: theme.palette.primary.main }}>
                About Us
            </Typography>

            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <CompanyIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Our Company
                </Typography>
            </Box>
            <Typography variant="body1" paragraph>
                We are a leading provider of fraud detection solutions, dedicated to protecting your financial transactions with advanced technology. Our innovative solutions are designed to detect and prevent fraudulent activities, ensuring the safety and security of your assets.
            </Typography>

            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <MissionIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Our Mission
                </Typography>
            </Box>
            <Typography variant="body1" paragraph>
                Our mission is to empower businesses and individuals by providing cutting-edge fraud detection tools. We aim to stay ahead of emerging threats and continuously improve our services to offer the highest level of protection and peace of mind.
            </Typography>

            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <ValuesIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Our Values
                </Typography>
            </Box>
            <Typography variant="body1" paragraph>
                Integrity, innovation, and customer satisfaction are the core values that drive our company. We are committed to delivering reliable and effective solutions while building lasting relationships with our clients.
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Meet Our Team
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 2, textAlign: 'center', '&:hover': { boxShadow: 6 } }}>
                            <Avatar
                                alt="S.Uday Kumar"
                                src="https://via.placeholder.com/150"
                                sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
                            />
                            <Typography variant="h6">S.Uday Kumar</Typography>
                            <Typography variant="body2" color="textSecondary">Team Leader</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 2, textAlign: 'center', '&:hover': { boxShadow: 6 } }}>
                            <Avatar
                                alt="M.Sree Charan"
                                src="https://via.placeholder.com/150"
                                sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
                            />
                            <Typography variant="h6">M.Sree Charan</Typography>
                            <Typography variant="body2" color="textSecondary">Team member</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 2, textAlign: 'center', '&:hover': { boxShadow: 6 } }}>
                            <Avatar
                                alt="B.Koushik"
                                src="https://via.placeholder.com/150"
                                sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
                            />
                            <Typography variant="h6">B.Koushik</Typography>
                            <Typography variant="body2" color="textSecondary">Team member</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{ p: 2, textAlign: 'center', '&:hover': { boxShadow: 6 } }}>
                            <Avatar
                                alt="S.Nishanth"
                                src="https://via.placeholder.com/150"
                                sx={{ width: 80, height: 80, mb: 2, mx: 'auto' }}
                            />
                            <Typography variant="h6">S.Nishanth</Typography>
                            <Typography variant="body2" color="textSecondary">Team member</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AboutUs;