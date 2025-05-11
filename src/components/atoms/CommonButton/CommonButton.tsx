"use client";
import { ComponentProps, ReactNode } from "react";
import styles from "./style.module.css";

type CommonButtonProps = ComponentProps<"button"> & {
    children: ReactNode;
}

export const CommonButton =  ({
    type,
    children: CommonButtonProps,
    onClick,
}) => (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
);
