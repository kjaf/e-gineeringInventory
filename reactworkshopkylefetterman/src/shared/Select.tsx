import React from 'react'
import Food from '../App'


type SelectOption = {
    label:string; 
    value:string;
}

type SelectProps ={ 
    id:string; 
    label:string; 
    options:SelectOption[]
    value:string;
    onChange: React.ChangeEventHandler<Element>;
}

const Input = (props:SelectProps) => {
   
    return (
            <>
               <label htmlFor={props.id}>{props.label}</label>
               <br />
                    <select id={props.id} onChange={props.onChange} value={props.value}>
                    <option>Select Type</option>
                    {props.options.map(option=>{
                        return(
                            <option selected={props.value==option.value} key={option.value} value={option.value}>{option.label}</option>
                        )
                    })}
                        
                    </select>
           </>    
           
        
    )
}

export default Input
