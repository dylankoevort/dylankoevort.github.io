import { useState } from "react";
import { FaTrash, FaEdit, FaCheck, FaLightbulb } from "react-icons/fa";
import Button from "./Button";

const Task = ({ task, onDelete, updateTask, onToggleComplete }) => {
  const [isComplete, setIsComplete] = useState(!task.active);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);
  const [hasError, setHasError] = useState(false);

  const onUpdateMode = () => {
    setUpdatedTask(task);
    setIsUpdateMode(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!updatedTask.description) {
      setHasError(true);
      return;
    } else {
      setHasError(false);
    }

    setIsUpdateMode(false);
    updateTask(updatedTask);
    setUpdatedTask({});
  };

  const handleDescriptionChange = (e) => {
    setUpdatedTask({ ...updatedTask, description: e.target.value });
  };
  const handlePriorityChange = (e) => {
    setUpdatedTask({ ...updatedTask, priority: e.target.value });
  };

  return (
    <div
      className={
        (!task.active || isComplete
          ? "bg-blue-100"
          : task.priority === "low"
          ? "bg-green-100"
          : task.priority === "medium"
          ? "bg-orange-100"
          : "bg-red-100") +
        " h-fit w-100 rounded-tl-lg rounded-bl-lg shadow border p-8 my-4"
      }
    >
      {isUpdateMode ? (
        <form onSubmit={onSubmit}>
          <div className="flex flex-row justify-between">
            <div className="basis-2/5 flex flex-col">
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                placeholder="Add Task"
                value={updatedTask.description}
                onChange={handleDescriptionChange}
              />
              {hasError && !updatedTask.description ? (
                <p className="mt-2 text-sm text-red-500">
                  Description Is Required
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="basis-1/5">
              <select
                name="updatedPriority"
                value={updatedTask.priority}
                onChange={handlePriorityChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div className="basis-1/5">
              <Button type="submit" text="Save" colour="bg-blue-500" />
            </div>
          </div>
        </form>
      ) : (
        <div className="flex flex-row justify-between ">
          <div className="basis-3/4 grow-0 text-gray-500 text-lg pr-3">
            <h3 className={isComplete ? "line-through" : ""}>
              {task.description}
            </h3>
          </div>
          <div className="basis-2/4 grow-0 flex space-between items-center">
            <div className="basis-1/4 text-gray-500 text-sm">
              <p>{!isComplete ? `${task.priority}` : "complete"}</p>
            </div>
            <div className="basis-3/4 grow-0 flex justify-around">
              {isComplete ? (
                <FaLightbulb
                  className="cursor-pointer w-6 h-6"
                  onClick={() => setIsComplete(!isComplete)}
                />
              ) : (
                <FaCheck
                  className="cursor-pointer w-6 h-6"
                  onClick={() => setIsComplete(!isComplete)}
                />
              )}
              <FaEdit
                className="cursor-pointer w-6 h-6"
                onClick={() => onUpdateMode()}
              />
              <FaTrash
                className="cursor-pointer w-6 h-6"
                onClick={() => onDelete(task.id)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
