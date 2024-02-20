import React from "react";
import { useLocation } from 'react-router-dom';

const Result = ({route,navigate}) => {
    const location = useLocation()

    return (
        <div>
            <h3>Result</h3>
            <p>
                Total Question: <span>{location.state.questions.length}</span>
            </p>
            <p>
                Total Score:<span> {location.state.result.score}</span>
            </p>
            <p>
                Correct Answers:<span> {location.state.result.correctAnswers}</span>
            </p>
            <p>
                Wrong Answers:<span> {location.state.result.wrongAnswers}</span>
            </p>
        </div>
    )
}

export default Result;