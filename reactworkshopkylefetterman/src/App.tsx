import React from 'react'



type Food = {
    name: string, 
    quantity: number, 
    reOrderPoint: number, 
    type: string
}

const foods:Food[] = [
    {
        name: "Carrot", 
        quantity:1,
        reOrderPoint:1, 
        type:"Vegetable"
    },
    {
        name:"Potato",
        quantity:2,
        reOrderPoint:1, 
        type:"Vegetable"
    }
]





const App = () => {
    const renderFoods = () =>{
        return (
            <tbody>
            {foods.map((food)=>{
                return(
                 
                        <tr key={food.name}>
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
