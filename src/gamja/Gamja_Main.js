import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Gam_about from './Gam_about';
import Gam_board from './Gam_board';
import Gam_contact from './Gam_contact';
import Gam_photo from './Gam_photo';
import Gam_gallery from './Gam_gallery';

import './Gam_Main.css';


class Gamja_Main extends Component {
    render() {
       
        return (
            <>
            
            <div>
                 <nav className="nav justify-content-end">
                    <ul >
                      <li class="nav-item"><Link to="/"> Main</Link></li>
                        <li class="nav-item"><Link to="/Gam_about"> About</Link></li>
                        <li class="nav-item "><Link to="/Gam_gallery">Gallery</Link></li>
                       
                        <li class="nav-item"><Link to="/Gam_board">Board</Link></li>
                        <li class="nav-item "><Link to="/Gam_contact">Contact</Link></li>

                    </ul>
                </nav>

                <Route path="/." component={Gamja_Main}/>
                <Route path="/Gam_about" component={Gam_about}/>
                <Route path="/Gam_gallery" component={Gam_gallery}/>
            
                <Route path="/Gam_board" component={Gam_board}/>
                <Route path="/Gam_contact" component={Gam_contact}/><br/>

                {/* <div class="img">
        <div class="content">
        <h1>Welcome to 감자's World</h1>
        </div></div>
        <hr/> */}
        <Gam_photo/>
        <Gam_about/><hr/>
        <Gam_gallery/><hr/>
    
        <Gam_board/><hr/>
        <Gam_contact/><hr/>

            </div>
            </>
        );
    }
}

export default Gamja_Main;