import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'

let nextId = 3

export default function TodoList(){
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo app', completed: true }
  ])

  const addTodo = (text) =>{
    const newTodo = { id: nextId++, text, completed: false }
    setTodos((t)=>[...t, newTodo])
  }

  const toggleTodo = (id) =>{
    setTodos((t)=>t.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const deleteTodo = (id) =>{
    setTodos((t)=>t.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <AddTodoForm onAdd={addTodo} />

      <ul aria-label="todo-list">
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              role="button"
              tabIndex={0}
              onClick={()=>toggleTodo(todo.id)}
              onKeyDown={(e)=>{ if (e.key === 'Enter') toggleTodo(todo.id) }}
              style={{ cursor:'pointer', textDecoration: todo.completed ? 'line-through' : 'none' }}
              data-testid={`todo-text-${todo.id}`}
            >
              {todo.text}
            </span>
            <button aria-label={`delete-${todo.id}`} onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
