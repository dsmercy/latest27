import React from 'react';
import logo from '../../assets/images/Logo.png';
import { NavLink } from 'react-router-dom';
import useAccountStore from '../../store/useAccountStore';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const signedInUserData = useAccountStore((state) => state.signedInUserData);
  const signOut = useAccountStore((state) => state.signOut);
  console.log('signedInUserData',signedInUserData);

  const handleChange=()=>{
    navigate('/job-seeker-profile');
  }

const handleChangePassword=()=>{
  navigate('/changepassword');
}

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink className="navbar-brand" to="index.html">
            <img src={logo} alt="logo" className="img-fluid" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Job Seekers
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employers
                </NavLink>
                
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  College
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Resources
                </NavLink>
              </li>
            </ul>
            <div className="log">
            {signedInUserData ?
            <>
                <NavLink className="nav-link" to="/login">
                <NavDropdown title={signedInUserData.data?.users?.firstName} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleChange}>Profile</NavDropdown.Item> <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleChangePassword}>Change Password</NavDropdown.Item> <NavDropdown.Divider />
              <NavDropdown.Item  onClick={signOut}>Logout</NavDropdown.Item>
              {/* <button className="nav-link reg" >
                Logout
                  </button> */}
                  {/* {signedInUserData[0].data?.users?.firstName} */}
                  </NavDropdown>
                </NavLink></> :
                <>
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                  <NavLink className="nav-link reg" to="/register">
                    Register
                  </NavLink>
                </>}

              {/* <NavLink className="nav-link reg" to="/register">
                Register
              </NavLink> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
