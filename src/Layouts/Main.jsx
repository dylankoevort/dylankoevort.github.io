import { useState } from "react";
import Header from "../Components/Header";
import NewTask from "../Components/NewTask";
import Tasks from "../Components/Tasks";
import MockData from "../Data/Repository";

function Main() {
  const [tasks, setTasks] = useState(MockData);
  const [showAddTask, setShowAddTask] = useState(false);

  const fetchTask = (id) => {
    return tasks.filter((task) => task.id === id);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (task) => {
    const taskList = [...tasks];
    const taskToUpdate = taskList.find((a) => a.id === task.id);

    taskToUpdate.id = task.id;
    taskToUpdate.description = task.description;
    taskToUpdate.priority = task.priority;
    taskToUpdate.active = task.active;

    setTasks(taskList);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskComplete = (id) => {
    const taskToToggle = fetchTask(id);
    const updatedTask = { ...taskToToggle, active: !taskToToggle.active };

    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, updatedTask } : task))
    );
  };

  return (
    <div className="container mx-auto h-fit w-1/3 bg-slate-100 rounded-xl shadow border p-8 m-10">
      <Header
        title="My TO-DO List"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <NewTask onAdd={addTask} />}
      <hr />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          updateTask={updateTask}
          onToggleComplete={toggleTaskComplete}
        />
      ) : (
        <p className="text-gray-500 text-lg flex justify-center my-5">
          No Tasks To Show
        </p>
      )}
      <p className="flex justify-end text-gray-300 text-xs">
        © 2023 Dylan Koevort
      </p>
    </div>
  );
}
export default Main;
