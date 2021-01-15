import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import History from './History';
import './Main.css'
import Project from './Project';
import Skill from './Skill';



class Main extends Component {
    render() {
        return (
            <div>
           
                <nav className="navbar navbar-light bg-light">
                    <ul >
                        <li class="nav-item active"><Link to="/Main"> Main</Link></li>
                        <li class="nav-item active"><Link to="/About">About</Link></li>
                        <li class="nav-item active"><Link to="/Skill">Skill</Link></li>
                        <li class="nav-item active"><Link to="/Projectt">Project</Link></li>
                        <li class="nav-item active"><Link to="/Contact">Contact</Link></li>

                    </ul>
                </nav>
                <div class="img">
        <div class="content">
            <h1>Yeonseo Jung's Portpolio</h1>
        </div>
       </div>
                 <Route path="/Main" component={Main}/>
                <Route path="/About" component={About}/>
                <Route path="/Skill" component={Skill}/>
                <Route path="/Project" component={Project}/>
                <Route path="/Contact" component={Contact}/><hr/>

      
    
             
                <Skill/><hr/>
                
                <Project/><hr/>                
                <Contact/>
              
           
      
               
                </div>
           
        );
    }
}

export default Main;