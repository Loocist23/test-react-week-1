import React, {useState} from "react";

export default function ToDoForm({handleAdd}) {

    //states
    const [newTodo, setNewTodo] = useState("");
    //comportements
    const handleSubmit = (event) => {
        event.preventDefault();
        // on check si la todo est vide
        if (newTodo === "") {
            return;
        }
        const newTodoObject = {
            id: new Date().getTime(),
            title: newTodo,
            completed: false,
        };
        handleAdd(newTodoObject);
        setNewTodo("");
    }
    const handleChange = (event) => {
        setNewTodo (event.target.value);
    }

    //affichage (render)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTodo} onChange={handleChange} placeholder={"Ajouter une tache..."}/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}
