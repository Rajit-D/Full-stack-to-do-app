import axios from "axios";
import { RxCross2 } from "react-icons/rx";

const TodosList = ({ todos }) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mt-20">
      {todos.map((ele, index) => {
        return (
          <div
            className="border border-slate-950 p-4 w-full rounded-2xl"
            key={index}
          >
            <div className="min-w-full flex justify-end">
              <RxCross2  
                className="text-[25px] text-red-300 cursor-pointer"
                onClick={() => {
                  axios.delete(`http://localhost:3000/remove/${ele._id}`, {
                    id: ele._id,
                  });
                }}
              />
            </div>
            <h1 className="text-[30px] text-[#939F5C]">{ele.title}</h1>
            <p className="mt-1">{ele.description}</p>
            <button
              className={`mt-3 mb-3 bg-[${ele.complete === false ? "#F2C57C" : "#04724D"}] lg:text-[15px] text-[12px] py-1 px-3 rounded-2xl`}
              onClick={() => {
                axios.put("http://localhost:3000/done", {
                  id: ele._id,
                });
              }}
            >
              {ele.complete === true ? "✔ Completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodosList;
