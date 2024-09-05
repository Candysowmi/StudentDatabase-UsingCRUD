import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css'


const Home = () => {
  const [data, setDate] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/Student')
      .then(res => setDate(res.data))
      .catch(err => console.log(err));

  }, [])

  const handeldelete=(id)=>{
    const confirm=window.confirm("Would you like to delete?");
    if(confirm){
      axios.delete('http://localhost:3000/Student/'+id)
      .then(res =>{
         location.reload();
      }).catch (err=> console.log(err));
    }

  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-dark p-5' id='fulldiv'>
    <h1 id='h1'>List of Student  Details</h1>
      <div className='w-100 rounded bg-dark border shadow m-5 px-5' id='nextdiv'>
      
        <div className='d-flex justify-content-end'> 
          <Link to="/create" className='btn btn-success ' id='add' >Add +</Link> 
        </div>
        <table className="table table-bordered table-striped " id='table' >
          <thead>
            <tr className='text-center'>
              <th id='thead'>ID</th>
              <th id='thead'>FIRST NAME</th>
              <th id='thead'>LAST NAME</th>
              <th id='thead'>DATE OF BIRTH</th>
              <th id='thead'>GENDER</th>
              <th id='thead'>AGE</th>
              <th id='thead'>PHONE NUMBER</th>
              <th id='thead'>EMAIL</th>
              <th id='thead'>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{d.name}</td>
                  <td>{d.lastname}</td>
                  <td>{d.birth}</td>
                  <td>{d.gender}</td>
                  <td>{d.age}</td>
                  <td>{d.phonenumber}</td>
                  <td>{d.email}</td>
                  <td className='d-flex justify-content-around'>
                    <Link to={`/read/${d.id}`} className='btn btn-sm btn-info me-2'>Read</Link >
                    <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary me-2' >Edit</Link>
                    <button onClick={e => { handeldelete(d.id) }} className='btn btn-sm btn-danger '>Delete</button>
                  </td>

                </tr>

              ))
            }


          </tbody>
        </table>

      </div>
    </div>
  )
 
}

export default Home 