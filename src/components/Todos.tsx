import React, { useState, FormEventHandler } from "react";
import uuid from "react-uuid";
import Circle from "../assets/Circle.svg";
import { AnimatePresence } from "framer-motion";
import Todo from "./Todo";
import TodoFooter from "./TodoFooter";
import Input from "./Input";

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
  const [todoLength, setTodoLength] = useState(0);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const handleFilterAll = () => {
    setFilter("all");
  };

  const handleFilterActive = () => {
    setFilter("active");
  };

  const handleFilterCompleted = () => {
    setFilter("completed");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "active") {
      return !todo.completed;
    }
    return true;
  });

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

  const deleteCompletedTodos = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodos(activeTodos);
    setTodoLength(activeTodos.length);
  };

  return (
    <div className="w-full max-w-[327px] md:max-w-[541px] mx-auto -mt-28">
      <Input
        LightMode={LightMode}
        addTodo={addTodo}
        input={input}
        setInput={setInput}
        Circle={Circle}
      />

      {/* Todos */}
      <div
        id="todo-list"
        style={{ maxHeight: "600px", overflowY: "auto" }}
        className="rounded-t-md"
      >
        {/* TodoItem */}
        <ul>
          <AnimatePresence>
            {filteredTodos.map((todo) => (
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
        <TodoFooter
          filter={filter}
          todoLength={todoLength}
          LightMode={LightMode}
          handleFilterAll={handleFilterAll}
          handleFilterActive={handleFilterActive}
          handleFilterCompleted={handleFilterCompleted}
          deleteCompletedTodos={deleteCompletedTodos}
        />
      </div>
    </div>
  );
};

export default Todos;
