

const ToDoItem = () => {
    return (
        <div className="bg-gray-400 space-y-1 p-2">
            <h5 className="text-2xl">TO DO NAME</h5>
            <p className="font-semibold">DESC</p>
            <div className="grid grid-cols-3 gap-2 *:bg-amber-200">
                <button>Delete</button>
                <button>Edit</button>
                <button>Done</button>
            </div>
        </div>
    )
}

export default ToDoItem
