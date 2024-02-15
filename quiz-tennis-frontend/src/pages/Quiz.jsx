import React, { useEffect } from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const Quiz = () => {

    const navigate = useNavigate();
    
    const options = {
        border: 'solid rgba(0.5,0.5,0.5,0.2)',
        borderRadius: "10px", 
    };

    const correct = {
        border: 'solid rgba(0.5,0.5,0.5,0.2)',
        borderRadius: "10px",
        background: "#00ff00"
    };

    const wrong = {
        border: 'solid rgba(0.5,0.5,0.5,0.2)',
        borderRadius: "10px",
        background: "#ff0000"
    };
    
    const question_style = {
        border: 'solid rgba(0.5,0.5,0.5,0.2)',
        borderRadius: "10px",
        backgroundColor: "#2F6BC1",
        color: "#FFFFFF",
    };
    
    const main = {
        width: "40%",
        margin: "auto",
    }
    
    const onClickNext = async (correctAnswer, answer, index) => {
        setSelectedAnswerIndex(index)
        
        if(answer === correctAnswer) {
            setSelectedAnswer(true)
            console.log('right')
        }
        else {
            setSelectedAnswer(false)
            console.log('wrong')
        }
        
        setResult((prev) =>
            selectedAnswer ? {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1
            }
            : {
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1
            }
        )
            
        await sleep(1000)
        if(activeQuestion === questions.length - 1) {
            navigate("/")
        }
        else {
            setActiveQuestion((prev) => prev + 1);
        }
        setSelectedAnswerIndex(null)
    };
    
    const [questions, setQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })
    
    useEffect(() => {
        fetch('http://localhost:3001/api/questions')
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.error('Error fetching questions: ', error));
    }, []);


    return (
        <Container style={main}>
            {questions.length > 0 && ( // Check if questions array is not empty
                <div>
                    <h3 className="text-center p-3 mb-4 mt-5" style={question_style}>
                        {questions[activeQuestion].question}
                    </h3>
                    <ListGroup vertical>
                        {questions[activeQuestion].choices.map((answer, index) => (
                            <ListGroupItem variant="secondary" className="mt-3"
                            style={(selectedAnswerIndex === index) && selectedAnswer ? correct : (selectedAnswerIndex === index) && !selectedAnswer ? wrong : options} 
                            action onClick={() => onClickNext(questions[activeQuestion].correctAnswer, answer, index)}>
                                {answer}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </div>
            )}
        </Container>
    );
}

export default Quiz;