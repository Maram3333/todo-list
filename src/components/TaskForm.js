import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, existingTask }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (existingTask) {
            setName(existingTask.name);
            setDescription(existingTask.description);
        }
    }, [existingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description) {
            alert("Both fields are required.");
            return;
        }
        onSubmit({ name, description, id: existingTask?.id || Date.now() });
        setName("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Task Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">
                {existingTask ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
};

export default TaskForm;
