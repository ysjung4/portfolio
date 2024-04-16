import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import Gam_about from "../../gamja/Gam_about";
import Gam_gallery from "../../gamja/Gam_gallery";
import Gam_board from "../../gamja/Gam_board";
import '../../gamja/Gam_Main.css';



function GamjaWorld() {
    return (
        <>

            <div id="page-wrapper">
                <div id="header-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                {/*<header id="header">*/}
                                {/*    <h1>Gamja's World</h1>*/}
                                {/*    <nav id="nav">*/}
                                {/*        /!*<ul>*!/*/}
                                {/*        /!*    <li className="nav-item"><Link to="/"> Main</Link></li>*!/*/}
                                {/*        /!*    <li className="nav-item"><Link to="/Gam_about"> About</Link></li>*!/*/}
                                {/*        /!*    <li className="nav-item "><Link to="/Gam_gallery">Gallery</Link></li>*!/*/}

                                {/*        /!*    <li className="nav-item"><Link to="/Gam_board">Board</Link></li>*!/*/}
                                {/*        /!*    /!*<li class="nav-item "><Link to="/Gam_contact">GamjaWorld</Link></li>*!/*!/*/}

                                {/*        /!*</ul>*!/*/}
                                {/*        /!*<a href="index.html" className="current-page-item">Homepage</a>*!/*/}
                                {/*        /!*<a href="twocolumn1.html">Two Column #1</a>*!/*/}
                                {/*        /!*<a href="twocolumn2.html">Two Column #2</a>*!/*/}
                                {/*        /!*<a href="onecolumn.html">One Column</a>*!/*/}
                                {/*        /!*<a href="threecolumn.html">Three Column</a>*!/*/}
                                {/*    </nav>*/}
                                {/*</header>*/}

                            </div>
                        </div>
                    </div>
                </div>

                <div id="banner-wrapper">
                    <div className="container">

                        <div id="banner">
                            {/*<a href="#" className="image"><img src="/image/gamja_32_second2.jpg" alt=""/></a>*/}
                            <h2>Introduce Gamja</h2>
                            {/*<span>Gamja's World</span>*/}
                        </div>

                    </div>
                </div>
                <div id="main">
                    <div className="container">
                        <div className="row main-row">
                            <div className="col-4 col-12-medium">

                                <section>
                                    <h2>Welcome to Gamja's World</h2>
                                    <p>This website was created as a casual way to introduce Gamja.There aren't any
                                        special features, I just made it to introduce Gamja. Take a casual look.</p>

                                    <footer className="controls">
                                        {/*<div className="col-6 col-12-small">*/}
                                        {/*    <a href="#" className="image"><img src="/image/gamja.jpg" alt=""/></a>*/}
                                        {/*</div>*/}
                                        {/*<a href="http://html5up.net" className="button">There aren't any special features, I just made it to introduce Gamja. Take a casual look.</a>*/}
                                    </footer>
                                </section>

                            </div>
                            <div className="col-4 col-6-medium col-12-small">

                                <section>
                                    <h2>Who is Gamja?</h2>
                                    <ul className="small-image-list">
                                        <li>
                                            <a href="#"><img src="/image/gamja_04.jpg" alt="" className="left"/></a>
                                            <h4>About Gamja</h4>
                                            <p>Gamja is our family dog who joined our home in 2019.Gamja" is the Korean
                                                word for potato. We named our dog Gamja because his fur color resembles
                                                a potato, and it's believed that dogs named after food will live
                                                longer</p>
                                        </li>
                                        <li>
                                            <a href="#"><img src="/image/gamja_22.jpg" alt="" className="left"/></a>
                                            <h4>How did we bring Gamja home?"</h4>
                                            <p>My sister brought Gamja home when her company's dog gave birth to puppies.</p>
                                        </li>
                                    </ul>
                                </section>

                            </div>
                            <div className="col-4 col-6-medium col-12-small">

                                <section>
                                    <h2>How is Gamja?</h2>
                                    <div>
                                        <div className="row">
                                            <div className="col-6 col-12-small">
                                                <ul className="link-list">
                                                    {/*<li><a href="#"></a></li>*/}
                                                    <li><a href="#">Despite having skin allergies, has a luxurious fur</a></li>
                                                    <li><a href="#">loves sweet potatoes.</a></li>
                                                    <li><a href="#">Likes grass and soil </a></li>
                                                    <li><a href="#">loves meat,</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-6 col-12-small">
                                                <ul className="link-list">
                                                    {/*<li><a href="#">Likes grass and soil</a></li>*/}
                                                    <li><a href="#">fearful but becomes affectionate once familiar.</a></li>
                                                    <li><a href="#">Fearful of the vet</a></li>
                                                    <li><a href="#">highly cautious</a></li>
                                                    <li><a href="#"></a>Weak legs</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                            <div className="col-12">

                                <section>
                                    <header className="major">
                                        <h2>Gallery</h2>
                                    </header>
                                    <div className="posts">
                                        <article>
                                            <a href="#" className="image"><img src="/image/gamja.jpg" alt=""/></a>
                                            {/*<h3>Nhs Hospital </h3>*/}
                                            {/*<p>Developing a project to find NHS hospitals by location by integrating the*/}
                                            {/*    NHS Open API using vue</p>*/}
                                            {/*<ul className="actions">*/}
                                            {/*    <li><a href="#" className="button">More</a></li>*/}
                                            {/*</ul>*/}
                                        </article>
                                        <article>
                                            <a href="#" className="image"><img src="/image/gamja_02.jpg" alt=""/></a>

                                        </article>
                                        <article>
                                            <a href="#" className="image"><img src="/image/gamja_06.jpg" alt=""/></a>

                                        </article>
                                        <article>
                                            <a href="#" className="image"><img src="/image/gamja_03.jpg" alt=""/></a>
                                        </article>
                                        <article>
                                            <a href="#" className="image"><img src="/image/gamja_32.jpg" alt=""/></a>
                                        </article>
                                        <article>
                                            <a href="#" className="image"><img src="/image/gamja_15.jpg" alt=""/></a>
                                        </article>


                                    </div>
                                </section>

                            </div>
                            {/*<div className="col-6 col-12-medium">*/}

                            {/*    <article className="blog-post">*/}
                            {/*        <h2>Just another blog post</h2>*/}
                            {/*        <a className="comments" href="#">33 comments</a>*/}
                            {/*        <a href="#"><img src="images/pic6.jpg" alt="" className="top blog-post-image"/></a>*/}
                            {/*        <h3>Magna Gravida Dolore</h3>*/}
                            {/*        <p>Aenean non massa sapien. In hac habitasse platea dictumst.*/}
                            {/*            Maecenas sodales purus et nulla sodales aliquam. Aenean ac*/}
                            {/*            porttitor metus. In hac habitasse platea dictumst. Phasellus*/}
                            {/*            blandit turpis in leo scelerisque mollis. Nulla venenatis*/}
                            {/*            ipsum nec est porta rhoncus. Mauris sodales sed pharetra*/}
                            {/*            nisi nec consectetur. Cras elit magna, hendrerit nec*/}
                            {/*            consectetur in, sollicitudin vitae justo. Cras amet aliquet*/}
                            {/*            Aliquam ligula turpis, feugiat id fermentum malesuada,*/}
                            {/*            rutrum eget turpis. Mauris sodales sed pharetra nisi nec*/}
                            {/*            consectetur. Cras elit magna, hendrerit nec consectetur*/}
                            {/*            in sollicitudin vitae.</p>*/}
                            {/*        <footer className="controls">*/}
                            {/*            <a href="#" className="button">Continue Reading</a>*/}
                            {/*        </footer>*/}
                            {/*    </article>*/}

                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                {/*<nav className="nav justify-content-end">*/}
                {/*    <ul>*/}
                {/*        <li class="nav-item"><Link to="/"> Main</Link></li>*/}
                {/*        <li class="nav-item"><Link to="/Gam_about"> About</Link></li>*/}
                {/*        <li class="nav-item "><Link to="/Gam_gallery">Gallery</Link></li>*/}

                {/*        <li class="nav-item"><Link to="/Gam_board">Board</Link></li>*/}
                {/*        /!*<li class="nav-item "><Link to="/Gam_contact">GamjaWorld</Link></li>*!/*/}

                {/*    </ul>*/}
                {/*</nav>*/}

                {/*<Route path="/." component={Gamja}/>*/}
                {/*<Route path="/Gam_about" component={Gam_about}/>*/}
                {/*<Route path="/Gam_gallery" component={Gam_gallery}/>*/}

                {/*<Route path="/Gam_board" component={Gam_board}/>*/}
                {/*/!*<Route path="/Gam_contact" component={Gam_contact}/><br/>*!/*/}

                {/*/!* <div class="img">*/}
                {/*<div class="content">*/}
                {/*<h1>Welcome to 감자's World</h1>*/}
                {/*</div></div>*/}
                {/*<hr/> *!/*/}
                {/*/!*<Gam_photo/>*!/*/}
                {/*<Gam_about/>*/}
                {/*<hr/>*/}
                {/*<Gam_gallery/>*/}
                {/*<hr/>*/}

                {/*<Gam_board/>*/}
                {/*<hr/>*/}
                {/*<Gam_contact/><hr/>*/}

            </div>
        </>
    )
}

// class GamjaWorld extends Component {
//     render() {
//         return (
//             <div className="contact">
//                 <h2>GamjaWorld</h2><br/>
//                 <div className="contact2">
//                 <p>yeonseo940311@gmail.com</p><br/>
//                 <a href="https://github.com/ysjung4">
//                 <i class="fab fa-github"></i></a>
//                 <a href="https://www.linkedin.com/in/yeonseo-jung-123662163/">
//                  <i class="fab fa-linkedin"></i></a>
//
//                 </div>
//
//
//             </div>
//         );
//     }
// }

export default GamjaWorld;