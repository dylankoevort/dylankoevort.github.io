import { useState } from "react";
import Button from "./Button";

const NewTask = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [active, setActive] = useState(true);
  const [hasError, setHasError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      setHasError(true);
      return;
    } else {
      setHasError(false);
    }

    onAdd({ description, priority, active });

    setDescription("");
    setPriority("low");
    setActive(true);
  };

  return (
    <form className="my-5" onSubmit={onSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-1">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="Add Task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {hasError && !description ? (
            <p className="mt-2 text-sm text-red-500">Description Is Required</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Priority{" "}
          </label>
          <select
            name="selectedPriority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <Button type="submit" text="Save Task" colour="bg-blue-500" />
      </div>
    </form>
  );
};

export default NewTask;
