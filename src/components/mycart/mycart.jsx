import React from 'react'
import './mycart.css'
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/mycart.jpg";


export default function () {
  return (
    <>
    <section className="mycart">
        <Back className="bg-img"  cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading title="Your Cart" subtitle="Review and manage your selected properties" />
            <div className="cart-items">
              {/* Replace with dynamic cart items */}
              <div className="cart-item">
                <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Property" />
                <div className="item-details">
                  <h3>Cozy Apartment</h3>
                  <p>Location: City Center</p>
                  <p>Price: Rs. 1200/month</p>
                  <button className="btn2">Remove</button>
                </div>
              </div>
              <div className="cart-item">
                <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Property" />
                <div className="item-details">
                  <h3>Spacious House</h3>
                  <p>Location: Suburbs</p>
                  <p>Price: Rs. 25000/month</p>
                  <button className="btn2">Remove</button>
                </div>
              </div>
            </div>
            <button className="btn2">Proceed to Checkout</button>
          </div>
        </div>
      </section>
    </>
  )
}
