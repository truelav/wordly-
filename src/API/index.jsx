import { useEffect, useState } from "react";
// import { getItems, updateItem, deleteItem } from './todo'

export default function API() {

    const [todos, setTodos] = useState()

    return (
        <>
            <h1>Todo List</h1>
            <div className="container">
                <input />
                <button className="">Add Todo</button>
            </div>
        </>
    )
}