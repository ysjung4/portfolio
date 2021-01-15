import React, { Component } from 'react';
import gamja_22 from './images/gamja_22.jpg';

class Gam_about extends Component {
    render() {
        return (
            <div className="gam_about_container">
                <h2>About 감자</h2><br/>
                <div className="gam_about">
                    <div className="gam_img">
                        <a href="https://intense-atoll-52983.herokuapp.com/">
                        <img src={gamja_22}/>
                        </a>
 </div><br/>

<p>  감자 /Special breed / Born 2018 <br/>
     생일 : 4월 13일 몸무게 : 8kg  성별: <i class="fas fa-mars"></i> <br/>
     겁이 많아서 사람, 동물 다 무서워함 <i class="far fa-sad-tear"></i> 그래도 친해지면 애교쟁이 <br/>
     피부 알레르기가 심하고 다리가 약함<br/>
     최애 보호자는 둘째 누나 <i class="fas fa-heart"></i><br/>
    <i class="fas fa-thumbs-up"></i> 나무 흙 풀 고기 고구마<br/>
      <i class="fas fa-thumbs-down"></i>  물 주사 야채</p>
     
</div>

         
           
         </div>
        );
    }
}

export default Gam_about;