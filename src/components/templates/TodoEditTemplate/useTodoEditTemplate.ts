import { useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NAVIGATION_PATH } from "@/constants/navigation";
import { TodoType } from "@/types/todo";

const schema = z.object({
    title: z
      .string()
      .min(1, "タイトルは必須です。")
      .max(10, "15文字以内で入力してください。"),
    content: z.string().optional(),
});

type UseTodoEditTemplateParams = {
    id: string;
    originTodoList: Array<TodoType>;
    updateTodo: (id: number, title: string, content?: string) => void; 
};

export const useTodoEditTemplate = ({
    id,
    originTodoList,
    updateTodo,
}: UseTodoEditTemplateParams) => {
    const navigate = useRouter();

    const todo = useMemo(
        () => originTodoList.find((todo) => String(todo.id) === id),
        [originTodoList, id]
    );

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: { title: todo?.title, content: todo?.content },
    });

    const handleEditSubmit = handleSubmit(
        useCallback(
          (values: z.infer<typeof schema>) => {
            if (!todo) return;
            updateTodo(todo.id, values.title, values.content);
            navigate.push(NAVIGATION_PATH.TOP);
          },
          [updateTodo, navigate, todo]
        )
    );

    return {
        todo,
        control,
        errors,
        handleEditSubmit,
      };
}
