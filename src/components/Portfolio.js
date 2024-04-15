// components/Portfolio.js

import React from 'react';





function Portfolio() {
    return (
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0"></h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row justify-content-center">
                    {/* 포트폴리오 항목 1 */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                             data-bs-target="#portfolioModal1">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i
                                    className="fas fa-plus fa-3x"></i></div>
                            </div>

                        </div>
                    </div>
                    {/* 포트폴리오 항목 2 */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                             data-bs-target="#portfolioModal2">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i
                                    className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img src="image/computer.png" alt="sd"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                             data-bs-target="#portfolioModal2">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i
                                    className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img src="image/computer.png" alt="sd"/>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal"
                             data-bs-target="#portfolioModal2">
                            <div
                                className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i
                                    className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img src="image/computer.png" alt="sd"/>
                        </div>
                    </div>
                    {/* 추가 포트폴리오 항목들을 필요에 따라 이어서 추가 */}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
