import React from "react";

import "./contact.css";

import Logo from "../../images/logo_white.png";

import FormCustom from "../atoms/form/form.jsx";

import Footer from "../footer/footer.jsx";

const Contact = () => {
  return (
    <div className="contact__container">
      <div className="contact__content">
        <img src={Logo} alt="logo" className="contact__logo" />
        <h3 className="contact__heading">Contact Us</h3>
        <FormCustom />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
