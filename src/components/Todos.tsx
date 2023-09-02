import { useState } from "react";
import Todo from "./Todo";
import uuid from "react-uuid";

interface TodosProps {
  LightMode: boolean;
}

const Todos = ({ LightMode }: TodosProps) => {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "Learn React",
      complete: false,
    },
    {
      id: uuid(),
      title: "Watch Movies",
      complete: true,
    },
  ]);

  return (
    <div className="w-full max-w-[327px] md:max-w-[541px] mx-auto -mt-24">
      <div className="flex flex-row">
        {/* <img src={Circle} alt="Circle" className="absolute top-0" /> */}
        <input
          type="text"
          placeholder="Create a new todo…"
          className={`${
            LightMode ? "bg-white text-slate-500" : "bg-[#25273D] text-white"
          } w-full py-[14px] text-sm md:text-lg rounded-[5px] shadow-lg pl-8 mb-4`}
        />
      </div>
      {/* Todos */}
      <div>
        <ul>
          {/* TodoItem */}
          <Todo todos={todos} setTodos={setTodos} LightMode={LightMode} />
        </ul>
      </div>
    </div>
  );
};

export default Todos;
