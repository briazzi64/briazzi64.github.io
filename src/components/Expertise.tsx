import "@fortawesome/free-regular-svg-icons";
import ExpertiseSkill from "./ExpertiseSkill";
import { faComputer, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faAndroid,
  faApple,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { frontendLabels, reactNativeLabels } from "../constants/expertise";
import "../assets/styles/Expertise.scss";

export default function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <ExpertiseSkill
            icons={[faMobileAlt, faComputer]}
            title="Front End Web Development"
            description="I have built a diverse portfolio of web applications from scratch
              using modern technologies such as React, Vue, and C#. I have a
              strong proficiency in front end development and can even help out
              assist on the back end side as well!"
            labels={frontendLabels}
          />
          <ExpertiseSkill
            icons={[faApple, faAndroid]}
            title="React Native App Development"
            description="I have built and managed React Native apps that are used by
              thousands of users in the United States. That includes building
              and deploying the code to App Stores with Expo Application
              Services (EAS) and managing a CI/CD pipeline that runs Maestro E2E
              tests to ensure code quality."
            labels={reactNativeLabels}
          />
          <ExpertiseSkill
            icons={[faPython]}
            title="something"
            description="something"
            labels={[]}
          />
        </div>
      </div>
    </div>
  );
}
