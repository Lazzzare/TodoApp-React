import CompleteCircle from "../assets/CompleteCircle.svg";
import Delete from "../assets/icon-cross.svg";
import Circle from "../assets/Circle.svg";

import { motion } from "framer-motion";

interface TodoProps {
  todo: {
    id: string;
    title: string;
    completed: boolean;
  };
  LightMode: boolean;
  todos: Array<{
    id: string;
    title: string;
    completed: boolean;
  }>;
  setTodos: React.Dispatch<
    React.SetStateAction<
      Array<{
        id: string;
        title: string;
        completed: boolean;
      }>
    >
  >;
  todoLength: number;
  setTodoLength: (e: number) => void;
}
const Todo: React.FC<TodoProps> = ({
  todo,
  LightMode,
  todos,
  setTodos,
  todoLength,
  setTodoLength,
}) => {
  const checkCompleted = (id: string) => {
    const newArray = [...todos];
    const index = todos.findIndex((item) => item.id === id);
    newArray[index].completed = !newArray[index].completed;
    setTodos(newArray);
  };

  const deleteTodo = (id: string) => {
    const newArray = [...todos];
    const index = todos.findIndex((item) => item.id === id);
    newArray.splice(index, 1);
    setTodoLength(todoLength - 1);
    setTodos(newArray);
  };

  return (
    <motion.div
      key={todo.id}
      initial={{ opacity: 0, y: 0, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-row justify-between items-center border-b-[1px] shadow-lg py-4 px-5 text-xs md:text-lg tracking-[-0.167px]
            ${
              LightMode
                ? "bg-white border-[#E3E4F1] text-[#494C6B]"
                : "bg-[#25273D] border-[#393A4B] text-[#C8CBE7]"
            }`}
    >
      <div className="flex flex-row gap-3 md:gap-5 items-center">
        {todo.completed ? (
          <img
            src={CompleteCircle}
            alt="CircleIcon"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
            onClick={() => checkCompleted(todo.id)}
          />
        ) : (
          <img
            src={Circle}
            alt="CircleIcon"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
            onClick={() => checkCompleted(todo.id)}
          />
        )}

        <li
          className={`${
            todo.completed ? "line-through text-[#4D5067]" : "no-underline"
          }`}
        >
          {todo.title}
        </li>
      </div>
      <img
        src={Delete}
        alt="DeleteIcon"
        className="w-3 h-3 md:w-5 md:h-5 cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      />
    </motion.div>
  );
};

export default Todo;
