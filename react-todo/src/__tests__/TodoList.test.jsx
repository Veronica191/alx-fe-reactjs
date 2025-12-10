// src/__tests__/TodoList.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    const list = screen.getByTestId("todo-list");
    // initial demo todos are present (3)
    expect(list.children.length).toBeGreaterThanOrEqual(3);
    // Check text of one initial item
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByTestId("todo-input");
    const addBtn = screen.getByTestId("add-button");

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addBtn);

    // New todo should appear on top of list
    expect(screen.getByText("New Todo Item")).toBeInTheDocument();

    // Input should be cleared
    expect(input.value).toBe("");
  });

  test("toggles a todo on click", () => {
    render(<TodoList />);

    // Find the initial "Learn React" item
    const item = screen.getByText(/Learn React/i);
    // Initial should not have line-through
    expect(item).not.toHaveStyle("text-decoration: line-through");

    // Click to toggle
    fireEvent.click(item);

    // Now it should be completed (line-through)
    expect(item).toHaveStyle("text-decoration: line-through");

    // Click again to untoggle
    fireEvent.click(item);
    expect(item).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    // We'll delete the "Write tests" todo (initial data contains it)
    const target = screen.getByText(/Write tests/i);
    // find parent li's delete button using the id pattern: the component's initial items use numeric ids,
    // but we can't rely on exact id unless we inspect DOM; so find a delete button near the text.
    const deleteButtons = screen.getAllByText("Delete");

    // There should be at least one Delete button
    expect(deleteButtons.length).toBeGreaterThan(0);

    // Click the delete button paired with the target (closest)
    // A reliable way: find the li that contains the target text and querySelector button
    const li = target.closest("li");
    const delBtn = li.querySelector('button');
    fireEvent.click(delBtn);

    // Now the item should be gone
    expect(screen.queryByText(/Write tests/i)).not.toBeInTheDocument();
  });
});
