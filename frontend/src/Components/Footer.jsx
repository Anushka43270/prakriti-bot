import "../Styles/Footer.css";
import Logo from "../Assets/Logo.png";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
              <a href="#">
                <img src={Logo} width={200} alt="Website's Logo" />
              </a>
            </p>
            <p className="ft-description">
              Your holistic journey to Ayurvedic well-being. Harness the wisdom
              of Ayurveda with our chatbot, designed to personalize your path to
              health. Discover your Prakriti, balance your doshas, and embrace a
              harmonious life.
            </p>
          </div>
        </div>

        <div className="ft-copyright">
          <p>.</p>
        </div>
        <div className="ft-developlist flex flex-row justify-center items-center gap-1">
          .{" "}
          <a href={"https://github.com/PrathameshDhande22"}>
            <FaGithub />
          </a>
          .{" "}
          <a href={"https://github.com/goutamthakur"}>
            <FaGithub />
          </a>
          .
        </div>
      </div>
    </div>
  );
}

export default Footer;
