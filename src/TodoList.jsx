import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";

function TodoList() {
  const [taskItems, setTaskItems] = useState([]);
  const [typed, setTyped] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");

  function handleAddTask() {
    setTaskItems([...taskItems, { text: typed, completed: false }]);
    setTyped("");
  }
  function handleDeleteTask(index) {
    setTaskItems(
      taskItems.filter((item, itemIndex) => {
        return itemIndex !== index;
      }),
    );
  }
  function handleToggleTask(index) {
    setTaskItems(
      taskItems.map((item, itemIndex) => {
        if (index === itemIndex) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }),
    );
  }
  function handleEditTask(index) {
    setEditingIndex(index);
    setEditedText(taskItems[index].text);
  }
  function handleSaveEdit() {
    setTaskItems(
      taskItems.map((item, itemIndex) => {
        if (itemIndex === editingIndex) {
          return { ...item, text: editedText };
        }

        return item;
      }),
    );
    setEditingIndex(null);
  }
  useEffect(() => {
    console.log(taskItems);
  }, [taskItems]);
  return (
    <div className="w-100 min-h-75 max-h-150 bg-white rounded-xl shadow-lg overflow-hidden">
      <Header />
      <InputBox
        typed={typed}
        setTyped={setTyped}
        handleAddTask={handleAddTask}
      />
      <TaskList
        taskItems={taskItems}
        handleDeleteTask={handleDeleteTask}
        handleToggleTask={handleToggleTask}
        handleEditTask={handleEditTask}
        editingIndex={editingIndex}
        setEditedText={setEditedText}
        editedText={editedText}
        handleSaveEdit={handleSaveEdit}
      />
    </div>
  );
}

export default TodoList;
