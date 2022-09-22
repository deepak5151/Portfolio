import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    formRef.current.oninput = () => {
      setErrorMessage("");
      setDone(false);
    };
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();

    let name = formRef.current.elements[0].value;
    let subject = formRef.current.elements[1].value;
    let email = formRef.current.elements[2].value;
    let message = formRef.current.elements[3].value;
    if (!name || !subject || !email || !message) {
      setErrorMessage("Please enter all fields");
      return;
    }
    emailjs
      .sendForm(
        "gmail",
        "portfolio",
        formRef.current,
        "user_tVyNTPsYAy7M8Ffvjgypc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrorMessage("");
          setDone(true);
          formRef.current.elements[0].value = null;
          formRef.current.elements[1].value = null;
          formRef.current.elements[2].value = null;
          formRef.current.elements[3].value = null;
        },
        (error) => {
          console.log(error.text);
          setErrorMessage(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your ideas</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <a href="tel:+919646445151" className="c-info-link">+91 9646445151</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a href="mailto:deepakkapoor1905@gmail.com" className="c-info-link">deepakkapoor1905@gmail</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Gurugram, Haryana
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to hire me?</b> Get in touch. Currently looking for a change.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" />
            <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" />
            <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
            <p className="error">{errorMessage}</p><br />
            {done && <p className="success">"Thank you for reaching out to me! If I found something interesting, you will definitely get a response back soon!"</p>}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
