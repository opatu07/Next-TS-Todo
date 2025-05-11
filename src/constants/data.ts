import { TodoType } from "@/types/todo";

export const INIT_TODO_LIST: Array<TodoType> = [
    {
        id: 1,
        title: "Todo1",
        content: "Todo1 content",
    },
    {
        id: 2,
        title: "Todo2",
        content: "Todo2 content",
    },
];

export const INIT_UNIQUE_ID = INIT_TODO_LIST.length;

// 同じIDが重複しそう
