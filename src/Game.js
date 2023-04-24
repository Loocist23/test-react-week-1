import './App.css';
import { useState } from 'react';
import React from 'react';
import Board from './components/Board';




//on va faire en sorte que si on gagne on mette en evidence les 3 cases gagnantes


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

