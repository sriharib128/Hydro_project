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
                <button type="submit" disabled={loading}>Submit</button>
            </form>
            {result && (
                <div className="results">
                    <img src={result.plot} alt="Water Quality Plot" />
                    <p>Water Quality Index: {result.index}</p>
                </div>
            )}
        </div>
    );
}

export default DQT;
