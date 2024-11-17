import React, { useState } from 'react';

function MLAnalysis() {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('train_data', event.target.train_data.files[0]);
        formData.append('test_data', event.target.test_data.files[0]);
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:5000/ml', {
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
            <h2>ML Analysis</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" name="train_data" required />
                <input type="file" name="test_data" required />
                <button type="submit" disabled={loading}>Submit</button>
            </form>
            {result && (
                <div className="results">
                    {/* Display all plots */}
                    {result.plots.map((plot, index) => (
                        <div key={index}>
                            <h3>{plot.title}</h3>
                            <img
                                src={`data:image/png;base64,${plot.image}`}
                                alt={`Plot ${index}`}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    ))}

                    {/* Display all metrics */}
                    {/* <h3>Model Results</h3>
                    {result.metrics.models_results.map((modelResult, index) => (
                        <div key={index}>
                            <p><strong>Model:</strong> {modelResult.model}</p>
                            <p><strong>MAE:</strong> {modelResult.mae}</p>
                            <p><strong>R²:</strong> {modelResult.r2}</p>
                        </div>
                    ))} */}

                    <h3>Final Results</h3>
                    {result.metrics.final_results.map((finalResult, index) => (
                        <div key={index}>
                            <p><strong>Model:</strong> {finalResult.model}</p>
                            <p><strong>MAE:</strong> {finalResult.mae}</p>
                            <p><strong>R²:</strong> {finalResult.r2}</p>
                        </div>
                    ))}

                    {/* Provide downloadable CSV file */}
                    <a
                        href={`data:text/csv;base64,${result.predictions_csv_base64}`}
                        download="predictions.csv"
                    >
                        Download Predictions CSV
                    </a>
                </div>
            )}
        </div>
    );
}

export default MLAnalysis;
