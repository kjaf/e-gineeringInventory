import React from 'react'
import { Nav } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import AddFoodForm from './AddFoodForm'
import Home from './Home'

const App = () => {
    return (
        <>
        <BrowserRouter>
<Nav />
    <Route path="/about"><About /></Route> 
    <Route path="/" exact><Home /></Route> 
    <Route path="/addFood"><AddFoodForm /></Route>
    <Route path="/food/:foodId" ><AddFoodForm /></Route>
</BrowserRouter>
</>
    )
}

export default App
