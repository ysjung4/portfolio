import React from 'react';

function Experience() {
    const experiences = [
        {
            title: "Ocare M(Hybrid App for KB healthcare) - 2023.09 ~ 2024.03",
            description: "Integrated Naver Maps API and Rest API to develop a feature for finding nearby hospitals/pharmacies based on the user's current location. Connected to a simplified personal authentication API for retrieving health checkup results."
        },
        {
            title: "Ocare M  maintenance - 2023.04 ~ 2023.09",
            description: "Conducted maintenance to improve functionality and resolve errors for sustainability."
        },
        {
            title: "Ocare M (Hybrid App for KB healthcare) |- 2022.08 ~ 2023.03",
            description: "Integrated Google Maps API and Rest API to develop a feature for finding nearby hospitals/pharmacies based on the user's current location. Developed a feature to find health checkup hospitals meeting user criteria for reservations."
        },
        {
            title: "Electronic Employment Contract / Nursing Department OCS (for kangbuk Samsung Hospital)- 2022.07",
            description: "Maintained electronic employment contracts by integrating the eForm solution."
        },
        {
            title: "Hipass System (for kangbuk Samsung Hospital) - 2022.03 ~ 2022.06",
            description: "Developed card registration feature by integrating electronic keypad solution for payment."
        },
        {
            title: "Zerooneis WordPress site - 2022.01 ~ 2022.02",
            description: "Developed a corporate website tailored to business needs using WordPress."
        },
        {
            title: "MindOnCare (Hybrid App for kangbuk Samsung Hospital) | - 2021.07 ~ 2022.06",
            description: "Developed a psychological counseling page for a two-week duration."
        },
        {
            title: "CGM Report (for kangbuk Samsung Hospital)- 2021.06 ~ 2021.07",
            description: "Developed reporting functionality for patient-specific diabetes and chronic disease healthcare using the ozReport solution integration."
        },
        {
            title: "Kyci (Web) - 2021.02 ~ 2021.06",
            description: "Developed membership registration, login, password retrieval, and my page features for the Teen Smartphone Addiction Coaching Service."
        }
    ];

    return (
        <section>
            <header className="major">
                <h2>Projects</h2>
            </header>
            <div className="posts">
                <article>
                    <a href="#" className="image"><img src="images/pic01.jpg" alt=""/></a>
                    <h3>Interdum aenean</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante
                        interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                    </ul>
                </article>
                <article>
                    <a href="#" className="image"><img src="images/pic02.jpg" alt=""/></a>
                    <h3>Nulla amet dolore</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante
                        interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                    </ul>
                </article>
                <article>
                    <a href="#" className="image"><img src="images/pic03.jpg" alt=""/></a>
                    <h3>Tempus ullamcorper</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante
                        interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul className="actions">
                        <li><a href="#" className="button">More</a></li>
                    </ul>
                </article>

            </div>
        </section>
    );
}

export default Experience;
