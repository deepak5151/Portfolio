import "./about.css";
import Certificate from "../../img/certificate.jpg";
import Internship from "../../img/internship.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I am a working professional having <strong>more than 1 year</strong> of experience in <strong>Accenture</strong> as a Full Stack Developer. I have completed my Bachelors of Engineering in 2021 from Chandigarh University.
          Want to know more? Let's connect on <a href="https://www.linkedin.com/in/deepak-kapoor-1905/" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
        <div className="a-award">
          <img src={Certificate} alt="" className="a-award-img" />
          <img src={Internship} alt="" className="a-award-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
