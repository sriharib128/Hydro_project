import React, { useState } from 'react';

function Empirical() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('runoff_tif_path', event.target.runoff.files[0]);
        formData.append('rainfall_tif_path', event.target.rainfall.files[0]);
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5000/empirical', {
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
            <h2>Empirical Analysis</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" name="runoff" required />
                <input type="file" name="rainfall" required />
                <button type="submit" disabled={loading}>Submit</button>
            </form>
            {result && (
                <div className="results">
                    <img src={result.plots.runoff_coeff} alt="Runoff Coefficient" />
                    <img src={result.plots.rainfall} alt="Rainfall Intensity" />
                    <img src={result.plots.discharge_map} alt="Discharge Map" />
                    <p>Total Discharge: {result.values.total_discharge}</p>
                    <p>Reservoir Area: {result.values.reservoir_area}</p>
                </div>
            )}
        </div>
    );
}

export default Empirical;
