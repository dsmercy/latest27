import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import leftImg from "../../assets/images/left-side-img.png";
import sidemenu from "../../assets/images/dash-side-menu.png";
import { UserProfileBody } from "./UserProfileBody";
import { useNavigate } from "react-router-dom";
import useAccountStore from "../../store/useAccountStore";

export const UserSideBar = () => {
  const navigate = useNavigate()
  const now = 60;

  const signedInUserData = useAccountStore((state) => state.signedInUserData);

const completeProfile=()=>{
  navigate(`/job-seeker-profile`);
}



  return (
    <>
      <div className="employee-side">
        <Row>
          <Col lg={3} sm={12}>
            <div className="employee-left-side">
              <div className="john-smith">
                <Row>
                  <Col lg={3}>
                    <img src={leftImg} alt="image" />
                  </Col>
                  <Col>
                    <h4>{signedInUserData && signedInUserData.data?.users?.firstName} {signedInUserData && signedInUserData.data?.users?.lastName}</h4>
                    <p>UI/UX Developer</p>
                  </Col>
                </Row>
              </div>

              <ProgressBar
                variant="success"
                animated
                now={now}
                label={`${now}%`}
              />

              <div className="dash-missing">
                <h4>What are you Missing ?</h4>
                <p>
                  <i className="fa fa-check-circle"></i> Daily job
                  recommendations
                </p>
                <p>
                  <i className="fa fa-check-circle"></i> Job application updates
                </p>
                <p>
                  <i className="fa fa-check-circle"></i> Direct jobs from
                  recruiter
                </p>
                <div className="complete-profile">
                  <Button variant="" onClick={completeProfile}>Complete Profile</Button>
                </div>
              </div>

              <div className="dash-menu">
                <ul>
                  <li className="active">
                    <i className="fa fa-home"></i> Home{" "}
                  </li>
                  <li>
                    <i className="fa fa-bookmark-o"></i> Saved Job{" "}
                    <span>15</span>
                  </li>
                  <li>
                    <i className="fa fa-paper-plane-o"></i> Applied Job{" "}
                    <span>25</span>
                  </li>
                  <li>
                    <i className="fa fa-comments-o"></i> Message <span>15</span>
                  </li>
                  <li>
                    <i className="fa fa-server"></i> Network{" "}
                  </li>
                </ul>
              </div>
              <div className="resume-view">
                <input
                  type="text"
                  placeholder="Resume view"
                  className="form-control"
                />
              </div>
              <div className="dash-side-img">
                <img src={sidemenu} alt="image" className="img-fluid" />
              </div>
            </div>
          </Col>

          <Col lg={9} sm={12}>
            <div className="employee-right-side">
              <Row>
                <Col lg={4} sm={12}>
                  <div className="job-card applied-card">
                    <Row>
                      <Col>
                        <h4>20</h4>
                        <p>Applied Job</p>
                      </Col>
                      <Col>
                        <i className="fa fa-paper-plane" />
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={4} sm={12}>
                  <div className="job-card saved-card">
                    <Row>
                      <Col>
                        <h4>18</h4>
                        <p>Saved Job</p>
                      </Col>
                      <Col>
                        <i className="fa fa-bookmark"></i>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg={4} sm={12}>
                  <div className="job-card resume-card">
                    <Row>
                      <Col>
                        <h4>16</h4>
                        <p>Resume View</p>
                      </Col>
                      <Col>
                        <i className="fa fa-eye"></i>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>

              <UserProfileBody/>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
