import React, { useState } from 'react';

//TODO: 
//Add one more question
//Store question answers  -->  how to put in database?
//Calculate some kind of score
//Make page look nice 

function QuizPage() {
  // Array of questions
  const questions = [
    'Question 1',
    'Question 2',
    // ... add more questions
  ];

  // State to store the answers
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // Function to handle answer selection
  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = selectedOption;
      return newAnswers;
    });
  };

  return (
    <div>
      <h1>Quiz Page</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <h2>{question}</h2>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(option => (
            <button 
              key={option} 
              onClick={() => handleAnswerChange(index, option)}
              style={{ backgroundColor: answers[index] === option ? 'blue' : 'white' }}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default QuizPage;