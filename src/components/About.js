import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section>
                <header className="major">
                    <h2>About me</h2>
                </header>
                <p>I was born in Korea and studied Computer Programming in Canada, where I earned my degree. After graduating, I returned to Korea and gained three years of professional experience. I have a strong drive to tackle tough problems with patience and perseverance. The satisfaction of solving these challenges is why I love working in development.</p>
                {/*<ul className="contact">*/}
                {/*    <li className="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>*/}
                {/*    <li className="icon solid fa-phone">(000) 000-0000</li>*/}
                {/*    <li className="icon solid fa-home">1234 Somewhere Road #8254<br/>*/}
                {/*        Nashville, TN 00000-0000*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </section>

        );
    }
}

export default About;