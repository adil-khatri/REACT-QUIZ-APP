import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import './components/Quiz.css'


const Service = () => {

    const questions = [
        {
            questionText: "What is the Capital of Germany?",
            answerOptions: [
                {answerText: "New York", isCorrect: false},
                {answerText: "Paris", isCorrect: false},
                {answerText: "Berlin", isCorrect: true},
                {answerText: "Frankfurt", isCorrect: false},
            ],
        },
        {
            questionText: "Who is the CEO of Tesla?",
            answerOptions: [
                {answerText: "Elon Musk", isCorrect: true},
                {answerText: "Sundar Pichai", isCorrect: false},
                {answerText: "Mark Zukerburg", isCorrect: false},
                {answerText: "Jordan Walke", isCorrect: false},
            ],
        },
        {
            questionText: "What was Turkish city of Istanbul called before 1930?",
            answerOptions: [
                {answerText: "Ankara", isCorrect: false},
                {answerText: "Constantinople", isCorrect: true},
                {answerText: "Aleppo", isCorrect: false},
                {answerText: "Bishkek", isCorrect: false},
            ],
        },
        {
            questionText: "What is the currency of Denmark?",
            answerOptions: [
                {answerText: "Rand", isCorrect: false},
                {answerText: "Euro", isCorrect: false},
                {answerText: "Krone", isCorrect: true},
                {answerText: "Dollor", isCorrect: false},
            ],
        },
        {
            questionText: "What language is spoken in Brazil?",
            answerOptions: [
                {answerText: "English", isCorrect: false},
                {answerText: "Portuguese", isCorrect: true},
                {answerText: "Spanish", isCorrect: false},
                {answerText: "Hindi", isCorrect: false},
            ],
        },
        {
            questionText: "How many centimetres in a metre?",
            answerOptions: [
                {answerText: "1000", isCorrect: false},
                {answerText: "100", isCorrect: true},
                {answerText: "10.0", isCorrect: false},
                {answerText: "50", isCorrect: false},
            ],
        },
        {
            questionText: "What is the busiest airport in Britain called?",
            answerOptions: [
                {answerText: "Houston", isCorrect: false},
                {answerText: "London Heathrow", isCorrect: true},
                {answerText: "Munich", isCorrect: false},
                {answerText: "Gatwick", isCorrect: false},
            ],
        },
        {
            questionText: "How many keys are there on a piano?",
            answerOptions: [
                {answerText: "88", isCorrect: true},
                {answerText: "100", isCorrect: false},
                {answerText: "102", isCorrect: false},
                {answerText: "103", isCorrect: false},
            ],
        },
        {
            questionText: "Which planet has the most moons?",
            answerOptions: [
                {answerText: "Saturn", isCorrect: true},
                {answerText: "Earth", isCorrect: false},
                {answerText: "Mars", isCorrect: false},
                {answerText: "Jupiter", isCorrect: false},
            ],
        },
        {
            questionText: "What is Virat Kohli’s ODI shirt number?",
            answerOptions: [
                {answerText: "18", isCorrect: true},
                {answerText: "888", isCorrect: false},
                {answerText: "66", isCorrect: false},
                {answerText: "27", isCorrect: false},
            ],
        },
    ];



    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    // for Answer Click Button
    const handleAnswerClickButton = (isCorrect) => {
        if(isCorrect === true){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion<questions.length){
            setCurrentQuestion(nextQuestion);   
        }else{
            setShowScore(true);
        }        
    }

    // For Submit Button
    const handleSubmitClickButton = (isCorrect) => {
        if(isCorrect===true){
            setScore(score + 1);
        }
        setShowScore(true);
    }

    // for next button
    const handleNextClickButton = () => {

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion<questions.length){
            setCurrentQuestion(nextQuestion);   
        }
    }

    // For previous Question    
    const handlePreviousClickButton = () => {
        

        const previousQuestion = currentQuestion - 1;
        if(previousQuestion<questions.length){
            setCurrentQuestion(previousQuestion);           
        }else{
            alert("You are on 1st Quiz");     //
        }
        
    }

    return (
        <>
        <div className="container1">
        <div className="heading">*Quiz By Adil Khatri*</div>
        <div className="container">
        {showScore ?  ( 
            <>
            <div className="score-section"> Quiz Over. You scored {score} out of {questions.length}</div> 
            
            </>
        ) : (
            <>
        
            <div className="question-section">
                <div className="question-count">
                <span className="bigtext">Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">{questions[currentQuestion].questionText}</div>
            </div>

            <button onClick={handlePreviousClickButton} className="previous-question"><i className="fas fa-arrow-circle-left"></i></button>
            <button onClick={handleSubmitClickButton} className="submit-question">Submit</button>
            <button onClick={handleNextClickButton} className="next-question"><i className="fas fa-arrow-circle-right"></i></button>

            <div className="answer-section">
               {questions[currentQuestion].answerOptions.map((answerOptions) => (
                   <button onClick={() => handleAnswerClickButton(answerOptions.isCorrect)} className="btn2">{answerOptions.answerText}</button>
               ))}
            </div>   
        </>
        )}
        </div>
        </div>
      </>  
    );
}

export default Service;
