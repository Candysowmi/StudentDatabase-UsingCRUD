import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


const Update = () => {
 
  const {id}=useParams();

  const [value, setValue] = useState({
    name: '',
    lastname: '',
    birth: '',
    gender: '',
    age: '',
    phonenumber: '',
    email: ''
  })

  useEffect(()=>{
      axios.get('http://localhost:3000/Student/' + id)
      .then(res => setValue(res.data))
      .catch(err => console.log(err));

  }, [])

  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('http://localhost:3000/Student/' +id, value)
      .then(res => {
        console.log(res);
        navigate('/home')
      })
      .catch(err => console.log(err));

  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-dark'>
      <div className='w-75 border bg-shadow px-5 pt-3 pb-5 rounded bg-light'>
      <h1>Update The Student Details</h1> <hr />
      <form onSubmit={handleUpdate} >
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"> <strong> FIRST NAME :</strong> </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder='Enter your First Name' value={value.name} 
            onChange={e => setValue({ ...value, name: e.target.value })}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"><strong>LAST NAME :</strong> </label>
          <div className="col-sm-10">
            <input type='text' className="form-control" placeholder='Enter your Last Name' value={value.lastname} 
            onChange={e => setValue({ ...value, lastname: e.target.value })}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"><strong>DATE OF BIRTH :</strong> </label>
          <div className="col-sm-10">
            <input type="date" className="form-control" value={value.birth}  
            onChange={e => setValue({ ...value, birth: e.target.value })}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"><strong>GENDER :</strong> </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" placeholder='Enter your gender' value={value.gender}
            onChange={e => setValue({ ...value, gender: e.target.value })}/> 
            </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"><strong>AGE :</strong> </label>
          <div className="col-sm-10">
            <input type='text' className="form-control" placeholder='Enter your Age' value={value.age}
            onChange={e => setValue({ ...value, age: e.target.value })}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"><strong >PHONE NUMBER :</strong> </label>
          <div className="col-sm-10">
            <input type="tel" className="form-control" placeholder='Enter your Number' value={value.phonenumber}
            onChange={e => setValue({ ...value, phonenumber: e.target.value })}/>
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"><strong >EMAIL :</strong> </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" placeholder='Enter your Email' value={value.email}
            onChange={e => setValue({ ...value, email: e.target.value })} />
          </div>
        </div>




        {/* <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */} <hr />
        <button  class="btn btn-success w-25">Update</button>
        <Link to="/home" className="btn btn-primary ms-3 w-25">Back</Link>

      </form>
    </div>
    </div>
  )
}

export default Update