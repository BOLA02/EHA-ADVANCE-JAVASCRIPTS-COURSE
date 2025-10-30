import  { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrors("Task title cannot be empty");
      return;
    }
    onAddTask({ id: Date.now(), title, completed: false });
    setTitle("");
    setErrors("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="task-add-btn">
        Add Task
      </button>
      {errors && <p className="task-error">{errors}</p>}
    </form>
  );
}

export default TaskForm;