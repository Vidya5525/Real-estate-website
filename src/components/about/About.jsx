import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back  cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              At Rent Up, we believe that finding the perfect rental property is
              more than just a search; it’s about discovering a place where you
              can truly feel at home. Our mission is to connect you with the
              finest rental properties that match your lifestyle and needs,
              providing a seamless and enjoyable experience from start to
              finish. Whether you're looking for a cozy apartment in the city or
              a spacious house in the suburbs, Rent Up is here to guide you
              every step of the way. We are committed to making your rental
              journey as smooth and rewarding as possible, helping you turn
              every new place into a cherished home."
            </p>
            <p>
              At Rent Up, we are dedicated to setting new standards of
              excellence in the rental market. Our platform is designed with the
              user in mind, offering a comprehensive database of rental
              listings, advanced search tools, and detailed property
              descriptions. We work tirelessly to ensure that our listings are
              current and accurate, so you can trust that what you see is what
              you get. Our team of experienced professionals is always on hand
              to provide personalized assistance, answer your questions, and
              help you make informed decisions. We strive to deliver exceptional
              service, making your rental experience as stress-free and
              enjoyable as possible."
            </p>
            <p>
              Choosing Rent Up means choosing a partner who is committed to your
              satisfaction. We understand that finding the right rental property
              can be a daunting task, which is why we offer a range of resources
              and support to help you every step of the way. Our user-friendly
              website makes it easy to search for properties, schedule viewings,
              and communicate with landlords. We pride ourselves on our
              transparency, integrity, and dedication to providing the best
              possible experience for our users. At Rent Up, we are not just
              about finding you a place to live; we are about helping you find a
              place where you can thrive."
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
