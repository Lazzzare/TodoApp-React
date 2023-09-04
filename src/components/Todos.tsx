import React, { useState, FormEventHandler } from "react";
import uuid from "react-uuid";
import Circle from "../assets/Circle.svg";
import { AnimatePresence } from "framer-motion";
import Todo from "./Todo";

interface TodoTypes {
  id: string;
  title: string;
  completed: boolean;
}

interface TodosProps {
  LightMode: boolean;
}

const Todos: React.FC<TodosProps> = ({ LightMode }) => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoTypes[]>([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [todoLength, setTodoLength] = useState(0);

  const addTodo: FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (input === "") {
      return;
    } else {
      const newTodo: TodoTypes = { id: uuid(), title: input, completed: false };
      setTodoLength((currentLength) => currentLength + 1);
      console.log(todoLength);
      setTodos([...todos, newTodo]);
      setInput("");
    }
  };

  return (
    <div className="w-full max-w-[327px] md:max-w-[541px] mx-auto -mt-28">
      <form onSubmit={addTodo} className="relative">
        <div className="flex flex-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            placeholder="Create a new todo…"
            className={`${
              LightMode ? "bg-white text-slate-500" : "bg-[#25273D] text-white"
            } w-full py-[14px] text-sm md:text-lg rounded-[5px] shadow-lg pl-[72px] mb-4`}
          />
          <img
            src={Circle}
            alt="Circle"
            className="absolute left-6 top-[37%] transform -translate-y-1/2"
          />
        </div>
      </form>

      {/* Todos */}
      <div
        id="todo-list"
        style={{ maxHeight: "600px", overflowY: "auto" }}
        className="rounded-t-md"
      >
        <ul>
          {/* TodoItem */}
          <AnimatePresence>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                LightMode={LightMode}
                todos={todos}
                setTodos={setTodos}
                todoLength={todoLength}
                setTodoLength={setTodoLength}
              />
            ))}
          </AnimatePresence>
        </ul>
        {todoLength >= 1 ? (
          <div className="flex flex-col gap-4">
            <div
              className={`flex flex-row w-full items-center justify-between px-5 py-4 pb-[22px] ${
                LightMode ? "bg-white" : "bg-[#25273D]"
              } text-[#5B5E7E] text-xs md:text-sm rounded-b-[5px] shadow-md`}
            >
              <h3>{todoLength} items left</h3>
              <div
                className={`hidden ${
                  LightMode ? "bg-white" : "bg-[#25273D]"
                } md:flex flex-row justify-center items-center gap-5 text-[#5B5E7E] text-sm`}
              >
                <span className="hover:text-[#3A7CFD] cursor-pointer">All</span>
                <span className="hover:text-[#3A7CFD] cursor-pointer">
                  Active
                </span>
                <span className="hover:text-[#3A7CFD] cursor-pointer">
                  Completed
                </span>
              </div>
              <h3>Clear Completed</h3>
            </div>
            <div
              className={`md:hidden ${
                LightMode ? "bg-white" : "bg-[#25273D]"
              } pt-[15px] pb-[19px] flex flex-row justify-center items-center gap-5 text-[#5B5E7E] text-sm`}
            >
              <span className="hover:text-[#3A7CFD] cursor-pointer">All</span>
              <span className="hover:text-[#3A7CFD] cursor-pointer">
                Active
              </span>
              <span className="hover:text-[#3A7CFD] cursor-pointer">
                Completed
              </span>
            </div>
          </div>
        ) : null}
        {/*  */}
      </div>
    </div>
  );
};

export default Todos;
