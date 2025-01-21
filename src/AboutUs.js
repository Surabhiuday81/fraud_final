import React from 'react';
import { Container, Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MissionIcon from '@mui/icons-material/Flag';
import ValuesIcon from '@mui/icons-material/Star';
import CompanyIcon from '@mui/icons-material/Business';

const AboutUs = () => {
    const theme = useTheme();

    return (
        <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4, px: 2 }}>
            <Typography
                variant="h2"
                align="center"
                sx={{ mb: 4, color: theme.palette.primary.main, fontSize: { xs: '2rem', md: '3rem' } }}
            >
                About Us
            </Typography>

            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <CompanyIcon sx={{ fontSize: { xs: 30, md: 40 }, color: theme.palette.primary.main, mr: 2 }} />
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                    Our Company
                </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                We are a leading provider of fraud detection solutions, dedicated to protecting your financial
                transactions with advanced technology. Our innovative solutions are designed to detect and prevent
                fraudulent activities, ensuring the safety and security of your assets.
            </Typography>

            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <MissionIcon sx={{ fontSize: { xs: 30, md: 40 }, color: theme.palette.primary.main, mr: 2 }} />
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                    Our Mission
                </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                Our mission is to empower businesses and individuals by providing cutting-edge fraud detection tools.
                We aim to stay ahead of emerging threats and continuously improve our services to offer the highest
                level of protection and peace of mind.
            </Typography>

            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <ValuesIcon sx={{ fontSize: { xs: 30, md: 40 }, color: theme.palette.primary.main, mr: 2 }} />
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                    Our Values
                </Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                Integrity, innovation, and customer satisfaction are the core values that drive our company. We are
                committed to delivering reliable and effective solutions while building lasting relationships with
                our clients.
            </Typography>

            <Box sx={{ mb: 4 }}>
    <Typography
        variant="h4"
        sx={{
            mb: 2,
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', md: '2rem' },
            textAlign: 'center',
        }}
    >
        Meet Our Team
    </Typography>
    <Grid container spacing={3} justifyContent="center" alignItems="center">
        {[
            { name: 'S.Uday Kumar', role: 'Team Leader', img: 'https://via.placeholder.com/150' },
            { name: 'M.Sree Charan', role: 'Team Member', img: 'https://via.placeholder.com/150' },
            { name: 'B.Koushik', role: 'Team Member', img: 'https://via.placeholder.com/150' },
            { name: 'S.Nishanth', role: 'Team Member', img: 'https://via.placeholder.com/150' },
        ].map((member, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
                <Paper
                    sx={{
                        p: 2,
                        textAlign: 'center',
                        '&:hover': { boxShadow: 6 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        alt={member.name}
                        src={member.img}
                        sx={{
                            width: { xs: 60, md: 80 },
                            height: { xs: 60, md: 80 },
                            mb: 2,
                        }}
                    />
                    <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }}>
                        {member.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}
                    >
                        {member.role}
                    </Typography>
                </Paper>
            </Grid>
        ))}
    </Grid>
</Box>


        </Container>
    );
};

export default AboutUs;
