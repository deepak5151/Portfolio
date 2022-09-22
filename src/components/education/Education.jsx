import "./education.css";
import Degree from '../../img/provisional.jpg';
import Twelve from '../../img/12th.jpg';
import Tenth from '../../img/10th.jpg';

const Education = () => {
  return (
    <div className="ed">
      <div className="ed-texts">
        <h1 className="ed-title">My education history</h1>
        <p className="ed-desc">
          Want to know more about my qualifications and certifications? <br />
          Let's connect on <a href="https://www.linkedin.com/in/deepak-kapoor-1905/" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
      <div className="ed-list">
        <div className="e">
          <div className="e-browser">
            <div className="e-name">Bachelors in Engineering</div>
          </div>
          <div className="e-desc-section">
            <div className="e-desc">
              <strong>Insititue:</strong> <i>Chandigarh University</i><br /><br />
              <strong>CGPA:</strong> <i>8.71</i><br /><br />
              <strong>Year of Passing:</strong> <i>2021</i><br /><br />
              <strong>Major:</strong> <i>ECE</i>
            </div>
            <div className="e-desc-img">
              <img src={Degree} alt="Bachelors"></img>
            </div>
          </div>
        </div>
        <div className="e">
          <div className="e-browser">
            <div className="e-name">12th</div>
          </div>
          <div className="e-desc-section">
            <div className="e-desc">
              <strong>Insititue:</strong> <i>Colonel Sen. Sec. School</i><br /><br />
              <strong>Percentage:</strong> <i>88.8%</i><br /><br />
              <strong>Year of Passing:</strong> <i>2017</i><br /><br />
              <strong>Major:</strong> <i>PCM</i>
            </div>
            <div className="e-desc-img">
              <img src={Twelve} alt="Bachelors"></img>
            </div>
          </div>
        </div>
        <div className="e">
          <div className="e-browser">
            <div className="e-name">10th</div>
          </div>
          <div className="e-desc-section">
            <div className="e-desc">
              <strong>Insititue:</strong> <i>Colonel Sen. Sec. School</i><br /><br />
              <strong>CGPA:</strong> <i>9.2</i><br /><br />
              <strong>Year of Passing:</strong> <i>2015</i><br /><br />
            </div>
            <div className="e-desc-img">
              <img src={Tenth} alt="Bachelors"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
