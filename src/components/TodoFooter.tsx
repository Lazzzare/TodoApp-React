interface TodoFooterProps {
  todoLength: number;
  LightMode: boolean;
  filter: string;
  handleFilterAll: () => void;
  handleFilterActive: () => void;
  handleFilterCompleted: () => void;
  deleteCompletedTodos: () => void;
}

const TodoFooter = ({
  filter,
  todoLength,
  LightMode,
  handleFilterAll,
  handleFilterActive,
  handleFilterCompleted,
  deleteCompletedTodos,
}: TodoFooterProps) => {
  return todoLength >= 1 ? (
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
          <span
            onClick={handleFilterAll}
            className={`${
              filter === "all" ? "text-[#3A7CFD] font-bold" : "text-[#5B5E7E]"
            }hover:text-white cursor-pointer`}
          >
            All
          </span>
          <span
            onClick={handleFilterActive}
            className={`${
              filter === "active"
                ? "text-[#3A7CFD] font-bold"
                : "text-[#5B5E7E]"
            }hover:text-white cursor-pointer`}
          >
            Active
          </span>
          <span
            onClick={handleFilterCompleted}
            className={`${
              filter === "completed"
                ? "text-[#3A7CFD] font-bold"
                : "text-[#5B5E7E]"
            }hover:text-white cursor-pointer`}
          >
            Completed
          </span>
        </div>
        <h3 onClick={deleteCompletedTodos} className="cursor-pointer">
          Clear Completed
        </h3>
      </div>
      <div
        className={`md:hidden ${
          LightMode ? "bg-white" : "bg-[#25273D]"
        } pt-[15px] pb-[19px] flex flex-row justify-center items-center gap-5 text-[#5B5E7E] text-sm`}
      >
        <span
          onClick={handleFilterAll}
          className={`${
            filter === "all" ? "text-[#3A7CFD] font-bold" : "text-[5B5E7E]"
          }hover:text-[#494C6B] cursor-pointer`}
        >
          All
        </span>
        <span
          onClick={handleFilterActive}
          className={`${
            filter === "active" ? "text-[#3A7CFD] font-bold" : "text-[5B5E7E]"
          }hover:text-[#494C6B] cursor-pointer`}
        >
          Active
        </span>
        <span
          onClick={handleFilterCompleted}
          className={`${
            filter === "completed"
              ? "text-[#3A7CFD] font-bold"
              : "text-[5B5E7E]"
          }hover:text-[#494C6B] cursor-pointer`}
        >
          Completed
        </span>
      </div>
    </div>
  ) : null;
};

export default TodoFooter;
