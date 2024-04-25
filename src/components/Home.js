import React from 'react';
import Experience from "./Experience";
import About from "./About";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Projects from "./Projects";

function Home() {

    const experiences = [
        {
            title: "ocare x - 2023.09 ~ 2024.03",
            description: "Integrated Naver Maps API and Rest API to develop a feature for finding nearby hospitals/pharmacies based on the user's current location. Connected to a simplified personal authentication API for retrieving health checkup results."
        },
        {
            title: "ocare m maintenance - 2023.04 ~ 2023.09",
            description: "Conducted maintenance to improve functionality and resolve errors for sustainability."
        },
        // 다른 경력들도 여기에 추가할 수 있어요
    ];
    return  <div className="portfolio-container">
        <div className="header">
            <h1>Yeonseo Jung - Frontend Web Developer</h1>
        </div>
        <div className="content-container">

            <div className="left-column">
               <About/>
                <Skill/>
            </div>
            <div className="right-column">
               <Experience/>
                <Projects/>
            </div>
        </div>
    </div>



}

export default Home;