import React, {useState, useEffect} from "react";
import { Container, Table } from "react-bootstrap";

const Leaderboard = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/leaderboard')
         .then(response => response.json())
         .then(data => {
                setData(data)
                setLoading(false)
            })
         .catch(error => console.error('Error fetching leaderboard:', error))
    }, [])


    return (
        <Container className="w-25 d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <h1 className="m-4">Leaderboard</h1>
            {loading? <p>Loading...</p> :
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((player, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{player.playerName}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            }
        </Container>
    )
}

export default Leaderboard;