import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
  const [data,setDate]= useState([]);
  const {id}=useParams();
  useEffect(()=>{
      axios.get('http://localhost:3000/Student/' + id)
      .then(res => setDate(res.data))
      .catch(err => console.log(err));

  }, [])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-dark'>
      <div className='w-50 border bg-shadow px-5 pt-3 pb-5 rounded bg-light'>
        <h3>Read The Student Details</h3> <hr />
        <div className='mb-2'>
          <strong>Name :{data.name}</strong>
        </div>

        <div className='mb-2'>
          <strong>Last Name :{data.lastname}</strong>
        </div>

        <div className='mb-2'>
          <strong>Date of Birth :{data.birth}</strong>
        </div>

        <div className='mb-2'>
          <strong>Gender :{data.gender}</strong>
        </div>

        <div className='mb-2'>
          <strong>Age :{data.age}</strong>
        </div>

        <div className='mb-2'>
          <strong>Phone Number :{data.phonenumber}</strong>
        </div>

        <div className='mb-2'>
          <strong>Email :{data.email}</strong>
        </div> <hr />
        <Link to={`/update/${id}`} className='btn btn-success w-25'>Edit</Link>
        <Link to="/home" className="btn btn-primary ms-3 w-25">Back</Link>
      </div>

    </div>
  )
}

export default Read