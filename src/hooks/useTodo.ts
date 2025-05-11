import { useState, useCallback } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "@/constants/data";

export const useTodo = () => {
    const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
    const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

    const addTodo = useCallback(
        (title: string, content?: string) => {
            const nextUniqueId = uniqueId + 1;
            const newTodo = [
              ...originTodoList,
              {
                id: nextUniqueId,
                title: title,
                content: content,
              },
            ];
            setOriginTodoList(newTodo);
            setUniqueId(nextUniqueId);
        },
        [originTodoList, uniqueId]
    );

    const updateTodo = useCallback(
        (id: number, title: string, content?: string) => {
            const updatedTodoList = originTodoList.map((todo) => {
                if (id === todo.id) {
                  return {
                        id: todo.id,
                        title: title,
                        content: content,
                  };
                }

                return todo;
            });
            setOriginTodoList(updatedTodoList);
        },
        [originTodoList]
    );

    const deleteTodo = useCallback(
        (id: number, title: string) => {
            if (window.confirm(` 「${title}」のtodoを削除しますか？`)) {
                const newTodoList = originTodoList.filter(
                    (todo) => todo.id !== id
                );

                setOriginTodoList(newTodoList);

            }
        },
        [originTodoList]
    );

    return {
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
    };
};
