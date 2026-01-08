import { render, screen } from "@testing-library/react";
import ToDoItem from "./ToDoItem";

const mockTodo = {
    id: "1",
    toDoName: "Learn RTL",
    description: "Testing basics",
    isDone: false,
};

test("renders todo name and description", () => {
    render(<ToDoItem todo={mockTodo} />);

    expect(screen.getByText("Learn RTL")).toBeInTheDocument();
    expect(screen.getByText("Testing basics")).toBeInTheDocument();
});

test("shows Pending button when todo is not done", () => {
    render(<ToDoItem todo={mockTodo} />);

    expect(
        screen.getByRole("button", { name: /pending/i })
    ).toBeInTheDocument();
});

test("shows Done button when todo is done", () => {
    render(
        <ToDoItem
            todo={{ ...mockTodo, isDone: true }}
        />
    );

    expect(
        screen.getByRole("button", { name: /done/i })
    ).toBeInTheDocument();
});

test("shows delete and edit buttons", () => {
    render(<ToDoItem todo={mockTodo} />);

    expect(
        screen.getByRole("button", { name: /delete/i })
    ).toBeInTheDocument();

    expect(
        screen.getByRole("button", { name: /edit/i })
    ).toBeInTheDocument();
});

/**
 * * here we do not have any user event 
 * 
 * 
 */
