import React, { useState } from 'react'

export default function AddTodoForm({ onAdd }){
  const [text, setText] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} aria-label="add-todo-form">
      <input
        placeholder="Add todo"
        value={text}
        onChange={(e)=>setText(e.target.value)}
        aria-label="todo-input"
      />
      <button type="submit">Add</button>
    </form>
  )
}
