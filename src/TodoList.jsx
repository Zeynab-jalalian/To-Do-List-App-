import { useEffect, useState } from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";

function TodoList() {
  const [taskItems, setTaskItems] = useState([]);
  const [typed, setTyped] = useState("");

  function handleAddTask() {
    setTaskItems([...taskItems, typed]);
    setTyped("");
  }
  function handleDeleteTask(index) {
    setTaskItems(
      taskItems.filter((item, itemIndex) => {
        return itemIndex !== index;
      }),
    );
  }
  // useEffect(() => {
  //   console.log(taskItems);
  // }, [taskItems]);
  return (
    <div className="w-100 min-h-75 max-h-150 bg-white rounded-xl shadow-lg overflow-hidden">
      <Header />
      <InputBox
        typed={typed}
        setTyped={setTyped}
        handleAddTask={handleAddTask}
      />
      <TaskList taskItems={taskItems} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default TodoList;
