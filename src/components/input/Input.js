import React from "react";
import styles from "./Input.module.scss";
const Input = ({ id, value, onChange, placeholder = "", type = "text" }) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={value ? styles.active : ""} htmlFor={id}>
        {placeholder}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
