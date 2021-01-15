import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="About">
               <h1>About me</h1> 
               <br/>
               <h4>저는 캐나다 토론토 Seneca College에서 Computer Programming을 졸업하였습니다.
                학교 수업중 항상 당연하게 접하는 홈페이지들을 제가 만들고 수정할수있다는것에 흥미를 느껴
                웹 개발자가 되고자 마음 먹었습니다. 특히 저는 인터넷 서치를 통해 제가 원하는 정보와
                현재 트렌드를 읽는 능력에 자신 있습니다. 이런 저의 능력과 창의성을 살려 회사, 소비자들이
                원하는 웹사이트를 만드는 개발자가 되고 싶습니다. 
               </h4>
            </div>
        );
    }
}

export default About;