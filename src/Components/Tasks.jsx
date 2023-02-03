import Task from "./Task";

const Tasks = ({ tasks, updateTask, onToggleComplete, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          updateTask={updateTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </>
  );
};

export default Tasks;
