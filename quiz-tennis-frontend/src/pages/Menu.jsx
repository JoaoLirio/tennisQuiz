import React from "react";
import { Link } from "react-router-dom";

import { Container } from 'react-bootstrap';

const Menu = () => {

    const button = {
        backgroundColor: "#E3783B",
        borderColor: "#E3783B"
    }
    
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <h1 className="pb-4"> Tennis Quiz </h1>
            <ul className="list-group border border-warning">
                <li className="list-group-item">
                    <Link to="/quiz" className="btn btn-primary" style={button}> Start </Link>
                </li>
            </ul>
        </Container>
    );
}

export default Menu;