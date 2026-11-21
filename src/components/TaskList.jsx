import TaskItem from "./TaskItem";
function TaskList({ taskItems, handleDeleteTask, handleToggleTask }) {
  return (
    <div className="flex flex-col gap-3 px-5 pb-5">
      {taskItems.map((item, index) => {
        return (
          <TaskItem
            task={item}
            key={index}
            index={index}
            handleDeleteTask={handleDeleteTask}
            handleToggleTask={handleToggleTask}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
