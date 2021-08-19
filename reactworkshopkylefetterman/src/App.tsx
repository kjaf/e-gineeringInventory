import React, {useEffect, useState} from 'react'
import {getFoods, deleteFood, addFood} from './api/foodsApi'
import Input from './shared/Input';
import Select from './shared/Select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'



export type Food = {
    id:number,
    name: string, 
    quantity: number, 
    reOrderPoint: number, 
    type: string
}




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
                // if(food.quantity < food.reOrderPoint){
                //     const color:string ="red";
                // }
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
                            <td style={food.quantity < food.reOrderPoint ? { color:"red"} : {}}>

                                {food.quantity}
                            </td>
                            <td>
                                {food.reOrderPoint}
                            </td>
                            <td>
                                {food.type}
                            </td>
                            <td>
                            <Link to={`/food/${food.id}`}>Edit</Link>
                            </td>
                        </tr>
                )}
            )}
            </tbody>
        )
    }
    
       
    return (
        <>
            <ToastContainer />
            <h1>Pantry Manager</h1>
            <h1>To Food: <Link to="/addFood" className="btn btn-primary"> Add Food</Link></h1>
            {foods.length <= 0 ? <h1> No Foods</h1> :
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
        }
        </>
    )
}

export default App
