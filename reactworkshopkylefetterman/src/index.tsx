import {render} from 'react-dom'
import React from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import About from './About';
import  Nav  from './Nav';
import AddFoodForm from './AddFoodForm';

//our first react component 


//HTML vs                                   JSX 
//class                                     className
//for                                       htmlFor
//inline styles are strings                 inline styles are objects, Numbers=px
//<!-- comments like this -->                {/* comments like this  */}
//options accept select                     select accepts value
render(
  
<BrowserRouter>
<Nav />
    <Route path="/about"><About /></Route> 
    <Route path="/" exact><App /></Route> 
    <Route path="/addFood"><AddFoodForm /></Route>
    <Route path="/food/:foodId" ><AddFoodForm /></Route>
</BrowserRouter>

,document.getElementById("root"))



