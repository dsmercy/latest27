import React from "react";
import kantar from "../../assets/images/Kantar Logo.png";
import google from "../../assets/images/fr-google.png";
import microsoft from "../../assets/images/Clip path group.png";
import shell from "../../assets/images/142634.png";
import AON from "../../assets/images/AON.png";
import apple from "../../assets/images/apple-download.png";
import google1 from "../../assets/images/google-download.png";
import mobile from "../../assets/images/Group 28581.png";
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const EmployerCraousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
 
return (
    <>
     <div className="wrapper">
          <div className="carousel carus">
          <Slider {...settings}>
            <div>
              <div className="card">
                <div className="card-body cad-body">
                  <div className="card-body-inner">
                    <img src={kantar} alt="icon" />
                  </div>
                  <div className="card-content crd-content">
                    <div className="card-title crd-title">
                      <h4>Kantar</h4>
                    </div>
                    <div className="card-text">
                      <p>
                        <i className="fa fa-star" /> 3.4 | 42 Reviews
                      </p>
                      <h5>
                        Explore <i className="fa fa-angle-right" />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="card">
                <div className="card-body cad-body">
                  <div className="card-body-inner">
                    <img src={google} alt="icon" />
                  </div>
                  <div className="card-content crd-content">
                    <div className="card-title crd-title">
                      <h4>Google</h4>
                    </div>
                    <div className="card-text">
                      <p>
                        <i className="fa fa-star" /> 3.4 | 42 Reviews
                      </p>
                      <h5>
                        Explore <i className="fa fa-angle-right" />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="card">
                <div className="card-body cad-body">
                  <div className="card-body-inner">
                    <img src={microsoft} alt="icon" />
                  </div>
                  <div className="card-content crd-content">
                    <div className="card-title crd-title">
                      <h4>Microsoft</h4>
                    </div>
                    <div className="card-text">
                      <p>
                        <i className="fa fa-star" /> 3.4 | 42 Reviews
                      </p>
                      <h5>
                        Explore <i className="fa fa-angle-right" />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="card">
                <div className="card-body cad-body">
                  <div className="card-body-inner">
                    <img src={shell} alt="icon" />
                  </div>
                  <div className="card-content crd-content">
                    <div className="card-title crd-title">
                      <h4>Shell</h4>
                    </div>
                    <div className="card-text">
                      <p>
                        <i className="fa fa-star" /> 3.4 | 42 Reviews
                      </p>
                      <h5>
                        Explore <i className="fa fa-angle-right" />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                       <div>
              <div className="card">
                <div className="card-body cad-body">
                  <div className="card-body-inner">
                    <img src={AON} alt="icon" />
                  </div>
                  <div className="card-content crd-content">
                    <div className="card-title crd-title">
                      <h4>AON</h4>
                    </div>
                    <div className="card-text">
                      <p>
                        <i className="fa fa-star" /> 3.4 | 42 Reviews
                      </p>
                      <h5>
                        Explore <i className="fa fa-angle-right" />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Slider>
          </div>
        </div>
     

      <div className="download-app">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="dwnl">
                <h4>Download our App Today</h4>
                <p>
                  Download the ResumeBear app and get paired with top employers
                  instantly.
                </p>
                <div className="app-icon">
                  <img src={apple} alt="" />
                  <img src={google1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="mobile-img">
                <img src={mobile} alt="image" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
export default EmployerCraousel;
