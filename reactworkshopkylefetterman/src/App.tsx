import React, {useEffect, useState} from 'react'
import {getFoods, deleteFood, addFood} from './api/foodsApi'
import Input from './shared/Input';
import Select from './shared/Select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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


const App = () => {

    const [foods, setFoods] = useState<Food[]>([]);
    const [newFood, setNewFood] = useState<newFood>(emptyFood);
   

    useEffect(()=>{
        callGetFoods();
    },[])

    
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
    
    const renderFoods = () =>{
        return (
            <tbody>
            {foods.map((food)=>{
                return(
                 
                        <tr key={food.name}>
                            <td>
                                <button onClick={async ()=>{
                                    await deleteFood(food.id)
                                    const newFoods=foods.filter(oldfood=>oldfood.id!==food.id)
                                    setFoods(newFoods)
                                    
                                }}>Delete</button>
                            </td>
                            <td>
                                {food.name} 
                            </td>
                            <td>
                                {food.quantity}
                            </td>
                            <td>
                                {food.reOrderPoint}
                            </td>
                            <td>
                                {food.type}
                            </td>
                        </tr>
                )}
            )}
            </tbody>
        )
    }
    
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
      // event.preventDefault();
        try{
            const moreFoods = addFood(newFood)
           //  setFoods([...foods,newFood])
            setNewFood(emptyFood)
            toast.success("Food Saved! ")
        }catch(error){
            alert("error")
            
        }
    }
       
    return (
        <>
            <ToastContainer />
            <h1>Pantry Manager</h1>
            <form onSubmit={handleSubmit}>
                <Input  onChange={onChange} value={newFood.name} id="name" label="Name" />
                <Input type="number" onChange={onChange}  value={newFood.quantity.toString()} id="quantity" label="quantity" />
                <Input type="number" onChange={onChange} value={newFood.reOrderPoint.toString()} id="reOrderPoint" label="reorder point" />
                <Select  onChange={onChange} value={newFood.type} id="type" label="type" options={[{label:"vegetable", value:"vegetable"},{label:"Grain", value:"Grain"},{label:"Fruit",value:"Fruit"}]} />
                <br />
                <br />
                <button className="btn btn-primary" type="submit" value="Save Food">Save Food</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Food Name</th>
                        <th>Quantity</th>
                        <th>Reorder Point</th>
                        <th>Type</th>
                    </tr>
                </thead>
                {renderFoods()}
            </table>
        </>
    )
}

export default App
