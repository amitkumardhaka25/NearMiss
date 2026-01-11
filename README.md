# Near Miss Dashboard

An interactive dashboard for analyzing near miss incidents in construction projects. This app processes a real-world JSON dataset (~7,800 records) and visualizes key insights using charts and trend analysis. Built with React and Vite for fast development and a clean user interface.

## Features

- Loads and processes JSON datasets with optional JSON-to-CSV conversion.
- Visualizations include bar charts, line charts, pie/donut charts, and trend analysis.
- Handles missing or incomplete data gracefully to ensure stability.
- Interactive and responsive UI for easy exploration of near miss incidents.
- Optional AI/LLM integration for question answering on dataset insights.

## Tech Stack

- Frontend: React + Vite
- Charting Library: Recharts (or specify what you used)
- Backend: (Specify if used, e.g., Node.js/Express or none)
- Dataset: JSON

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/near-miss-dashboard.git
   cd near-miss-dashboard
2.Install dependencies 
   npm install
3.Start the development server
  npm run dev
4. Open your browser at http://localhost:5173 (default Vite port) and upload the dataset.
