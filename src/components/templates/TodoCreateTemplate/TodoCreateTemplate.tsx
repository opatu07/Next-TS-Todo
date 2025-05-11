"use client";
import { Controller } from "react-hook-form";
import { useTodoContext } from "@/hooks/useTodoContext";
import { BaseLayout } from "@/components/organisms";
import { InputFormSection, TextAreaSection } from "@/components/molecules";
import { CommonButton } from "@/components/atoms";
import { useTodoCreateTemplate } from "./useTodoCreateTemplate";
import styles from "./style.module.css";

export const TodoCreateTemplate = () => {
    const { addTodo } = useTodoContext();
    const { control, errors, handleAddSubmit } = useTodoCreateTemplate({
        addTodo,
    });

    return (
        <BaseLayout title={"Create Todo"}>
            <form className={styles.container} onSubmit={handleAddSubmit}>
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
                    <CommonButton type="submit">{"Create Todo"}</CommonButton>
                </div>
            </form>
        </BaseLayout>
    );
};
