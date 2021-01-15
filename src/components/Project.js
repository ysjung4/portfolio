import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div className="project">

                <div className="stock">
             <h3>Stock Manager</h3><br/>
             <div className="stock_img">
             <a href="https://intense-atoll-52983.herokuapp.com/">
                 <img src="/image/stock_manager.png"/></a>
                 </div><br/>
             <p> 물건 수량을 관리하는 간단한 장바구니 사이트<br/>
            
              리액트를 이용해 물건의 수량 체크, 검색,삭제,장바구니 담기 기능 구현</p>
             </div>
             <div className="gamja">
             <h3>감자's World</h3><br/>
             <div className="gamja_img">
                 <a href="https://limitless-thicket-42492.herokuapp.com/">
             <img src="/image/computer.png"/></a>
             </div>
             <p> 반려동물 감자의 가상 팬사이트<br/>
        
                리액트를 이용한 회원가입/로그인/동영상 팝업/댓글 기능 구현</p>
                
             </div>
             <div className="employee">
             <h3>Employee Manager</h3><br/>
             <div className="employee_img">
             <a href="https://limitless-thicket-42492.herokuapp.com/">
                 <img src="/image/employee.png"/></a>
                 </div>
             <p> employee 관리 사이트 <br/>
              리액트를 이용해 employee의 정보 검색과 수정 기능 구현</p>
              
            
             </div>
           
            </div>
        );
    }
}

export default Project;