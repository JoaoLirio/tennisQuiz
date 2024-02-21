import React from "react";
import { useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap'

const Result = () => {
    const location = useLocation()

    const background = {
        border: 'solid rgba(0,0.5,0.5,0.2)',
        borderRadius: "10px",
        backgroundColor: "#E3783B",
        color: "#FFFFFF",
    };

    const numbers = {
        color: "#DFFF4F",
        fontSize: "150%"
    }

    return (
        <Container className="w-25 d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <h1 className="m-4">Result</h1>
            <Container className="p-3" style={background}>
                <p>
                    Total Question: <span style={numbers}> {location.state.questions.length} </span>
                </p>
                <p>
                    Total Score: <span style={numbers}> {location.state.result.score} </span>
                </p>
                <p>
                    Correct Answers: <span style={numbers}> {location.state.result.correctAnswers} </span>
                </p>
                <p>
                    Wrong Answers:<span style={numbers}> {location.state.result.wrongAnswers} </span>
                </p>
            </Container>
        </Container>
    )
}

export default Result;