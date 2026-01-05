

const AddToDoForm = () => {
    return (
        <div className="bg-gray-800 p-5 space-y-3 w-1/2 m-auto">
            <h1 className="text-3xl font-bold text-amber-200 text-center">To Do List</h1>
            <input type="text" placeholder="To Do" className="border border-amber-100 bg-amber-50 w-full p-2" />
            <input type="text" placeholder="To Do Description" className="border border-amber-100 bg-amber-50 w-full p-2" />
            <button type="button" className="bg-amber-200 w-full p-3">Add to list</button>
        </div>
    )
}

export default AddToDoForm
