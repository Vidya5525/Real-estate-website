import React from "react";
import './signIn.css'

export default function signIn() {
    
      

    return (
      <section className="signin">
        <div className="signin-container">
          <h1>Sign In</h1>
          <form >
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
             placeholder="Enter Your Email"
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
             
            />
            <button type="submit" className="btn">Sign In</button>
          </form>
        </div>
      </section>
    );
}
