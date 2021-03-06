import React from "react";
import "../index.css";

const Login = () => {
  return (
    <div className='Login'>
      <div className='container'>
        <form action='/authenticate' method='post' className='loginForm'>
          <h2 className='text-center'>Sign in</h2>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              name='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Password</label>
            <input
              type='password'
              name='password'
              className='form-control'
              id='exampleInputPassword1'
              placeholder='Password'
            />
          </div>
          <div className='but'>
            <button type='submit' className='btn btn-primary' value='Submit'>
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
