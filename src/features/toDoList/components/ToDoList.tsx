import ToDoItem from "./ToDoItem"


const ToDoList = () => {
    return (
        <div className="p-5 w-2/3 bg-gray-800 m-auto grid grid-cols-2 gap-4 ">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default ToDoList
