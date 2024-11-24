import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
    return (
        <ul className="task-list">
            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onEdit={onEdit}
                        onDelete={onDelete}
                        onToggleComplete={onToggleComplete}
                    />
                ))
            ) : (
                <p>No tasks available. Add a new task to get started!</p>
            )}
        </ul>
    );
};

export default TaskList;
