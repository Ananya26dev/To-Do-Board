export default function Board({ task, index, taskList, setTaskList }) {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => index === removeIndex)
    );
  };
  return (
    <>
      <div className="max-w-lg flex flex-col items-center justify-start border rounded-xl text-center text-lg pt-3 pb-4 px-4 md:px-6">
        <p>{task}</p>
        <button
          onClick={handleDelete}
          className="px-2 py-1 bg-red-500 cursor-pointer text-lg text-white text-center rounded-lg mt-4"
        >
          Delete
        </button>
      </div>
    </>
  );
}
