import React from "react";

export default function ToDoList({todo, onClick}) {
    //state

    // comportement

    // affichage (render)
    return (
        <li className={"list"}>
            {todo.title} <button onClick={onClick}> Suprimer</button>
        </li>

    )
}