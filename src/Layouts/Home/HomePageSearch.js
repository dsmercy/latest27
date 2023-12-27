import React from "react";
import group from "../../assets/images/Group 41384.png";
// import { updateUser } from "../../services/axiosAPI/Registration";

const HomePageSearch = () => {
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="left-side">
              <h4>
                Stop <span className="sear">Searching</span>
                <br />
                Start <span className="work">Working</span>
              </h4>
              <p>
                25000+ jobs listed here! <br />
                your dream job waiting.
              </p>
              <button className="btn bg-dark text-white w-25"> Register</button>
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <div className="right-side">
              <img src={group} alt="image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Job
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Internship
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            defaultChecked=""
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Volunteer
          </label>
        </div>
      </div>
      <div className="container">
        <div className="job-title">
          <div className="row w-100">
            <div className="col-lg-3 col-12">
              <div className="job-title-first">
                <div className="form__group field">
                  <i className="fa fa-search" />
                  <input
                    type="input"
                    className="form__field"
                    placeholder="Enter skill/ designation/company name"
                    name="name"
                    id="name"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="job-title-third">
                <div className="form__group field">
                  {/* <i className="fa fa-briefcase" /> */}
                  <select>
                    <option>Select Experience</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="job-title-second">
                <div className="form__group field">
                  {/* <i className="fa fa-map-marker" /> */}
                  <input
                    type="input"
                    className="form__field"
                    placeholder="Enter Location"
                    name="name"
                    id="name"
                    required=""
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-12 flt">
              <button type="button" className="btn btn-dark">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageSearch;
