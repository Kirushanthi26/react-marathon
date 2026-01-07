import { render, screen } from '@testing-library/react'
import AddToDoForm from './AddToDoForm'


test('it shows two inputs and a button', () => {

    const mockAddTodo = jest.fn();

    //render the component 
    render(<AddToDoForm onAddNewToDo={mockAddTodo} />)

    //manipulate the component or find an element in it 
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button', { name: /add to list/i })

    //Assertion - make sure the component is doing what we expect it to do 
    expect(inputs).toHaveLength(2)
    expect(button).toBeInTheDocument()

})