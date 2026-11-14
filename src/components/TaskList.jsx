import TaskItem from './TaskItem';
function TaskList() {
  return (
    <div className="flex flex-col gap-3 px-5 pb-5">
     <TaskItem />
    </div>
  );
}

export default TaskList;
