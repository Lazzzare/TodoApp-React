interface InputProps {
  addTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  input: string;
  setInput: (e: string) => void;
  LightMode: boolean;
  Circle: string;
}

const Input = ({ addTodo, input, setInput, LightMode, Circle }: InputProps) => {
  return (
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
  );
};

export default Input;
