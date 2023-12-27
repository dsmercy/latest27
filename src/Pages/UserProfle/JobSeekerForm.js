import React,{useEffect, useState} from 'react';
import { FormLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import benfit from '../../assets/images/Group 41634.png'
import Header from '../../components/Header/Header';
import { useForm } from "react-hook-form";
import Services from '../../services/Services';
import {  useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobSeekerForm = () => {

  const {register,formState: { errors },handleSubmit} = useForm({ mode: 'all' });
  const [validated, setValidated] = useState(false);
  const {email} = useParams();
  const [data, setData] = useState('');


const handleAutoFill =()=>{
  //  const email= "akshay@yopmail.com"
  Services.Account.getJobSeeker().then(response=>{
    console.log(response);
    setData(response.data)

  }).catch((errors)=>{
console.log("errors", errors.message);
toast.error(errors.message, {
  position: toast.POSITION.TOP_RIGHT,
});
  })
}

useEffect(() => {
  handleAutoFill();
}, []);

const handleComplete = (data) => {
  // console.log("Form completed!", data);
};

    const handleFormSubmit = async () => {
      setValidated(true);
    }
    
    const tabChanged = ({
      prevIndex,
      nextIndex,
    }) => {
      // console.log("prevIndex", prevIndex);
      // console.log("nextIndex", nextIndex);
    };

   return (
  <>
  <Header/>
<div className='wizard-header'>
<Container>
<Row>
<Col lg={4} sm={12}>
<div className='jobs-benefits'>
<div className='jobs-benefits-inner'>
<h4>Poppin’ Jobs Benefits</h4>
<img src={benfit} alt="image" />

</div>

  <p><i className="fa fa-check-square"></i> Find your perfect match using our patented Poppin Jobs.</p>
  <p><i className="fa fa-check-square"></i> Create, send and track the lifecycle of your resume in real-time.</p>
  <p><i className="fa fa-check-square"></i> Get updates and feedback delivered directly to your email and phone.</p>


</div>
</Col>

<Col lg={8} sm={12}>


  <div className='wizard-head'>
  <h4>Tell us more about <span className='yourself'>yourself</span> </h4>
  <p>This helps us tailor our suggestions for you.</p>
   
   <Form
    noValidate
    validated={validated}
    onSubmit={handleSubmit(handleFormSubmit)}>
     <FormWizard
      shape="circle"
      color="#1DA425"
      onComplete={handleComplete}
      onTabChange={tabChanged}
      nextButtonTemplate={(handleNext) => (
        <div className="wizard-footer-right" style={{backgroundColor:'rgb(29, 164, 37)',borderColor:'rgb(29, 164, 37)',borderRadius:'4px'}}>
        <button className="wizard-btn" type="submit" onClick={handleNext}>Continue</button>
        </div>
      )}
    >
      <FormWizard.TabContent title="Basic Details" icon="fa fa-check">
        <h5>Basic Details</h5>
        <span className='bord'></span>
        <Row>
      <Col lg={4} sm={12}>
      <FormLabel>First Name<span className='text-danger'>*</span></FormLabel>
          <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder="First Name"
        aria-label="Firstname"
        aria-describedby="basic-addon1"
        value={data.firstName}
        {...register("firstName", { required: true })}
        isInvalid={!!errors.firstName}
         />
    </InputGroup>

      </Col>
      <Col lg={4} sm={12}>
      <FormLabel>Middle Name</FormLabel>
          <InputGroup className="mb-3">
          <Form.Control
        type="email"
        placeholder="Middle Name"
        aria-label="Middlename"
        aria-describedby="basic-addon1"
        
        {...register("middleName")}
        isInvalid={!!errors.middleName}
   
      />
    </InputGroup>

      </Col>

      <Col lg={4} sm={12}>
      <FormLabel>Last Name<span className='text-danger'>*</span></FormLabel>
          <InputGroup className="mb-3">
      
      <Form.Control
        type="text"
        placeholder="Last Name"
        aria-label="Lastname"
        aria-describedby="basic-addon1"
        value={data.lastName}
        {...register("lastName", { required: true })}
        isInvalid={!!errors.lastName}
   />
    </InputGroup>

      </Col>
      </Row>
      <Row>
      <Col>
      <FormLabel>Email<span className='text-danger'>*</span></FormLabel>
          <InputGroup className="mb-3">
      <Form.Control
        type="email"
        placeholder="Email"
        aria-label="Email"
        aria-describedby="basic-addon1"
        value={data.email}
        {...register("email", {
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
        })}
        isInvalid={!!errors.email}
   />
    </InputGroup>
      </Col>
      </Row>
      <Row>
      <Col>
      <FormLabel>Phone Number<span className='text-danger'>*</span></FormLabel>
          <InputGroup className="mb-3">
      <Form.Control
        type="phonenumber"
        placeholder="Phone Number"
        aria-label="PhoneNumber"
        aria-describedby="basic-addon1"
        value={data.phoneNumber}
        {...register('phoneNumber', {
          required: true,
          maxLength: 10,
          pattern: {
            value: /^[0-9\b]+$/,
            message: "Invalid phone number"
          }
        })}
        isInvalid={!!errors.phoneNumber}
       />
    </InputGroup>
      </Col>
      
    </Row>
    <Row>
      <Col>
      <FormLabel>Current Location<span className='text-danger'>*</span></FormLabel>
          <InputGroup className="mb-3">
      <Form.Control
        type="text"
        placeholder="Current Location"
        aria-label="Current Location"
        aria-describedby="basic-addon1"
        {...register('location',{required:true})}
        isInvalid={!!errors.location}
   
      />
    </InputGroup>
      </Col>
      
    </Row>
      </FormWizard.TabContent>

      <FormWizard.TabContent title="Education & Skill" icon="fa fa-check">
      <h5>Education & Skills</h5>
        <span className='bord'></span>

        <Row>
            <Col>

            <FormLabel>Degree  <span className='text-danger'>*</span></FormLabel>
            <Form.Select aria-label="Default select example" className='mb-3'>
           <option>Open this select menu </option>
          <option value="1">BCA</option>
          <option value="2">MCA</option>
         <option value="3">BTech</option>
          </Form.Select>
            </Col>
            
     
          </Row>

          
        <Row>
            <Col>

            <FormLabel>Field of study  <span className='text-danger'>*</span></FormLabel>
            <Form.Select aria-label="Default select example" className='mb-3'>
           <option>Open this select menu </option>
          <option value="1">Computer</option>
          <option value="2">Computer Science</option>
         <option value="3">BTech</option>
          </Form.Select>
            </Col>
            
     
          </Row>

          <Row>
            <Col>

            <FormLabel>School/University  <span className='text-danger'>*</span></FormLabel>
            <Form.Select aria-label="Default select example" className='mb-3'>
           <option>Open this select menu </option>
          <option value="1">Computer</option>
          <option value="2">Computer Science</option>
         <option value="3">BTech</option>
          </Form.Select>
            </Col>
            
     
          </Row>

          <Row>
            <Col>

            <FormLabel>Year of Completion   <span className='text-danger'>*</span></FormLabel>
            <Form.Select aria-label="Default select example" className='mb-3'>
           <option>Open this select menu </option>
          <option value="1">Computer</option>
          <option value="2">Computer Science</option>
         <option value="3">BTech</option>
          </Form.Select>
            </Col>
            
     
          </Row>
          <div className='add-position'>
      <h4><i className="fa fa-plus-circle"></i> Add Education Or Certification</h4>
    </div>

      </FormWizard.TabContent>
      
      <FormWizard.TabContent title="Experience" icon="fa fa-check">
      <h5>Experience</h5>
        <span className='bord'></span>
    <div className='experience'>
    <Row>
    <Col>
        <div className='fresh'>
          <h4><input className='form-check-input' type="checkbox" id="exper" name="exper"/> <label for="exper">I'm Experienced</label></h4>
          <p>I have work experienced (excluding internships)</p>
        </div>
        </Col>
        <Col>
        <div className='fresh-second'>
          <h4><input className='form-check-input' type="checkbox" id="fresher" name="exper"/> <label for="fresher">I’m a Fresher</label> </h4>
          <p>I‘m a Student Haven’t 
             worked after graduation.</p>
        </div>
        </Col>
        </Row>

    <div className='current-empl'>
      <h5>Is this your current employment?</h5>
      <input className='form-check-input' type='radio' id='eyes' name="current" /><label for='eyes'>Yes </label>
      <input className='form-check-input' type='radio' id='eno' name="current" /><label for='eno'>No </label>
    </div>


    <FormLabel>Company Name <span className='text-danger'>*</span></FormLabel>
          <InputGroup className="mb-3">
  
      <Form.Control
        type="text"
        placeholder="Company name"
        aria-label="Company"
        aria-describedby="basic-addon1"
   
      />
    </InputGroup>

    <FormLabel>Job Title<span className='text-danger'>*</span></FormLabel>
          <InputGroup className="mb-3">
  
      <Form.Control
        type="text"
        placeholder="Job Title"
        aria-label="JobTitle"
        aria-describedby="basic-addon1"
   
      />
    </InputGroup>

    <Row>
            <Col>

            <FormLabel>Start Date <span className='text-danger'>*</span></FormLabel>
            <Form.Select aria-label="Default select example" className='mb-3'>
           <option>Calendar</option>
          <option value="1">2022</option>
          <option value="2">2021</option>
         <option value="3">2020</option>
          </Form.Select>
            </Col>
            
     
          </Row>

          <FormLabel>Skill Used <span className='text-danger'>*</span></FormLabel>
          <InputGroup className="mb-3">
  
      <Form.Control
        type="text"
        placeholder=""
        aria-label="Username"
        aria-describedby="basic-addon1"
   
      />
    </InputGroup>

    <FormLabel>Job Description</FormLabel>
    <FloatingLabel controlId="floatingTextarea2" label="Comments">
      <Form.Control
        as="textarea"
        placeholder="Leave a comment here"
        style={{ height: '100px' }}
      />
    </FloatingLabel>

    <div className='current-salary'>
      <h5>Current Salary ($)</h5>
      <input className='form-check-input' type='radio' id='hourly' name="salary" /><label for='hourly'>Hourly </label>
      <input className='form-check-input' type='radio' id='monthly' name="salary" /><label for='monthly'>Monthly</label>
      <input className='form-check-input' type='radio' id='annually' name="salary" /><label for='annually'>Annually </label>
    </div>   

    <div className='add-position'>
      <h4><i className="fa fa-plus-circle"></i> Add Position</h4>
    </div>
      
        </div>
       
 
       
      

      </FormWizard.TabContent>

      <FormWizard.TabContent title="Job Preference" icon="fa fa-check">
      <h5>Job Preference</h5>
        <span className='bord'></span>

        <FormLabel>Preferred Location <span className='text-danger'>*</span></FormLabel>
          <InputGroup className="mb-3">
  
      <Form.Control
        type="text"
        placeholder=""
        aria-label="Username"
        aria-describedby="basic-addon1"
   
      />
    </InputGroup>


    <div className='job-type'>
      <h5>Job Type <span className='text-danger'>*</span></h5>
      <input className='form-check-input' type='radio' id='perm' name="job-type" /><label for='perm'>Permanent </label>
      <input className='form-check-input' type='radio' id='temp' name="job-type" /><label for='temp'>Temporary/Contract</label>
      <input className='form-check-input' type='radio' id='both' name="job-type" /><label for='both'>Both </label>
    </div>  
    <div className='job-type'>
      <h5>Employment Type <span className='text-danger'>*</span></h5>
      <input className='form-check-input' type='radio' id='perm' name="job-type" /><label for='perm'>Full time </label>
      <input className='form-check-input' type='radio' id='temp' name="job-type" /><label for='temp'>Part time</label>
      <input className='form-check-input' type='radio' id='both' name="job-type" /><label for='both'>Remote </label>
    </div>  
    <div className='job-type'>
      <h5>Expected Salary <span className='text-danger'>*</span></h5>
      <input className='form-check-input' type='radio' id='perm' name="job-type" /><label for='perm'>Hourly </label>
      <input className='form-check-input' type='radio' id='temp' name="job-type" /><label for='temp'>Monthly</label>
      <input className='form-check-input' type='radio' id='both' name="job-type" /><label for='both'>Annually </label>
    </div>  


      
      </FormWizard.TabContent>

    </FormWizard>
    </Form>
    </div>
    </Col>
</Row>
</Container>
    
    </div>
  </>

)
}


export default JobSeekerForm
