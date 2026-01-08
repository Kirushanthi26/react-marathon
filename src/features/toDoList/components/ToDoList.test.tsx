import { render, screen } from "@testing-library/react";
import ToDoList from "./ToDoList";

const mockTodos = [
    {
        id: "1",
        toDoName: "Learn RTL",
        description: "Testing basics",
        isDone: false,
    },
    {
        id: "2",
        toDoName: "Learn Jest",
        description: "Matchers",
        isDone: true,
    },
];

test("renders all todo items", () => {
    render(<ToDoList toDos={mockTodos} />);

    expect(screen.getByText("Learn RTL")).toBeInTheDocument();
    expect(screen.getByText("Learn Jest")).toBeInTheDocument();
});

test("renders correct number of todo items", () => {
    render(<ToDoList toDos={mockTodos} />);

    // each item has a heading (h5)
    const headings = screen.getAllByRole("heading", { level: 5 });

    expect(headings).toHaveLength(2);
});
