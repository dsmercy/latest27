import React from 'react'
import micro from '../../assets/images/Microsoft_logo_(2012) 2.png';
import { Button, Col, Row } from "react-bootstrap";
import appstore from "../../assets/images/app-store-google-play-logo 3.png";
import googleplay from "../../assets/images/app-store-google-play-logo 4.png";

export const UserProfileBody = () => {
  return (
    <>
    
     <div className="match-job">
                <h4>
                  Matched <span>Jobs</span>
                </h4>
                <p> View All</p>
              </div>
              <Row> 
                <Col>
                  <div className="visual-card">
                    <img src={micro} alt="image" />
                    <i className="fa fa-bookmark-o"></i>
                    <p>
                      3.4 <i className="fa fa-star" />
                    </p>

                    <h4>Visual Designer</h4>
                    <h5>Full Time</h5>

                    <span>
                      <i className="fa fa-briefcase"></i>
                      3-8 Yrs
                    </span>
                    <span>
                      <i className="fa fa-usd"></i>
                      Not disclosed
                    </span>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      New York,NY
                    </span>
                    <div className="dash-desc">
                      <p>
                        You will be expected to create Visual appealing design
                        keeping in mind There are many variations of alteration
                        in some
                      </p>
                    </div>
                    <div className="dash-prog">
                      <Row>
                        {/* <Col>
            <ProgressBar variant="success" animated now={now} label={`${now}%`} />
            </Col> */}
                        <Col>
                          <div className="apply-now">
                            <Button variant="">
                              Apply Now <i className="fa fa-chevron-right"></i>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="visual-card">
                    <img src={micro} alt="image" />
                    <i className="fa fa-bookmark-o"></i>
                    <p>
                      3.4 <i className="fa fa-star" />
                    </p>

                    <h4>Visual Designer</h4>
                    <h5>Full Time</h5>

                    <span>
                      <i className="fa fa-briefcase"></i>
                      3-8 Yrs
                    </span>
                    <span>
                      <i className="fa fa-usd"></i>
                      Not disclosed
                    </span>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      New York,NY
                    </span>
                    <div className="dash-desc">
                      <p>
                        You will be expected to create Visual appealing design
                        keeping in mind There are many variations of alteration
                        in some
                      </p>
                    </div>
                    <div className="dash-prog">
                      <Row>
                       
                        <Col>
                          <div className="apply-now">
                            <Button variant="">
                              Apply Now <i className="fa fa-chevron-right"></i>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="match-job">
                <h4>
                  Volunteer <span>Opportunities </span>
                </h4>
              </div>

              <div className="volunteer">
                <div className="volunteer-inner">
                  <h4>Want to help your community?</h4>
                  <p>
                    Subscribe to our premium plan to start browsing Volunteer
                    Positions in your community{" "}
                  </p>
                  <Button variant="">Subscribe now!</Button>
                </div>
              </div>

              <div className="download-app">
                <h4>Download App Our Today</h4>
                <p>
                  Download the Poppin’ Jobs app and get Paired with top
                  Employers instantly.
                </p>
                <h5>
                  download app from :
                  <img src={appstore} alt="image" />
                  <img src={googleplay} alt="image" />
                </h5>
              </div>
    </>
  )
}
