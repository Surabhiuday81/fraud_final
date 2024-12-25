import React, { useState } from 'react';
import axios from 'axios';
import { Box, Container, Typography, IconButton, Button, TextareaAutosize } from '@mui/material';
import { CheckCircle, Error } from '@mui/icons-material';
import Lottie from 'react-lottie';
import successAnimation from './animations/success.json';  // Ensure correct path
import errorAnimation from './animations/error.json';  // Ensure correct path
import './AnimatedBackground.css'; // Ensure the CSS file is correctly linked

function PredictionForm() {
    const [inputData, setInputData] = useState("");
    const [prediction, setPrediction] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setInputData(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Clear previous errors

        const featureArray = inputData.split(',').map(f => parseFloat(f.trim()));

        if (featureArray.length !== 30) {
            setError("Please provide exactly 30 feature values.");
            return;
        }

        try {
            const response = await axios.post('https://fraud-backend-1qpf.onrender.com/predict', {
                features: featureArray
            });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("There was an error making the prediction request!", error);
            setError(error.response ? error.response.data : "There was an error making the prediction request!");
        }
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: prediction === 1 ? errorAnimation : successAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Container className="animated-background" sx={{ position: 'relative', p: 4, borderRadius: 2, boxShadow: 3 }}>
            <form onSubmit={handleSubmit}>
                <div>
                    
                    <Typography variant="h6" gutterBottom className="feature-label">
                    Enter Features (comma-separated):
                    </Typography>
                    <TextareaAutosize
                        minRows={4}
                        value={inputData}
                        onChange={handleChange}
                        placeholder="e.g., -1.3598071336738, -0.0727811733098497, ..."
                        required
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
                    />
                </div>
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Predict
                </Button>
            </form>
            {error && (
                <Box sx={{ mt: 2, color: 'red' }}>
                    <Typography variant="h6">Error: {error}</Typography>
                </Box>
            )}
            {prediction !== null && !error && (
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', color: prediction === 1 ? 'red' : 'green' }}>
                    <Lottie options={defaultOptions} height={50} width={50} />
                    <Typography variant="h5" sx={{fontWeight: 'bold', ml: 2 }}>
                        {prediction === 1 ? 'FRAUDULENT' : 'NOT FRAUDULENT'}
                    </Typography>
                    <IconButton sx={{ ml: 2 }} color="inherit">
                        {prediction === 1 ? <Error /> : <CheckCircle />}
                    </IconButton>
                </Box>
            )}
        </Container>
        
    );
}

export default PredictionForm;