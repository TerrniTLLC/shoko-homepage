import React, { useRef } from "react";
import emailjs from "@emailjs/browser"

import "./form.css";
import { useToast } from "@chakra-ui/react";



export const FormCustom = () => {

  const form = useRef();
  const toast = useToast()
  const toastIdRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_djoteqs', 'template_at09pjo', form.current, '0SFZsqlAF3DAgAqfz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()

    toastIdRef.current = toast({ title: 'Thank You!', status: "success", isClosable: true })
  };

  return (
    <div className="form__container">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input className="input__name" placeholder='Name' type="text" name="user_name" />
        <input className="input__email" placeholder="E-Mail" type="email" name="user_email" />
        <textarea className="input__message" placeholder="Your message" name="message" />
        <button className="form__button" onSubmit={sendEmail}>Submit</button>
      </form>
    </div>
  );
};


export default FormCustom
