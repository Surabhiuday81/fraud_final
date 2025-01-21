import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Box, CssBaseline, createTheme, ThemeProvider, Typography } from '@mui/material';
import Navbar from './Navbar';
import PredictionForm from './PredictionForm';
import Footer from './Footer';
import Introduction from './Introduction';
import FraudDetectionSteps from './FraudDetectionSteps';
import WhyUseFraudDetector from './WhyUseFraudDetector';
import AboutUs from './AboutUs'; 
import TermsAndConditions from './TermsAndConditions'; 
import Blog from './Blog'; 
import PrivacyPolicy from './PrivacyPolicy'; 
import ContactUs from './ContactUs';

function App() {
    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        if (darkMode) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
    }, [darkMode]);

    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    };

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
        typography: {
            fontSize: 14,
            h2: { fontSize: '2rem', '@media (min-width:600px)': { fontSize: '2.5rem' } },
            body2: { fontSize: '0.875rem', '@media (min-width:600px)': { fontSize: '1rem' } },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                    <Navbar darkMode={darkMode} onThemeToggle={handleThemeToggle} />
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: { xs: 2, sm: 3, md: 4 },
                            bgcolor: 'background.default',
                        }}
                    >
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <Introduction />
                                        <Container
                                            component="main"
                                            maxWidth="lg"
                                            sx={{ mt: { xs: 2, sm: 3, md: 4 }, width: '100%' }}
                                        >
                                            <PredictionForm />
                                            <Box sx={{ mt: { xs: 2, md: 4 } }}>
                                                <Typography
                                                    variant="body2"
                                                    color="textSecondary"
                                                    sx={{
                                                        textAlign: 'center',
                                                        px: { xs: 1, sm: 2 },
                                                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                                                    }}
                                                >
                                                    Disclaimer: This tool is for informational purposes only and should not be considered as financial advice. Always consult with a financial expert before making any decisions based on the predictions.
                                                </Typography>
                                            </Box>
                                            <FraudDetectionSteps />
                                            <Box sx={{ mt: { xs: 2, md: 4 } }}>
                                                <WhyUseFraudDetector />
                                            </Box>
                                        </Container>
                                    </>
                                }
                            />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                        </Routes>
                    </Box>
                    <Footer darkMode={darkMode} onThemeToggle={handleThemeToggle} />
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
