import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from '../TodoList'

describe('TodoList component', ()=>{
  test('renders initial todos', ()=>{
    render(<TodoList />)
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Build a Todo app')).toBeInTheDocument()

    const completed = screen.getByText('Build a Todo app')
    expect(completed).toHaveStyle('text-decoration: line-through')
  })

  test('adds a new todo', ()=>{
    render(<TodoList />)
    const input = screen.getByLabelText('todo-input')
    const button = screen.getByText('Add')

    fireEvent.change(input, { target: { value: 'Write tests' } })
    fireEvent.click(button)

    expect(screen.getByText('Write tests')).toBeInTheDocument()
  })

  test('toggles a todo', ()=>{
    render(<TodoList />)

    const todoText = screen.getByText('Learn React')
    expect(todoText).toHaveStyle('text-decoration: none')

    fireEvent.click(todoText)
    expect(todoText).toHaveStyle('text-decoration: line-through')

    fireEvent.click(todoText)
    expect(todoText).toHaveStyle('text-decoration: none')
  })

  test('deletes a todo', ()=>{
    render(<TodoList />)

    const toDelete = screen.getByText('Learn React')
    expect(toDelete).toBeInTheDocument()

    const deleteButton = screen.getByLabelText('delete-1')
    fireEvent.click(deleteButton)

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument()
  })
})
