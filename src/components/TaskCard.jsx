import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm pb-4 pt-4">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Delete Task
      </button>
    </div>
  );
};

export default TaskCard;
