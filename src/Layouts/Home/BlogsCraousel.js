import React from "react";
import rectangle19 from "../../assets/images/Rectangle 19.png";
import retangle19f from "../../assets/images/Rectangle 19fhgf.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogsCraousel = () => {
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
        <div className="read-latest">
          <h4>Read latest articles &amp; blogs</h4>
          <p>Fresh job related news content posted each day.</p>
        </div>
        <Slider {...settings}>

        <div className="carousel-item">

          <div className="card">
            <img
              className="card-img-top"
              src={rectangle19}
              alt="Card image cap"
            />
            <div className="card-body crdd-body">
              <div className="admin">
                <p>
                  <i className="fa fa-user-o" /> By Admin
                </p>
                <p>
                  <i className="fa fa-clock-o" /> Nov 21, 2023
                </p>
              </div>
              <h5>21 Job Interview Tips: How To Make a Great Impression</h5>
              <p>
                Our mission is to create the world most sustainable healthcare
                company by creating high-quality.
              </p>
            </div>
          </div>
          </div>
          
  <div className="carousel-item">
          <div className="card">
            <img
              className="card-img-top"
              src={retangle19f}
              alt="Card image cap"
            />
            <div className="card-body crdd-body">
              <div className="admin">
                <p>
                  <i className="fa fa-user-o" /> By Admin
                </p>
                <p>
                  <i className="fa fa-clock-o" /> Nov 21, 2023
                </p>
              </div>
              <h5>21 Job Interview Tips: How To Make a Great Impression</h5>
              <p>
                Our mission is to create the world most sustainable healthcare
                company by creating high-quality.
              </p>
            </div>
          </div>
          </div>
          
  <div className="carousel-item">
          <div className="card">
            <img
              className="card-img-top"
              src={rectangle19}
              alt="Card image cap"
            />
            <div className="card-body crdd-body">
              <div className="admin">
                <p>
                  <i className="fa fa-user-o" /> By Admin
                </p>
                <p>
                  <i className="fa fa-clock-o" /> Nov 21, 2023
                </p>
              </div>
              <h5>21 Job Interview Tips: How To Make a Great Impression</h5>
              <p>
                Our mission is to create the world most sustainable healthcare
                company by creating high-quality.
              </p>
            </div>
          </div>
          </div>
          
  <div className="carousel-item">
          <div className="card">
            <img
              className="card-img-top"
              src={retangle19f}
              alt="Card image cap"
            />
            <div className="card-body crdd-body">
              <div className="admin">
                <p>
                  <i className="fa fa-user-o" /> By Admin
                </p>
                <p>
                  <i className="fa fa-clock-o" /> Nov 21, 2023
                </p>
              </div>
              <h5>21 Job Interview Tips: How To Make a Great Impression</h5>
              <p>
                Our mission is to create the world most sustainable healthcare
                company by creating high-quality.
              </p>
            </div>
          </div>
        </div>
        
        </Slider >
      </div>
    </>
  );
};
export default BlogsCraousel;
