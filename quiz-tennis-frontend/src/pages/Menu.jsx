import React from "react";

import { Container, ListGroup } from 'react-bootstrap';

const Menu = () => {

    const button = {
        backgroundColor: "#E3783B",
        borderColor: "#E3783B",
        borderRadius: "10px",
        color: "#FFFFFF"
    }

    const buttonsBox = {
        border: 'solid rgb(227, 120, 59)',
        borderRadius: "10px",
    }
    
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <div className="p-5" style={buttonsBox}>
                <h1 className="pb-4"> Tennis Quiz </h1>
                <ListGroup>
                    <ListGroup.Item className="mb-3 p-3" action href="/quiz" style={button}>
                        Start
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-3 p-3" action href="/leaderboard" style={button}>
                        Leaderboard
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </Container>
    );
}

export default Menu;