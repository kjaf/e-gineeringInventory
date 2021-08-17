import React from 'react'



type Food = {
    name: string, 
    quantity: number; 
}

const foods:Food[] = [
    {
        name: "Carrot", 
        quantity:1
    },
    {
        name:"Potato",
        quantity:2
    }
]





const App = () => {
    const renderFoods = () =>{
        return (
            foods.map(food=>{
                return(
                   <li>
                       {food.name}
                   </li>
                )
            })
        )
    }
    
    
    return (
        <>
            <ul>
                {renderFoods()}
            </ul>
        </>
    )
}

export default App
