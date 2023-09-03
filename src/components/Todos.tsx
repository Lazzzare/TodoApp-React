import React, { useState, FormEventHandler, useEffect } from "react";
import uuid from "react-uuid";
import Circle from "../assets/Circle.svg";
import Delete from "../assets/icon-cross.svg";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

interface Todo {
  id: any;
  title: string;
  completed: boolean;
}

interface TodosProps {
  LightMode: boolean;
}

const Todos: React.FC<TodosProps> = ({ LightMode }) => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showNewTodo, setShowNewTodo] = useState(false);

  const addTodo: FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const newTodo: Todo = { id: uuid(), title: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
    setShowNewTodo(true);

    // Reset the "showNewTodo" state after the animation
    setTimeout(() => {
      setShowNewTodo(false);
    }, 1000); // Adjust the duration as needed
  };

  return (
    <div className="w-full max-w-[327px] md:max-w-[541px] mx-auto -mt-24">
      <form onSubmit={addTodo}>
        <div className="flex flex-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Create a new todo…"
            className={`${
              LightMode ? "bg-white text-slate-500" : "bg-[#25273D] text-white"
            } w-full py-[14px] text-sm md:text-lg rounded-[5px] shadow-lg pl-8 mb-4`}
          />
        </div>
      </form>
      {/* Todos */}
      <div id="todo-list" style={{ maxHeight: "300px", overflowY: "auto" }}>
        <ul>
          {/* TodoItem */}
          <AnimatePresence>
            {" "}
            {/* Wrap with AnimatePresence */}
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 0, scale: 0.9 }} // Initial animation values
                animate={{ opacity: 1, y: 0, scale: 1 }} // Animation values
                // Exit animation values
                transition={{ duration: 0.5, ease: "easeOut" }} // Transition duration and easing
                className={`flex flex-row justify-between items-center border-b-[1px] shadow-lg py-4 px-5 text-xs md:text-lg tracking-[-0.167px]
                ${
                  LightMode
                    ? "bg-white border-[#E3E4F1] text-[#494C6B]"
                    : "bg-[#25273D] border-[#393A4B] text-[#C8CBE7]"
                }`}
              >
                <div className="flex flex-row gap-3 md:gap-5 items-center">
                  <img src={Circle} alt="CircleIcon" />
                  <li>{todo.title}</li>
                </div>
                <img src={Delete} alt="DeleteIcon" />
              </motion.div>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default Todos;

// import Circle from "../assets/Circle.svg";
// import { motion } from "framer-motion";
// import CompleteCircle from "../assets/CompleteCircle.svg";
// import Delete from "../assets/icon-cross.svg";
// import { useState, FormEventHandler } from "react";
// import React, { FormEvent } from "react";

// import uuid from "react-uuid";

// interface Todo {
//   id: any;
//   title: string;
//   completed: boolean;
// }

// interface TodosProps {
//   LightMode: boolean;
// }

// const Todos: React.FC<TodosProps> = ({ LightMode }) => {
//   const [input, setInput] = useState<string>("");
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const addTodo: FormEventHandler<HTMLFormElement> = (
//     e: FormEvent<HTMLFormElement>
//   ) => {
//     e.preventDefault();
//     const newTodo: Todo = { id: uuid(), title: input, completed: false };
//     setTodos([...todos, newTodo]);
//     setInput("");
//   };

//   return (
//     <div className="w-full max-w-[327px] md:max-w-[541px] mx-auto -mt-24">
//       <form onSubmit={addTodo}>
//         <div className="flex flex-row">
//           {/* <img src={Circle} alt="Circle" className="absolute top-0" /> */}
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.currentTarget.value)}
//             placeholder="Create a new todo…"
//             className={`${
//               LightMode ? "bg-white text-slate-500" : "bg-[#25273D] text-white"
//             } w-full py-[14px] text-sm md:text-lg rounded-[5px] shadow-lg pl-8 mb-4`}
//           />
//         </div>
//       </form>
//       {/* Todos */}
//       <div>
//         <ul>
//           {/* TodoItem */}
//           {todos.map((todo) => {
//             return (
//               <div
//                 key={todo.id}
//                 className={`flex flex-row justify-between items-center border-b-[1px] shadow-lg py-4 px-5 text-xs md:text-lg tracking-[-0.167px]
//             ${
//               LightMode
//                 ? "bg-white border-[#E3E4F1] text-[#494C6B]"
//                 : "bg-[#25273D] border-[#393A4B] text-[#C8CBE7]"
//             }`}
//               >
//                 <div className="flex flex-row gap-3 md:gap-5 items-center">
//                   <img src={Circle} alt="CircleIcon" />
//                   <li>{todo.title}</li>
//                 </div>
//                 <img src={Delete} alt="DeleteIcon" />
//               </div>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todos;
