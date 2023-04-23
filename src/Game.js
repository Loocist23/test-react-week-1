import './App.css';
import { useState } from 'react';
import React from 'react';


function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
}

//on va faire en sorte que si on gagne on mette en evidence les 3 cases gagnantes

function ReturnNumberOfTurns(squares) {
    let count = 9;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] === 'X' || squares[i] === 'O') {
            count--;
        }
    }
    return count;



}

function Board({ xIsNext, squares, onPlay , currentMove}) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner === 'O' || winner === 'X') {
        status = "Winner: " + winner;
        if (winner === 'X') {
            status = <p style={{ color: 'red' }}>Winner: {winner}</p>
        }
        else {
            status = <p style={{ color: 'blue' }}>Winner: {winner}</p>
        }
    } else if (winner === "draw") {
        status = "It's a draw!";
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }




    const board = [];
    for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            const square = (
                <Square
                    value={squares[i * 3 + j]}
                    onSquareClick={() => handleClick(i * 3 + j)}
                />
            );
            row.push(square);
        }
        board.push(<div className="board-row">{row}</div>);
    }

    let numberOfTurns = ReturnNumberOfTurns(squares);

    return (
        <>
            <div className="status">{status}</div>
            <div className={"move"}>Number of turn left : {numberOfTurns} </div>
            <div className="board">{board}</div>
        </>
    );
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    function ResetGrid() {
        const nextHistory = [Array(9).fill(null)];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }



    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button className={"Timetravel"} onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className={"display"}>
            <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <button className={"Resetbutton"} onClick={() => ResetGrid()}> Reset </button>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
        </div>

    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            document.getElementsByClassName("square")[a].style.backgroundColor =
                "green";
            document.getElementsByClassName("square")[b].style.backgroundColor =
                "green";
            document.getElementsByClassName("square")[c].style.backgroundColor =
                "green";
            return squares[a];
        }
    }

    // Compter le nombre de cases remplies
    let filledSquares = 0;
    for (let i = 0; i < squares.length; i++) {
        if (squares[i]) {
            filledSquares++;
        }
    }

    // Vérifier si le jeu est un match nul
    if (filledSquares === squares.length) {
        return "draw";
    }

    return null;
}
