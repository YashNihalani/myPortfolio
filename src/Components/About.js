import React, { Component } from "react";
import resume from "../assets/resume.pdf";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            {/* <img
              className="profile-pic"
              src={profilepic}
              alt="Alex Bangau Profile Pic"
            /> */}
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              I am currently a 4th year student of thapar institute of
              engineering and technology. i have strong hold on solving problems
              related to data structures and algorithm. Apart from coursework, i
              have explored fields like competitive programming , web
              development and machine learning.
              <br />
              <br />I am passionate about ideating, conceptualizing and
              producing consumer-centric as well as technology-enabled products
              from level zero. Open for exploring exciting full-stack
              development opportunities in startups as well as companies with
              scale.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  {/* <span>{phone}</span><br /> */}
                  <span>
                    <a
                      href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}
                    >
                      {email}
                    </a>
                  </span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
