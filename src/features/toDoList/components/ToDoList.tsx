import ToDoItem from "./ToDoItem"
import type { ToDo } from "../types/ToDoType"

type ToDoListProps = {
    toDos: ToDo[]
}

const ToDoList = ({ toDos }: ToDoListProps) => {
    return (
        <div className="p-5 w-2/3 bg-gray-800 m-auto grid grid-cols-2 gap-4 ">
            {toDos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)}
        </div>
    )
}

export default ToDoList
