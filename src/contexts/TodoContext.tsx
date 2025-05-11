"use client";

import { createContext, FC, ReactNode } from "react";
import { TodoType } from "@/types/todo";
import { useTodo } from "@/hooks/useTodo";

type TodoContextType = {
    originTodoList: Array<TodoType>;
    addTodo: (title: string, content?: string) => void;
    updateTodo: (id: number, title: string, content?: string) => void;
    deleteTodo: (deleteId: number, deleteTitle: string) => void;
};

export const TodoContext = createContext<TodoContextType>({
    originTodoList: [],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
})

type TodoProviderProps = {
    children: ReactNode;
}

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
    const { originTodoList, addTodo, updateTodo, deleteTodo } = useTodo();

    return (
        <TodoContext.Provider
          value={{
            originTodoList,
            addTodo,
            updateTodo,
            deleteTodo,
          }}
        >
            {children}
        </TodoContext.Provider>
    );
};
