// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
 type TTodocardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};
const TodoContainer = () => {
  // const { todos } = useAppSelector((state) => state.todos);
  const [priority, setPriority] = useState("");
  const { data: todos, isLoading } = useGetTodosQuery(priority);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  return (
    <div>
      <div className="flex justify-between mb-8">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="space-y-3 bg-white p-5 w-full h-full rounded-lg">
          {todos?.data?.map((item: TTodocardProps) => (
            <TodoCard key={item._id} item={item} />
          ))}
        </div>
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
