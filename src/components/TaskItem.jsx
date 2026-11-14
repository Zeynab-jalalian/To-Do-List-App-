
import { FaTrash } from 'react-icons/fa';

function TaskItem() {
  return (
   <div className="flex items-center justify-between gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer">
      <div className="flex items-center gap-3">
        <input type="checkbox" />
        <span className="text-gray-800">Learn React</span>
      </div>

      <button className="text-red-500 hover:text-red-700 transition">
        <FaTrash />
      </button>
    </div>
  );
}

export default TaskItem;
