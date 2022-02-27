import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container tab" id="contact">
        <div class="text-center text-uppercase mt-5">
          <h3>My Contact Details</h3>
        </div>

        <div class="c-box-container">
          <div class="client-box">
            <div className="conatainer">
              {/* <i className="fas fa-phone"></i> */}
              <h3>Phone Number</h3>
              <p>0430224546</p>
            </div>
          </div>
          <div class="client-box">
            <div className="conatainer">
              {/* <i className="fas fa-envelope"></i> */}
              <h3>Email Address</h3>
              <p>ajanta744@gmail.com</p>
            </div>
          </div>
          <div class="client-box">
            <div className="conatainer">
              {/* <i className="fas fa-map-marker-alt"></i> */}
              <h3> Linkdin Account</h3>
              
          <a href="https://www.linkedin.com/in/4546/">Visit My Linkedin Profile</a>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Contact;
