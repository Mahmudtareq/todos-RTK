import { Edit2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
// import { useAppDispatch } from "@/redux/hook";
import { useRemoveTodoMutation, useToggleTodoMutation } from "@/redux/api/api";
type TTodocardProps = {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};

const TodoCard = ({ item }: { item: TTodocardProps }) => {
  const [removeTodo] = useRemoveTodoMutation();
  const [toggle] = useToggleTodoMutation();
  const { title, description, _id, isCompleted, priority } = item;
  // const dispatch = useAppDispatch();
  const handleDelete = async () => {
    try {
      await removeTodo(_id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const toggleComplete = () => {
    const todoTask = {
      title,
      description,
      priority,
      isCompleted: !isCompleted,
    };

    const options = {
      id: _id,
      data: todoTask,
    };
    toggle(options);
  };
  return (
    <div className="bg-white rounded-md p-3 flex items-center justify-between border ">
      <input
        className="mr-3"
        onClick={toggleComplete}
        type="checkbox"
        name="completed"
        id="completed"
        defaultChecked={isCompleted}
      />
      <p className="font-bold flex-1">{title}</p>
      <div className="flex-1 flex items-center gap-2">
        <div
          className={`size-3 rounded-full ${
            priority === "High" ? "bg-red-500" : null
          }
          ${priority === "Medium" ? "bg-yellow-500" : null}
          ${priority === "Low" ? "bg-green-500" : null}
          `}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500 font-semibold">Done</p>
        ) : (
          <p className="text-red-500 font-semibold">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="flex space-x-5">
        <Button className="bg-red-500" onClick={handleDelete}>
          <Trash2 className="size-4" />
        </Button>
        <Button className="bg-[#5c53FE]">
          <Edit2 className="size-4 " />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
