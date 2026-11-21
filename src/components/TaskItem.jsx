import { FaTrash } from "react-icons/fa";

function TaskItem({ task, index, handleDeleteTask, handleToggleTask }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer p-3 bg-gray-50 border border-gray-200 rounded-lg">
      <input
        type="checkbox"
        checked={task.completed}
        readOnly
        onClick={() => handleToggleTask(index)}
      />

      <span
        className={`flex-1 text-right text-gray-800 ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>

      <button
        className="text-red-500 hover:text-red-700 transition"
        onClick={() => handleDeleteTask(index)}
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default TaskItem;
