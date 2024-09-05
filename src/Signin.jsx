import React, {  useState } from 'react'
import './App.css'
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios'



const Signin = () => {
  const[Confirm,setConfirm]=useState("");
  const [value, setValue] = useState({
    name: '',
    email: '',
    password:'',
   
  })

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if(value.password===Confirm){
    axios.post('http://localhost:3001/Staff', value)
      .then(res => {
        // console.log(res);
        navigate('/')
      })
    }
    else{
      alert("pls check you password");
    }
  }


  return (
    <div id='login'>
    <section class=" py-3 py-md-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div class="card border border-light-subtle rounded-3 shadow-sm"id='box'>
              <div class="card-body p-3 p-md-4 p-xl-5">
                <div class="text-center mb-3 text-light">
                  <h2>Sign up</h2>
                </div>
                <h4 class="fs-6 fw-normal text-center text-light mb-4">Enter your details to register</h4>
                <form onSubmit={handleSubmit}>
                  <div class="row gy-2 overflow-hidden">
                    <div class="col-12">
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="Name" id="Name" placeholder="Name" required
                         onChange={e => setValue({ ...value, name: e.target.value })}  />
                        <label for="firstName" class="form-label"> Name</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating mb-3">
                        <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required 
                         onChange={e => setValue({ ...value, email: e.target.value })} />
                        <label for="email" class="form-label">Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating mb-3">
                        <input type="password" class="form-control" name="password" id="password" placeholder="Password" required
                         onChange={e => setValue({ ...value, password: e.target.value })}  />
                        <label class="form-label">Password</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating mb-3">
                        <input type="password" class="form-control" name="Confirm_password" id="Confirm_password" placeholder="Confirm Password" required 
                          onChange={(e)=>setConfirm(e.target.value)} />
                        <label class="form-label">Confirm Password</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                        <label class="form-check-label text-light" for="iAgree">
                          I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="d-grid my-3">
                        <button class="btn btn-primary btn-lg" type="submit">Sign up</button>
                      </div>
                    </div>
                    <div class="col-12">
                      <p class="m-0 text-light text-center">Already have an account? <Link to="/" class="link-primary text-decoration-none">Login</Link></p>
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

export default Signin