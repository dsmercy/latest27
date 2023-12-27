import React from "react";
import ellipse68 from "../../assets/images/Ellipse 68.png";
import tyty from "../../assets/images/tyty.png";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";


const ReviewsCraousel =()=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
    return (
        <>
        <div className="container">
  <div className="review mtt">
    <h4>Reviews of people</h4>
    <p>Who have found jobs through Poppin’ Jobs</p>
  </div>
  <div className="quate">
    <img src={tyty} alt="icon" />
  </div>
  <div className="review-inner mtt">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. standard dummy text ever since the 1500s, when
      an unknown printer
    </p>
    
    <div className="carousel-test">
    <Slider {...settings}>
      <div className="media mdaa">
        <div className="media-body mdy-body">
          <h5>Linda Ethan</h5>
          <p>UI/UX Designer</p>
        </div>
        <img className="mr-3" src={ellipse68} alt="image" />
      </div>
      
      <div className="media  mdaa">
        <div className="media-body mdy-body">
          <h5>Linda Ethan</h5>
          <p>UI/UX Designer</p>
        </div>
        <img className="mr-3" src={ellipse68} alt="image" />
      </div>
      
      <div className="media  mdaa">
        <div className="media-body mdy-body">
          <h5>Linda Ethan</h5>
          <p>UI/UX Designer</p>
        </div>
        <img className="mr-3" src={ellipse68} alt="image" />
      </div>
      
      <div className="media  mdaa">
        <div className="media-body mdy-body">
          <h5>Linda Ethan</h5>
          <p>UI/UX Designer</p>
        </div>
        <img className="mr-3" src={ellipse68} alt="image" />
      </div>
      
      <div className="media  mdaa">
        <div className="media-body mdy-body">
          <h5>Linda Ethan</h5>
          <p>UI/UX Designer</p>
        </div>
        <img className="mr-3" src={ellipse68} alt="image" />
      </div>
     </Slider>
    </div>
 
  </div>
</div>

        </>
    )
}
export default ReviewsCraousel;