import React from 'react'
import Nav from './Nav'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './About'
import AddFoodForm from './AddFoodForm'
import Home from './Home'
import { QueryClientProvider, QueryClient } from 'react-query'

const App = () => {
    const queryClient = new QueryClient();

    return (
        <>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
            <Nav />
        <Route path="/about"><About /></Route> 
        <Route path="/" exact><Home /></Route> 
        <Route path="/addFood"><AddFoodForm /></Route>
        <Route path="/food/:foodId" ><AddFoodForm /></Route>
    </BrowserRouter>
    </QueryClientProvider>
</>
    )
}

export default App
