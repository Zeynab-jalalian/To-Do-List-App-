import { FaTrash, FaEdit } from "react-icons/fa";

function TaskItem({
  task,
  index,
  handleDeleteTask,
  handleToggleTask,
  handleEditTask,
  editingIndex,
  setEditedText,
  editedText,
  handleSaveEdit,
}) {
  return (
    <div className="flex items-center gap-3 cursor-pointer p-3 bg-gray-50 border border-gray-200 rounded-lg">
      <input
        type="checkbox"
        checked={task.completed}
        readOnly
        className="cursor-pointer"
        onClick={() => handleToggleTask(index)}
      />

      {editingIndex === index ? (
        <>
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-1 border border-blue-400 rounded-md px-3 py-1 outline-none focus:ring-2 focus:ring-blue-200"
          />

          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <span
          className={`flex-1 text-right text-gray-800 ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.text}
        </span>
      )}
      {editingIndex !== index && (
        <button
          className="cursor-pointer"
          onClick={() => handleEditTask(index)}
        >
          <FaEdit />
        </button>
      )}

      <button
        className="text-red-500 hover:text-red-700 transition cursor-pointer"
        onClick={() => handleDeleteTask(index)}
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default TaskItem;
