import type { ToDo } from "../types/ToDoType"

type ToDoItemProps = {
    todo: ToDo
}

const ToDoItem = ({ todo }: ToDoItemProps) => {
    return (
        <div className="bg-gray-400 space-y-1 p-2">
            <h5 className="text-2xl">{todo.toDoName}</h5>
            <p className="font-semibold">{todo.description}</p>
            <div className="grid grid-cols-3 gap-2 *:bg-amber-200">
                <button>Delete</button>
                <button>Edit</button>
                <button>{todo.isDone ? "Done" : "Pending"}</button>
            </div>
        </div>
    )
}

export default ToDoItem
