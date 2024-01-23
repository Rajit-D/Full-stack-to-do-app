import axios from "axios";
import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleTodo = () => {
    axios.post("http://localhost:3000/todo", {
      title: title,
      description: desc,
    });
  };

  return (
    <div>
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="price"
            id="price"
            className="rounded-md border-0 py-1.5 pl-7 pr-20 font-bold text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="What's on your mind?"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-noneabsolute inset-y-0 left-0 flex items-center pl-3"></div>
          <input
            type="text"
            name="price"
            id="price"
            className="rounded-md border-0 py-1.5 pl-7 font-bold text-white-900 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Explain a bit"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-slate-950 py-2 px-4 rounded-xl mt-3"
        onClick={handleTodo}
      >
        Add
      </button>
    </div>
  );
};

export default CreateTodo;
