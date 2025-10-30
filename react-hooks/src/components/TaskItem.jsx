

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li
      className={`task-item ${task.completed ? "completed" : ""}`}
    >
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="task-checkbox"
        />
        <span className="task-text">{task.title}</span>
      </label>

      <div className="task-actions">
        <button
          onClick={() => onToggle(task.id)}
          className="task-btn"
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="task-btn delete"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;