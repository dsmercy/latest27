import React from "react";
import oppo from "../../assets/images/Exclusive opportunity.png";
import albama from "../../assets/images/TheUniversityOfAlabama.png";
import colorado from "../../assets/images/CSU-Longbeach_seal.svg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CollegeCraousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <>
    
      <div className="container mtt">
      
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="exclusive">
              <img src={oppo} alt="image" className="img-fluid" />
            </div>
          </div>
          
          <div className="col-lg-8 col-12 college-sl">
            <div className="exclusive-cont">
              <h4>Exclusive opportunity </h4>
              <p>To become a Poppin’ Jobs featured college!</p>
            </div>
            <Slider {...settings}>
            <div className="carousel-item">
           
              <div>
                <div className="card">
                  <div className="card-body cad-body">
                    <div className="media">
                      <img className="mr-3" src={albama} alt="image" />
                      <div className="media-body mdi-body">
                        <h5 className="mt-0">The University Of Alabama</h5>
                        <p>Tuscaloosa, Alabama</p>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-title cad-title">
                        <h4>Accounting</h4>
                        <p>
                          The University of Alabama&apos;s Computer Science
                          Department offers interdisciplinary graduate{" "}
                        </p>
                      </div>
                      <div className="card-text cad-text">
                        <h5>
                          Explore <i className="fa fa-angle-right" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</div>
<div className="carousel-item">
              <div className="college-slider">
                <div className="card">
                  <div className="card-body cad-body">
                    <div className="media">
                      <img className="mr-3" src={colorado} alt="image" />
                      <div className="media-body mdi-body">
                        <h5 className="mt-0">University Of Colorado Denver</h5>
                        <p>Tuscaloosa, Alabama</p>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-title cad-title">
                        <h4>Marketing</h4>
                        <p>
                          CU Denver offers exciting programs at every academic
                          level. Choose from 41 bachelor’s, 59 master’s, and ...{" "}
                        </p>
                      </div>
                      <div className="card-text cad-text">
                        <h5>
                          Explore <i className="fa fa-angle-right" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
<div className="carousel-item">
              <div>
                <div className="card">
                  <div className="card-body cad-body">
                    <div className="media">
                   
                      <img className="mr-3" src={colorado} alt="image" />
                      
                      <div className="media-body mdi-body">
                        <h5 className="mt-0">University Of Colorado Denver</h5>
                        <p>Tuscaloosa, Alabama</p>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-title cad-title">
                        <h4>Human Resources</h4>
                        <p>
                          CU Denver offers exciting programs at every academic
                          level. Choose from 41 bachelor’s, 59 master’s, and ...{" "}
                        </p>
                      </div>
                      <div className="card-text cad-text">
                        <h5>
                          Explore <i className="fa fa-angle-right" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
<div className="carousel-item">
              <div>
                <div className="card">
                  <div className="card-body cad-body">
                    <div className="media">
                    <img className="mr-3" src={albama} alt="image" />
                      <div className="media-body mdi-body">
                        <h5 className="mt-0">The University Of Alabama</h5>
                        <p>Tuscaloosa, Alabama</p>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-title cad-title">
                        <h4>Accounting</h4>
                        <p>
                          The University of Alabama&apos;s Computer Science
                          Department offers interdisciplinary graduate{" "}
                        </p>
                      </div>
                      <div className="card-text cad-text">
                        <h5>
                          Explore <i className="fa fa-angle-right" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
<div className="carousel-item">
              <div>
                <div className="card">
                  <div className="card-body cad-body">
                    <div className="media">
                    <img className="mr-3" src={colorado} alt="image" />
                      <div className="media-body mdi-body">
                        <h5 className="mt-0">University Of Colorado Denver</h5>
                        <p>Tuscaloosa, Alabama</p>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-title cad-title">
                        <h4>Marketing</h4>
                        <p>
                          CU Denver offers exciting programs at every academic
                          level. Choose from 41 bachelor’s, 59 master’s, and ...{" "}
                        </p>
                      </div>
                      <div className="card-text cad-text">
                        <h5>
                          Explore <i className="fa fa-angle-right" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            </Slider >
          
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default CollegeCraousel;
