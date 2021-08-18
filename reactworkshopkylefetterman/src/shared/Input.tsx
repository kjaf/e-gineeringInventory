import React, { ChangeEvent, ChangeEventHandler } from "react";

 type InputProps = {
  label: string;
  id: string;
  value:string;
  onChange: React.ChangeEventHandler<Element>;
  type: "text" | "number" | "email" | "phone" | "date";
};

const Input = (props: InputProps) => {
  return (
    <>
      
        <div>
          <label htmlFor={props.id}>{props.label}</label>
          <br />
          <input onChange={props.onChange} type={props.type} id={props.id} value={props.value}></input>
        </div>

    </>
  );
};

export default Input;
