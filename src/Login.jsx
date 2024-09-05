import React, { useEffect, useState } from 'react'
import './App.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  const [users, setUser] = useState([]);
  const [uemail, setEmail] = useState([]);
  const [upassword, setPassword] = useState([]);
  const [Error, setError] = useState([]);

  const navigator=useNavigate();
  const mail="sijoafj";
  const pass="dije";
  useEffect(() => {
    axios.get('http://localhost:3001/Staff')
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);


  const handleSubmit=(e)=>{
    e.preventDefault();
    const use= users.find(
      (use)=>use.email===uemail && use.password===upassword
    );
      if(use===""){
        alert("Enter the details")
      }
      if(use){
        //console.log(use);
        navigator(`/home`);
      }
      else{
      //(setError);
       alert("No valid email and password");
      }
   
  };

  return (
    <div id='login'>
      <section class=" py-3 py-md-5">
        <div class="container" id='container' >
          <div class="row justify-content-center" >
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 ">
              <div class="card border border-light-subtle rounded-3 " id='box'>
                <div class="card-body p-3 p-md-4 p-xl-5 ">
                  <div class="text-center mb-3 text-light">
                    <h2>STAFF LOGIN</h2>
                  </div>
                  <h4 class="fs-6 fw-normal text-center text-light  mb-4">Sign in to your account</h4>
                  <form action="#!" onSubmit={handleSubmit} >
                    <div class="row gy-2 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" name="email"  placeholder="name@example.com" required
                          onChange={(e)=> setEmail(e.target.value)} />
                          <label for="email">Email</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" name="password"  placeholder="Password" required
                          onChange={(e)=> setPassword(e.target.value)} />
                          <label for="password" class="form-label">Password</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-flex gap-2 justify-content-between">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" name="rememberMe" id="rememberMe" />
                            <label class="form-check-label text-light" for="rememberMe">
                              Keep me logged in
                            </label>
                            <div>
                              <p className='text-light'>{Error}</p>
                            </div>
                          </div>
                          <a href="#!" class="link-primary text-decoration-none">Forgot password?</a>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid my-3">
                          <button class="btn btn-primary btn-lg" type="submit">Log in</button>
                        </div>
                      </div>
                      <div class="col-12">
                        <p class="m-0 text-light text-center">Don't have an account? <Link to="/signin" class="link-primary text-decoration-none">Sign up</Link></p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login