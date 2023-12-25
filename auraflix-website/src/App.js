import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import QuizPage from './QuizPage'; // Import the QuizPage component

function HomePage() {
  const navigate = useNavigate();

  // Dummy data for top movies
  const topMovies = [
    'Top Gun',
    'Die Hard',
    'TBSBS',
    'Wish',
    'ZMD'
  ];

  // Function for handling quiz button click
  const handleTakeQuizClick = () => {
    navigate('/quiz');
  };

  return (
    <div className="App-container">
      <header className="App-header">
        <h1>AuraFlix</h1>
      </header>
      <div className="Content">
        <button className="Quiz-button" onClick={handleTakeQuizClick}>Take Quiz</button>
        <section className="Top-movies">
          <h2>Top Movies</h2>
          <ol className="Movie-list">
            {topMovies.map((movie, index) => (
              <li key={index} className="Movie-item">{movie}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;