import { useState } from "react"
import AddToDoForm from "../components/AddToDoForm"
import ToDoList from "../components/ToDoList"
import type { ToDo } from "../types/ToDoType"

const ToDoIndex = () => {

    const [toDos, setToDos] = useState<ToDo[]>([])

    const handleAddNewTodos = (todo: ToDo) => {
        setToDos((prev) => {
            return [...prev, todo]
        })
    }


    return <div className="bg-gray-100 h-screen w-full">
        <div className="grid grid-rows-2 gap-5">
            <AddToDoForm onAddNewToDo={handleAddNewTodos} />
            <ToDoList toDos={toDos} />
        </div>
    </div>
}

export default ToDoIndex
