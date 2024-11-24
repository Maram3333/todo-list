import React from "react";

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            <div>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
            </div>
            <div className="task-actions">
                <button onClick={() => onToggleComplete(task.id)}>
                    {task.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => onEdit(task)}>Edit</button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </li>
    );
};

export default TaskItem;
