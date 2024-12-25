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
                            p: 4,
                            bgcolor: 'background.default',
                        }}
                    >
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Introduction />
                                    <Container component="main" maxWidth="lg" sx={{ mt: 4, width: '110%' }}> 
                                        <PredictionForm />
                                        <Box sx={{ mt: 4 }}>
                                            <Typography variant="body2" color="textSecondary">
                                                Disclaimer: This tool is for informational purposes only and should not be considered as financial advice.
                                                Always consult with a financial expert before making any decisions based on the predictions.
                                            </Typography>
                                        </Box>
                                        <FraudDetectionSteps />
                                        <Box sx={{ mt: 4 }}>
                                            <WhyUseFraudDetector />
                                        </Box>
                                    </Container>
                                </>
                            } />
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