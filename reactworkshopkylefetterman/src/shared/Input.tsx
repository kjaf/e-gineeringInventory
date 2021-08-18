import React, { ChangeEvent, ChangeEventHandler } from "react";

 type InputProps = {
  label: string;
  id: string;
  value:string;
  onChange: React.ChangeEventHandler<Element>;
  type?: "text" | "number" | "email" | "phone" | "date";
};

const Input = ({label, id, value, onChange, type="text"}:InputProps) => {
  return (
    <>
      
        <div>
          <label htmlFor={id}>{label}</label>
          <br />
          <input onChange={onChange} type={type} id={id} value={value}></input>
        </div>

    </>
  );
};

export default Input;
