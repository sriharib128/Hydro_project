# Hydro_project

## Overview
Hydro_project is a web application designed to analyze and visualize hydrological data. It includes various modules for discharge analysis and machine learning-based predictions.

## Project Structure
- **server/**: Contains the backend Python scripts for data analysis and machine learning.
  - `app.py`: Main application script.
  - `discharge_analysis.py`: Script for discharge data analysis.
  - `ml_module.py`: Machine learning module for predictions.
  - `requirements.txt`: Python dependencies.

- **src/**: Contains the frontend React application.
  - `App.jsx`: Main React component.
  - `components/`: Directory for React components.
    - `DQT.jsx`: Component for Discharge Quantile Table.
    - `Emperical.jsx`: Component for empirical data visualization.
    - `MLAnalysis.jsx`: Component for machine learning analysis.
  - `main.jsx`: Entry point for the React application.
  - `App.css` and `index.css`: CSS files for styling.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/hydro_project.git
    cd hydro_project
    ```

2. Install frontend dependencies:
    ```sh
    npm install
    ```

3. Install backend dependencies:
    ```sh
    pip install -r server/requirements.txt
    ```

## Usage

### Development Server

To start the front end server, run:
```sh
npm run dev
```

To start the front end server, run:
```sh
cd ./server
python app.py
```