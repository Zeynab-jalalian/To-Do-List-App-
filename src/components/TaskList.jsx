import TaskItem from "./TaskItem";
function TaskList({ taskItems }) {
  return (
    <div className="flex flex-col gap-3 px-5 pb-5">
      {taskItems.map((item, index) => {
        return <TaskItem task={item} key={index} />;
      })}
    </div>
  );
}

export default TaskList;
