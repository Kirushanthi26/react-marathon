import { useState, type FormEvent } from "react"
import type { ToDo } from "../types/ToDoType";

type AddToDoFormProps = {
    onAddNewToDo: (toDo: ToDo) => void
}


const AddToDoForm = ({ onAddNewToDo }: AddToDoFormProps) => {
    const [toDoName, setToDoName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newToDo: ToDo = {
            id: Math.random().toString(),
            toDoName,
            description,
            isDone: false
        }

        onAddNewToDo(newToDo)

        setToDoName("")
        setDescription("")
    }


    return (
        <div className="bg-gray-800 p-5 w-1/2 m-auto">
            <h1 className="text-3xl font-bold text-amber-200 text-center mb-2">To Do List</h1>

            <form onSubmit={handleSubmit} className="space-y-3">
                <label htmlFor="task">task</label>
                <input type="text" placeholder="To Do"
                    className="border border-amber-100 bg-amber-50 w-full p-2"
                    onChange={(e) => setToDoName(e.target.value)}
                    value={toDoName}
                    id="task" />

                <label htmlFor="description">Description</label>
                <input type="text" placeholder="To Do Description"
                    className="border border-amber-100 bg-amber-50 w-full p-2"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    id="description" />

                <button type="submit" className="bg-amber-200 w-full p-3">Add to list</button>
            </form>
        </div>
    )
}

export default AddToDoForm
