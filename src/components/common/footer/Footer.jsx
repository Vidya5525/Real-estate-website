import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <span><h1>Do You Have Questions?</h1>
          <p>We'll help you to grow your career and growth.</p></span>
          <button className='btn5'>Contact Us Today</button>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box '>
            <img src='../images/logo-light.png' alt='Logo' />
            <h2>Do You Need Help With Anything?</h2>
            <p>Receive updates, hot deals, tutorials, and discounts sent straight to your inbox every month</p>
            <div className='input'>
              <input type='text' placeholder='Email Address' />
              <button>Subscribe</button>
            </div>
          </div>

          {footer.map((val, index) => (
            <div className='box' key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((item, idx) => (
                  <li key={idx}>{item.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      <div className='legal'>
        <span>© 2024 RentUP. Developed  By Vidyanand.</span>
      </div>
    </>
  )
}

export default Footer
