import TodoItem from "./TodoItem";
import type { Todo } from "../types/todo";


interface TodoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onCompletedChange, onDelete }: TodoListProps) {
    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return a.id - b.id; // Sort by ID if completion status is the same
        }
        return a.completed ? 1 : -1; // Completed todos go to the end
    });

  return (
    <>
    <div className="space-y-2">
      {todosSorted.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCompletedChange={onCompletedChange}
          onDelete={onDelete}
        />
      ))}
    </div>
    {todos.length === 0 && (
      <p 
      className="text-center text-sm text-gray-500">No todos yet. Add some!
      </p>
    )}
    </>
  );
}