import {render} from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

//our first react component 


//HTML vs                                   JSX 
//class                                     className
//for                                       htmlFor
//inline styles are strings                 inline styles are objects, Numbers=px
//<!-- comments like this -->                {/* comments like this  */}
//options accept select                     select accepts value
render(
    <App />

,document.getElementById("root"))



