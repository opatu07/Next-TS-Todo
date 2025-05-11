"use client";
import { FC } from "react";
import { useTodoContext } from "@/hooks/useTodoContext";
import { BaseLayout } from "@/components/organisms";
import { InputForm, TextArea } from "@/components/atoms";
import styles from "./style.module.css";

type TodoDetailTemplateProps = {
    id: string;
}

export const TodoDetailTemplate: FC<TodoDetailTemplateProps> = ({ id }) => {
    const { originTodoList } = useTodoContext();
    const todo = originTodoList.find((todo) => String(todo.id) === id);

    return (
        <BaseLayout title={"TodoDetail"}>
            {!!todo && (
              <div className={styles.container}>
                <div className={styles.area}>
                    <InputForm disabled value={todo.title} placeholder={"Title"} />
                </div>
                <div className={styles.area}>
                    <TextArea disabled value={todo.content} placeholder={"Content"} />
                </div>
              </div>
            )}
        </BaseLayout>
    );
};
// !!でnullでない判定
