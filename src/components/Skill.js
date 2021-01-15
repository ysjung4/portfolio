import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return (
           
          
            <div className="skill_container">
                
                 <h2>Skill</h2>
                <div className="interminate">
                <h2>Interminate</h2>
                <div className="react">
                    <i class=" fab fa-react"></i><br/>
                  <span>React</span>
                    </div>
                <div className="js">
                <i class="fab fa-js-square"></i><br/>
                <span>Javascript</span>
                </div>
                <div className="html">
                <i class="fab fa-html5"></i><br/>
                <span>Html</span>
                </div>
                <div className="css">
                <i class="fab fa-css3-alt"></i><br/>
                <span>Css</span>
                </div>
                <div className="html">
                <i class="fab fa-git"></i><br/>
                <span>Git</span>
                </div>
                </div>
                <div className="basic">
                <h2>Basic</h2>
                <div className="python">
                <i class="fab fa-python"></i><br/>
                <span>Python</span>
                </div>
                <div className="anhular">
                <i class="fab fa-angular"></i><br/>
                <span>Angular</span>
                </div>
                <div className="node">
                <i class="fab fa-node"></i><br/>
                <span>Node</span>
                </div>
                </div>

             </div>
        
        );
    }
}

export default Skill;