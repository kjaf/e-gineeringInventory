import React, {useEffect, useState} from 'react'
import {getFoods, deleteFood} from './api/foodsApi'
import Input from './shared/Input';
import Select from './shared/Select'



export type Food = {
    id:number,
    name: string, 
    quantity: number, 
    reOrderPoint: number, 
    type: string
}

const foods:Food[] = []




const App = () => {

    const [foods, setFoods] = useState<Food[]>([]);
   

    useEffect(()=>{
        callGetFoods();
    },[])

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
    
    
    return (
        <>
            <h1>Pantry Manager</h1>
            <Input id="name" label="Name" />
            <Input id="quantity" label="quantity" />
            <Input id="min-quantity" label="min-quantity" />
            <Select id="type" label="type" options={[{label:"vegetable", value:"vegetable"},{label:"Grain", value:"Grain"},{label:"Fruit",value:"Fruit"}]} />
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
