import React from "react";
import {useState} from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

export default function App() {
    // state
    const [todos, setTodos] = useState([
        {id: 1, title: "Faire les courses", completed: false},
        {id: 2, title: "Faire la vaisselle", completed: false},
        {id: 3, title: "Faire le ménage", completed: false},
    ]);

    // comportement
    const handleDelete = (id) => {
        console.log(id);
        //1. copie du tableau
        const newTodos = [...todos];
        //2. manipuler mon state
        const newTodos2 = newTodos.filter((todo) => todo.id !== id);
        //3. mettre à jour mon state
        setTodos(newTodos2);

    }

    const handleAdd = (newTodo) => {
        const newTodos = [...todos];
        newTodos.push(newTodo);
        setTodos(newTodos);
    }

    // affichage (render)

    return (
        <div>
            <h1>Ma ToDoList</h1>
            <ul>
                {todos.map((todo) => (
                    <ToDoList todo={todo} onClick={() => handleDelete(todo.id)} key={todo.id}/>
                ))}
                <button onClick={() => setTodos([])}>Vider la liste</button>
            </ul>
            <ToDoForm handleAdd={handleAdd}/>
        </div>
    );
}