import {render} from 'react-dom'
import React from 'react'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom'
import About from './About';
import  Nav  from './Nav';

//our first react component 


//HTML vs                                   JSX 
//class                                     className
//for                                       htmlFor
//inline styles are strings                 inline styles are objects, Numbers=px
//<!-- comments like this -->                {/* comments like this  */}
render(
  
<BrowserRouter>
<Nav />
    <Route path="/about"><About /></Route> 
    <Route path="/" exact><App /></Route> 
</BrowserRouter>

,document.getElementById("root"))



