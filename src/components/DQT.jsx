import React, { useState } from 'react';

function DQT() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', event.target.water_quality.files[0]);
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5000/dqt', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="section">
            <h2>Water Quality Analysis</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" name="water_quality" required />
                <button type="submit" disabled={loading}>
                    {loading ? 'Processing...' : 'Submit'}
                </button>
            </form>
            {result && (
                <div className="results">
                    <div>
                        <h3>Plots:</h3>
                        <div>
                            <h4>Release Plot:</h4>
                            <img src={result.release_plot} alt="Release Plot" />
                        </div>
                        <div>
                            <h4>Flow Moving Average Plot:</h4>
                            <img src={result.flow_moving_avg_plot} alt="Flow Moving Average Plot" />
                        </div>
                        <div>
                            <h4>Frequency Curve Plot:</h4>
                            <img src={result.frequency_curve_plot} alt="Frequency Curve Plot" />
                        </div>
                    </div>
                    <div>
                        <h3>7Q5 Value:</h3>
                        <p>{result['7Q5_m3_s']} m³/s</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DQT;
