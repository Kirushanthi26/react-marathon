import AddToDoForm from "../components/AddToDoForm"
import ToDoList from "../components/ToDoList"

const ToDoIndex = () => {
    return <div className="bg-gray-100 h-screen w-full">
        <div className="grid grid-rows-2 gap-5">
            <AddToDoForm />
            <ToDoList />
        </div>
    </div>
}

export default ToDoIndex
