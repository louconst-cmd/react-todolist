import React, { useState } from "react"; 
    interface AddTodoFormProps {
        onSubmit: (title: string) => void;
    }
export default function AddTodoForm({onSubmit}: AddTodoFormProps) {
    const [input, setInput] = useState("");

  function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (input.trim() === "") return; // Prevent adding empty todos
        // Here you would typically call a function to add the todo
        console.log("Todo added:", input);
        setInput(""); // Clear the input field after submission 
        onSubmit(input); // Call the onSubmit prop with the input value
        setInput(""); // Clear the input field after submission
    }
    return (
        <form className="flex" onSubmit={(handleSubmit)}>
            <input 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="What needs to be done?"
                className="rounded-s-md grow border border-gray-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="w-16 rounded-e-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
               Add
            </button>
        </form>
    );
}