import Circle from "../assets/Circle.svg";
import Delete from "../assets/icon-cross.svg";
const Todo = ({ todos, setTodos, LightMode }: any) => {
  return (
    <div>
      {todos.map((todo: any) => {
        return (
          <div
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
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
