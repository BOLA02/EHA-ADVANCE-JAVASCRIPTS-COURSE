import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useTasks from "./hooks/useTasks";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

import "./index.css";   // ← ONE stylesheet for everything

function TaskApp() {
  const { tasks, addTask, deleteTask, toggleTask } = useTasks();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <h1>Personal Task Manager</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </header>

      <main>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TaskApp />
    </ThemeProvider>
  );
}