import React from "react";
import Vector from "../../assets/images/Vector (3).png";
import group from "../../assets/images/Group 41416.png";
import image2 from '../../assets/images/image 2.png';
import idea from "../../assets/images/idea.png";
import protect from "../../assets/images/protection.png";
import automotive from "../../assets/images/automotive.png";
import group2 from "../../assets/images/Group 2905.png";


const DemandingCategories = () => {

  return (
    <>
      <div className="container">
        <div className="demand">
          <h4>Feature Categories</h4><span>Explore All Field &gt;&gt;</span>
          <p>There is place to find the popular job, browse wanted your jobs</p>
        </div>
        <div className="row">
        
          <div className="col-lg-2 col-md-6">
            <div className="demand-inner">
              <img src={Vector} alt="image" />
              <h4>Customer Service</h4>
              <i className="fa fa-angle-right" /> <span>16k+ Jobs</span>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="demand-inner">
              <img src={group} alt="image" />
              <h4>Human Resource</h4>
              <i className="fa fa-angle-right" /> <span>10k+ Jobs</span>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="demand-inner">
              <img src={image2} alt="image" />
              <h4>Accounting/ Finance</h4>
              <i className="fa fa-angle-right" /> <span>26k+ Jobs</span>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="demand-inner">
              <img src={idea} alt="image" />
              <h4>Project Management</h4>
              <i className="fa fa-angle-right" /> <span>6k+ Jobs</span>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="demand-inner">
              <img src={protect} alt="image" />
              <h4>Health &amp; Care</h4>
              <i className="fa fa-angle-right" /> <span>26k+ Jobs</span>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="demand-inner">
              <img src={automotive} alt="image" />
              <h4>Automotive Jobs</h4>
              <i className="fa fa-angle-right" /> <span>12k+ Jobs</span>
            </div>
          </div>
          
        </div>
      </div>
      <div className="container">
  <div className="row">
    <div className="col-lg-6 col-12">
      <div className="get-over-left mtt">
        <img src={group2} className="img-fluid" alt="image" />
      </div>
    </div>
    <div className="col-lg-6 col-12">
      <div className="get-over-right mtt">
        <h4>
          Get over 45,000+ talented experts in Poppin’{" "}
          <span className="work">Jobs</span>.
        </h4>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit essecillum
          dolore eu fugiat nulla pariatur.
        </p>
        <ul>
          <li>Seamless searching</li>
          <li>Get top 3% experts for your project</li>
          <li>Protected payments system</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="container">
  <div className="card-grid">
    <div className="row">
      <div className="col-lg-12 col-12">
        <div className="first-card">
          {/* <img src="images/Group 41341.png" alt="image"> */}
          <h4>Are you recruiting?</h4>
          <p>
            Five million searchable CVs in one place with our linked CV
            database.
          </p>
        </div>
      </div>
      <div className="col-lg-12 col-12">
        <div className="second-card">
          {/* <img src="images/Group 41417.png" alt="image"> */}
          <h4>Looking for job?</h4>
          <p>
            Your next role could be with one of these top leading organizations.
          </p>
        </div>
      </div>
      <div className="col-lg-12 col-12">
        <div className="third-card">
          {/* <img src="images/Group 41418.png" alt="image"> */}
          <h4>Looking For Volunteers?</h4>
          <p>
            Here you can put out ads to get the help you need for your
            Non-Profit.
          </p>
        </div>
      </div>
      <div className="col-lg-12 col-12">
        <div className="fourth-card">
          {/* <img src="images/Group 41419.png" alt="image"> */}
          <h4>Make an Impact!</h4>
          <p>
            Our communities are always in need of help, if you are interested in
            being part of the solution, we have the tools to find your next
            opportunity
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  );
};

export default DemandingCategories;
