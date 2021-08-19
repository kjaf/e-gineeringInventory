import React, {useEffect, useState} from 'react'
import {getFoods, getFoodById, addFood} from './api/foodsApi'
import Input from './shared/Input';
import Select from './shared/Select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useHistory, useParams} from 'react-router-dom'



export type Food = {
    id:number,
    name: string, 
    quantity: number, 
    reOrderPoint: number, 
    type: string
}

export type newFood ={
    name: string, 
    quantity: number, 
    reOrderPoint: number, 
    type: string
}


const foods:Food[] = []

const emptyFood: newFood = {
    name: "",
    quantity: 0, 
    reOrderPoint:0, 
    type:""
}




const AddFoodForm = () => {

    const [foods, setFoods] = useState<Food[]>([]);
    const [newFood, setNewFood] = useState<newFood>(emptyFood);
    const history = useHistory();
    const {foodId} = useParams() as any;
    
  

   

    
    useEffect(()=>{
        if(foodId){
            updateNewFood()
        }
    },[foodId])

    const updateNewFood = async() =>{
        try{
           const food:Food = await getFoodById(foodId)
           setNewFood(food);
        }catch(error){
            alert("error retrieving food")
            
        }
    }

    
    //Implementing single onCHange handler by convention
    // id coorellates to the property in state
    const onChange = (event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const _newFood = {...newFood, [event.target.id]:event.target.value}
        setNewFood(_newFood)
    }


    async function callGetFoods(){
        const data = await getFoods();
        setFoods(data);
    }

    
    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) =>{
      event.preventDefault();
        try{
            await addFood(newFood)
             toast.success("Food Saved! ")
            history.push("/")
        }catch(error){
            alert("error")
            
        }
    }
       
    return (
        <>
            <ToastContainer />
            {foodId ? <h1>Update Food</h1> : <h1>Add Food</h1>}
            <form onSubmit={handleSubmit}>
                <Input  onChange={onChange} value={newFood.name} id="name" label="Name" />
                <Input type="number" onChange={onChange}  value={newFood.quantity.toString()} id="quantity" label="quantity" />
                <Input type="number" onChange={onChange} value={newFood.reOrderPoint.toString()} id="reOrderPoint" label="reorder point" />
                <Select  onChange={onChange} value={newFood.type} id="type" label="type" options={[{label:"Vegetable", value:"Vegetable"},{label:"Grain", value:"Grain"},{label:"Fruit",value:"Fruit"}]} />
                <br />
                <br />
                <button className="btn btn-primary" type="submit" value="Save Food">Save Food</button>
            </form>
        </>
    )
}

export default AddFoodForm
