function InputBox() {
  return (
    <div className="p-5">
      <div className="relative">
        <input
          type="text"
          placeholder="Add your task"
          className="w-full border border-gray-300 rounded-lg px-3 py-3 pr-20 outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700 transition cursor-pointer">
          Add +
        </button>
      </div>
    </div>
  );
}

export default InputBox;
