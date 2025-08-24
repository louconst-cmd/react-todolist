import { Trash2 } from "lucide-react";

interface Todo {
    id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onCompletedChange, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between border rounded-md p-2 bg-white">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={e => onCompletedChange(todo.id, e.target.checked)}
          className="scale-125"
        />
        <span className={todo.completed ? "line-through text-gray-500" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="p-2">
        <Trash2 size={20} className="text-gray-500 hover:text-red-700 transition-colors" />
      </button>
    </div>
  );
}