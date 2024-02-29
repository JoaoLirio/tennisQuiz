import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Container, InputGroup, Form, Button } from 'react-bootstrap'
import { useNavigate } from "react-router";

const Result = () => {
    const location = useLocation()
    const navigate = useNavigate();

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

    const [playerName, setPlayerName] = useState('')
    const score = location.state.result.score

    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
        console.log(playerName)
      };

    const saveScore = async () => {
        try {
            await fetch('http://localhost:5000/leaderboard', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ playerName, score }),
            });
            navigate('quiz/result');
        } catch (error) {
            console.error('Error saving leaderboard entry: ', error);
        }
    }

    return (
        <Container className="w-25 d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <h1 className="m-4">Result</h1>
            <Container className="p-3" style={background}>
                <p>
                    Total Questions: <span style={numbers}> {location.state.questions.length} </span>
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
            <Form className="m-4">
                <InputGroup className="mb-3">
                    <InputGroup.Text>Name</InputGroup.Text>
                    <Form.Control required placeholder="Name"
                    value={playerName}
                    onChange={handleInputChange}/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
                <Button variant="outline-secondary" className="m-2" href="/">Discard Score</Button>
                <Button 
                    type="submit" variant="warning" className="m-2" onClick={saveScore} href="/"
                    style={{ color: "#FFFFFF", backgroundColor: "#E3783B", borderColor: "#E3783B"}}>
                    Save Score
                </Button>
            </Form>
        </Container>
    )
}

export default Result;