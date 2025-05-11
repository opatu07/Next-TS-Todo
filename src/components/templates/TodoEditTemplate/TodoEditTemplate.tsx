"use client"
import { FC } from "react"
import { Controller } from "react-hook-form";
import { useTodoEditTemplate } from "./useTodoEditTemplate";
import { useTodoContext } from "@/hooks/useTodoContext";
import { BaseLayout } from "@/components/organisms"
import { InputFormSection, TextAreaSection } from "@/components/molecules";
import { CommonButton } from "@/components/atoms";
import styles from "./style.module.css";

type TodoEditTemplateProps = {
    id: string;
};

export const TodoEditTemplate: FC<TodoEditTemplateProps> = ({ id }) => {
    const { originTodoList, updateTodo } = useTodoContext();
    const { todo, control, errors, handleEditSubmit } = useTodoEditTemplate({
        id,
        originTodoList,
        updateTodo,
    });

    return (
        <BaseLayout title={"TodoEdit"}>
            {!!todo && (
                <form className={styles.container} onSubmit={handleEditSubmit}>
                    <div className={styles.area}>
                        <Controller
                            name="title"
                            render={({ field }) => (
                                <InputFormSection
                                    placeholder={"Title"}
                                    errorMessage={errors.title?.message}
                                    {...field}
                                />
                            )}
                            control={control}
                        />
                    </div>
                    <div className={styles.area}>
                        <Controller
                            name="content"
                            render={({ field }) => (
                                <TextAreaSection
                                    placeholder={"Content"}
                                    errorMessage={errors.content?.message}
                                    {...field}
                                />
                            )}
                            control={control}
                        />
                    </div>
                    <div className={styles.area}>
                        <CommonButton type="submit">{"Edit Todo"}</CommonButton>
                    </div>
                </form>
            )}
        </BaseLayout>
    );
};
