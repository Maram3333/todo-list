import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Load tasks from localStorage on initialization
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    // Save tasks to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Add a new task
    const addTask = (newTask) => {
        setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
    };

    // Edit an existing task
    const editTask = (updatedTask) => {
        setTasks(
            tasks.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    // Toggle task completion
    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Delete a task
    const deleteTask = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <TaskForm onSubmit={addTask} />
            <TaskList
                tasks={tasks}
                onEdit={editTask}
                onToggleComplete={toggleComplete}
                onDelete={deleteTask}
            />
        </div>
    );
};

export default App;
