import React from 'react'
import './signup.css';

const SignUp = () => {
  return (
    <>

    <form class="form">
      <h2>SIGN UP</h2>
      <p type="Name:"><input id="Name"
        type="text"
        placeholder="Name"
        ></input></p>
      <p type="Email:"><input type="text"
            placeholder="Email"
            id="Email"
            ></input></p>
      <p type="Phone:"><input type="text"
            placeholder="Phone"
            id="Phone"
            ></input></p> 
            <p type="Password:"><input type="text"
            placeholder="Password"
            id="Password"
            ></input></p> 
      
      <button >Sign Up Now</button>
    </form>
  </>
  )
}

export default SignUp