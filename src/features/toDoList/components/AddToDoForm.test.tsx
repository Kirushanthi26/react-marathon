import { render, screen } from "@testing-library/react";
import AddToDoForm from "./AddToDoForm";
import userEvent from '@testing-library/user-event';


test('it shows two inputs and a button', () => {

    const mockAddTodo = jest.fn();

    //render the component 
    render(<AddToDoForm onAddNewToDo={mockAddTodo} />)

    //manipulate the component or find an element in it 
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button', { name: /add to list/i })

    //Assertion - make sure the component is doing what we expect it to do 
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();

})

/**
 * * render → puts your React component into a fake browser (render = open the page)
 * * screen → lets you find elements on the page (screen = look at the page)
 * * test = define one test -> Text inside quotes = what this test checks, When the test fails, Jest shows this text.
 * 
 * *jest.fn() creates a fake function (We don’t care what it does here)
 * *React renders the component, It appears in the test DOM
 * 
 * *Find all elements with role textbox (input type="text" → role textbox) -> inputs is an array [ input1, input2 ]
 * *Find one button, Button text should contain "add to list", /i means case-insensitive
 * 
 * 
 * *Check that there are exactly 2 inputs
 * *Check the button is present on the page
 * *If missing → ❌ test fails
 */


test("adds todo when user submits form", async () => {
    const mockAddTodo = jest.fn();
    const user = userEvent.setup();

    //render the component 
    render(<AddToDoForm onAddNewToDo={mockAddTodo} />)

    //find 2 inputs
    const taskInput = screen.getByRole('textbox', { name: /task/i })
    const descInput = screen.getByRole('textbox', { name: /description/i })
    const button = screen.getByRole('button', { name: /add to list/i })

    //event 
    await user.type(taskInput, 'Learn RTL')
    await user.type(descInput, 'Learning Today!')
    await user.click(button);

    //Assertion - make sure the props fn get called with task and description
    // check function call
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    expect(mockAddTodo).toHaveBeenCalledWith(
        expect.objectContaining({
            toDoName: "Learn RTL",
            description: "Learning Today!",
            isDone: false
        })
    )

    // check inputs are cleared
    expect(taskInput).toHaveValue("");
    expect(descInput).toHaveValue("");
})