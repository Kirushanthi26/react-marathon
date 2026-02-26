import { useReducer, useState } from "react"

// ----------------------
// Types
// ----------------------

type Task = {
    id: number
    title: string
    completed: boolean
}

type State = {
    tasks: Task[]
}

type Action =
    | { type: "ADD_TASK"; payload: string }
    | { type: "TOGGLE_TASK"; payload: number }
    | { type: "DELETE_TASK"; payload: number }
    | { type: "CLEAR_COMPLETED" }

// ----------------------
// Initial State
// ----------------------

const initialState: State = {
    tasks: []
}

// ----------------------
// Reducer Function
// ----------------------

function taskReducer(state: State, action: Action): State {
    switch (action.type) {
        case "ADD_TASK":
            if (!action.payload.trim()) return state

            const newTask: Task = {
                id: Date.now(),
                title: action.payload,
                completed: false
            }

            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }

        case "TOGGLE_TASK":
            return {
                ...state,
                tasks: state.tasks.map(task =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task
                )
            }

        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }

        case "CLEAR_COMPLETED":
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.completed)
            }

        default:
            return state
    }
}

// ----------------------
// Component
// ----------------------

export default function TaskManager() {
    const [state, dispatch] = useReducer(taskReducer, initialState)
    const [input, setInput] = useState("")

    const handleAdd = () => {
        dispatch({ type: "ADD_TASK", payload: input })
        setInput("")
    }

    return (
        <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "Arial" }} className="space-y-3">
            <h2 className="text-2xl font-extrabold">Task Manager</h2>

            {/* Input */}
            <div style={{ display: "flex", gap: 8 }}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Enter task..."
                    style={{ flex: 1, padding: 8 }}
                    className="border border-amber-300"
                />
                <button onClick={handleAdd}>Add</button>
            </div>

            {/* Task List */}
            <ul style={{ marginTop: 20 }} className="space-y-4">
                {state.tasks.map(task => (
                    <li
                        key={task.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 10
                        }}
                        className="bg-amber-100 p-3"
                    >
                        <span
                            onClick={() =>
                                dispatch({ type: "TOGGLE_TASK", payload: task.id })
                            }
                            style={{
                                cursor: "pointer",
                                textDecoration: task.completed ? "line-through" : "none"
                            }}
                        >
                            {task.title}
                        </span>

                        <button
                            onClick={() =>
                                dispatch({ type: "DELETE_TASK", payload: task.id })
                            }
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>

            {/* Clear Completed */}
            {state.tasks.length > 0 && (
                <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })} className="bg-amber-400 p-3">
                    Clear Completed
                </button>
            )}
        </div>
    )
}