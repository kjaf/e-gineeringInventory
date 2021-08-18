import React from 'react'

type InputProps ={
    label:string; 
    id:string; 
}

const Input = (props:InputProps) => {
    return (
        <>
            <form>
                <div>
                    <label htmlFor={props.id}>{props.label}</label>
                    <br />
                    <input type="text" id={props.id}></input>
                </div>
            </form>
        </>
    )
}

export default Input
