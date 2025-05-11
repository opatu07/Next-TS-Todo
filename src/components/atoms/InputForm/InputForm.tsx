"use client";
import { FC, ComponentProps } from "react";

import styles from "./style.module.css";

type InputFormProps = ComponentProps<"input">;

export const InputForm: FC<InputFormProps> = ({
    disabled = false,
    value,
    placeholder,
    onChange,
    onKeyDown,
}) => (
    <input 
      disabled = {disabled} // これだとinput使えないのでは・・・
      className = {styles.input}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
);
