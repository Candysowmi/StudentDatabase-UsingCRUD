import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'

const Create = () => {
  const [value, setValue] = useState({
    name: '',
    lastname: '',
    birth: '',
    gender: '',
    age: '',
    phonenumber: '',
    email: ''
  })

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/Student/', value)
      .then(res => {
        console.log(res);
        navigate('/home')
      })
      .catch(err => console.log("err"));

  }
  return (

    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-dark'>
      <div className='w-75 border bg-shadow px-5 pt-3 pb-5 rounded bg-light'>
      <h1>Add The Student Details</h1> <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">FIRST NAME :</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder='Enter your First Name'
              onChange={e => setValue({ ...value, name: e.target.value })} />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">LAST NAME :</label>
          <div className="col-sm-10">
            <input type='text' className="form-control" placeholder='Enter your Last Name'
              onChange={e => setValue({ ...value, lastname: e.target.value })} />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">DATE OF BIRTH :</label>
          <div className="col-sm-10">
            <input type="date" className="form-control" 
              onChange={e => setValue({ ...value, birth: e.target.value })} />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">GENDER :</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder='Enter your gender'
            onChange={e => setValue({...value,gender: e.target.value})}/> 
            </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">AGE :</label>
          <div className="col-sm-10">
            <input type='text' className="form-control" placeholder='Enter your Age'
              onChange={e => setValue({ ...value, age: e.target.value })} />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">PHONE NUMBER :</label>
          <div className="col-sm-10">
            <input type="tel" className="form-control" placeholder='Enter your Number'
              onChange={e => setValue({ ...value, phonenumber: e.target.value })} />
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">EMAIL :</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" placeholder='Enter your Email'
              onChange={e => setValue({ ...value, email: e.target.value })} />
          </div>
        </div>




        {/* <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */} <hr />
 <button  class="btn btn-success w-25">Submit</button>       
  <Link to="/home" className="btn btn-primary ms-3 w-25">Back</Link>

      </form>
    </div>
    </div>
  )
}

export default Create