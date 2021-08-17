import React, {useEffect, useState} from 'react'
import {getFoods} from './api/foodsApi'



type Food = {
    name: string, 
    quantity: number, 
    reOrderPoint: number, 
    type: string
}

const foods:Food[] = []






const App = () => {

    const [foods, setFoods] = useState<Food[]>([]);

    useEffect(()=>{
        async function callGetFoods(){
            const resp = await getFoods();
            if(!resp.ok) throw new Error("Call to get foods failed")
            const json = await resp.json();
            setFoods(json);
        }
        callGetFoods();
    },[])

    const deleteFood = () =>{
        alert("yo bro");
    }
    
    const renderFoods = () =>{
        return (
            <tbody>
            {foods.map((food)=>{
                return(
                 
                        <tr key={food.name}>
                            <td>
                                <button onClick={deleteFood}>Delete</button>
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
