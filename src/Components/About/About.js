import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl">Thank you for visiting our site!</h1>
      <div className="flex justify-evenly my-10">
      <div>
          <h3 className="rounded-full bg-blue-300 px-8 py-2">Join Us</h3>          
          <div className="text-left">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          </div>
        </div>
        <div>
          <h3 className="rounded-full bg-green-300 px-8 py-2">Our Office</h3>
          <address className="text-left">
            <p>Mirpur-11</p>
            <p>Dhaka, Bangladesh</p>
          </address>
        </div>        
        <div>
          <h3 className="rounded-full bg-orange-300 px-8 py-2">Contact us</h3>
          <p>+8801711223344</p>
          <p>+8801713563344</p>
        </div>
      </div>
    </div>
  );
};

export default About;
