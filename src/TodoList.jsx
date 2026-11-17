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
  // useEffect(() => {
  //   console.log(taskItems);
  // }, [taskItems]);
  return (
    <div className="w-[400px] min-h-[300px] max-h-[600px] bg-white rounded-xl shadow-lg overflow-hidden">
      <Header />
      <InputBox
        typed={typed}
        setTyped={setTyped}
        handleAddTask={handleAddTask}
      />
      <TaskList taskItems={taskItems} />
    </div>
  );
}

export default TodoList;
