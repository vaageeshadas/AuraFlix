import React, { useState } from 'react';

//TODO: 
//Add one more question
//Store question answers  -->  how to put in database?
//Calculate some kind of score
//Make page look nice 

function QuizPage() {
    const handleSubmit = () => {
        fetch('http://localhost:3001/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ answers }),
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch((error) => {
          console.error('Error:', error);
        });
      };


    // Array of questions
    const questions = [
      'Question 1',
      'Question 2',
      'Question 3', // Added third question
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
  
    // Styles
    const buttonStyle = (isSelected) => ({
      backgroundColor: isSelected ? 'gray' : 'white',
      padding: '10px 20px', // Larger button for better clickability
      margin: '5px', // Space out buttons
      fontSize: '16px', // Larger font size
      border: '1px solid black', // Add border to distinguish the buttons
      borderRadius: '5px', // Rounded corners for buttons
    });
  
    return (
        <div style={{ margin: '0 auto', width: '80%', textAlign: 'center' }}>
          <h1>Quiz Page</h1>
          {questions.map((question, index) => (
            <div key={index}>
              <h2>{question}</h2>
              <div style={{ margin: '20px 0' }}> {/* Add spacing around button group */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(option => (
                  <button 
                    key={option} 
                    onClick={() => handleAnswerChange(index, option)}
                    style={buttonStyle(answers[index] === option)}
                    onMouseOver={(event) => event.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(event) => event.target.style.transform = 'scale(1)'}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button 
        onClick={handleSubmit} // Add this line
        style={{ 
            marginTop: '50px', 
            padding: '10px 30px', 
            fontSize: '20px', 
            borderRadius: '50px', 
            border: 'none', 
            backgroundColor: '#FFD700', 
            boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)', 
            transition: 'all 0.3s ease 0s', 
            cursor: 'pointer', 
            outline: 'none' 
        }}
        onMouseOver={(event) => event.target.style.transform = 'scale(1.1)'}
        onMouseOut={(event) => event.target.style.transform = 'scale(1)'}
        >
        Submit
        </button> {/* Add submit button */}
        </div>
      );
  }
  
  export default QuizPage;