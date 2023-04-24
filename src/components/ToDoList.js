import React from "react";

export default function ToDoList({todo, handleDelete}) {
    //state

    // comportement

    // affichage (render)
    return (
        <div>
            <li>{todo.title} <button onClick={() => handleDelete(todo.id)}> Suprimer</button></li>
        </div>
    )
}