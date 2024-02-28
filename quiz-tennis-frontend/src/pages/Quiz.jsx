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
        backgroundColor: "#E3783B",
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
            setResult((prev) => ({
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1
            }))
        }
        else {
            setSelectedAnswer(false)
            setResult((prev) => ({
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1
            }))
        }

        await sleep(1000)
        if(activeQuestion < questions.length - 1) {
            setActiveQuestion((prev) => prev + 1);
        }
        //setAllAnswers([activeQuestion.correctAnswer, ...activeQuestion.incorrectAnswers].sort((a,b) => a < b ? -1 : 1))
        setSelectedAnswerIndex(null)
    };
    
    const [questions, setQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [allAnswers, setAllAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })
    
    useEffect(() => {
        fetch('https://the-trivia-api.com/api/questions?tags=tennis')
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.error('Error fetching questions: ', error));
    }, []);

    useEffect(() => {
        if (questions.length > 0) {
            setAllAnswers([questions[activeQuestion].correctAnswer, ...questions[activeQuestion].incorrectAnswers].sort((a,b) => a < b ? -1 : 1))
        }
    }, [questions, activeQuestion]);

    useEffect(() => {
        const handleNavigation = async () => {
            await sleep(1000)
            if (activeQuestion === questions.length - 1) {
                console.log(result);
                navigate("/quiz/result", {
                    state: {
                        questions: questions, 
                        result: result
                    }
                });
            }
        };
    
        handleNavigation();
        // eslint-disable-next-line
    }, [result]);

    return (
        <Container style={main} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
            {questions.length > 0 && ( // Check if questions array is not empty
                <div>
                    <h3 className="text-center p-3 mb-4 mt-5" style={question_style}>
                        {questions[activeQuestion].question}
                    </h3>
                    <ListGroup vertical>
                        {allAnswers.map((answer, index) => 
                            <ListGroupItem variant="secondary" className="mt-3"
                            style={(selectedAnswerIndex === index) && selectedAnswer ? correct : (selectedAnswerIndex === index) && !selectedAnswer ? wrong : options} 
                            action onClick={() => onClickNext(questions[activeQuestion].correctAnswer, answer, index)}>
                                {answer}
                            </ListGroupItem>
                        )}
                    </ListGroup>
                </div>
            )}
        </Container>
    );
}

export default Quiz;