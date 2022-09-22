import "./intro.css";
import Me from "../../img/me.jpg";
import Github from "../../img/github.png";
import Whatsapp from "../../img/whatsapp.png";
import Instagram from "../../img/instagram.png";
import Leetcode from "../../img/leetcode.png";
import OnlineResume from "../../img/online-resume.png";
import Linkedin from "../../img/linkedin.png";
import Email from "../../img/email.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div className="i-intro">Hello, My name is <h1 className="i-name">Deepak Kapoor</h1></div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Open to Work</div>
              <div className="i-title-item">React.js Developer</div>
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Working Professional</div>
              <div className="i-title-item">Problem Solver</div>
              <div className="i-title-item">Engineer</div>
            </div>
          </div>
          <div className="i-icons">
            <a href="https://www.linkedin.com/in/deepak-kapoor-1905/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="" className="i-icon" /></a>
            <a href="https://github.com/deepak5151" target="_blank" rel="noreferrer"><img src={Github} alt="" className="i-icon" /></a>
            <a href="https://leetcode.com/deepakkapoor/" target="_blank" rel="noreferrer"><img src={Leetcode} alt="" className="i-icon" /></a>
            <a href="https://www.instagram.com/deepakkapooor/" target="_blank" rel="noreferrer"><img src={Instagram} alt="" className="i-icon" /></a>
            <a href="https://drive.google.com/file/d/162z9O2iiNdgyOUxh_vw-3g4DXchkucs4/view?usp=sharing" target="_blank" rel="noreferrer"><img src={OnlineResume} alt="" className="i-icon" /></a>
            <a href="mailto:deepakkapoor1905@gmail.com" target="_blank" rel="noreferrer"><img src={Email} alt="" className="i-icon" /></a>
            <a href="https://wa.me/+919646445151" target="_blank" rel="noreferrer"><img src={Whatsapp} alt="" className="i-icon" /></a>
          </div>
          <p className="i-desc">
            I design and develop Web using React.js<br />
            I have specialization in <strong>Full Stack Development.</strong> These are some of the technologies on which I love to work:<br />
            React.js, Javascript, MongoDB, Express.js, Node.js, Socket.IO, Data Structures and Algorithms
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
