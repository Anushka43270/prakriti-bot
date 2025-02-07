import AIayurveda from "../Assets/aiayurimg.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={AIayurveda} alt="Ayurveda with AI" className="about-image1" />
      </div>
      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          {
            "Welcome to PRAKRITI BOT, your gateway to the harmonious fusion of ancient Ayurvedic wisdom and modern technology. At Prakriti, we're dedicated to empowering individuals with profound insights into their well-being, health, and constitution. Our journey began with a simple yet powerful question: how can we blend the timeless principles of Ayurveda with the precision of modern machine learning to enhance lives?"
          }
        </p>
        <h4 className="about-text-title">Your Solutions</h4>
        <SolutionStep
          title="Click On Chat Bot"
          description="Locate the Chat with our Ayurvedic Expert button on the homepage and click it."
        />
        <SolutionStep
          title="Start the Conversation"
          description="Once the chat interface opens, initiate a conversation with our AI-powered chatbot by responding to its greetings."
        />
        <SolutionStep
          title="Answer Questions"
          description="The chatbot will ask you a series of questions related to your health, lifestyle, and preferences. Provide honest and detailed responses."
        />
        <SolutionStep
          title="Prakriti Assessment"
          description="After analyzing your responses, the chatbot will determine your unique Ayurvedic Prakriti type (Vata, Pitta, or Kapha)."
        />
        <SolutionStep
          title="Receive Remedies"
          description="You'll receive personalized remedies based on your Prakriti."
        />
      </div>
    </div>
  );
}

export default About;
