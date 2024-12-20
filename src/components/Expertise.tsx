import "@fortawesome/free-regular-svg-icons";
import ExpertiseSkill from "./ExpertiseSkill";
import { faComputer, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faAndroid, faApple, faAws } from "@fortawesome/free-brands-svg-icons";
import {
  devOpsLabels,
  frontendLabels,
  reactNativeLabels,
} from "../constants/expertise";
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
            description="I have a diverse portfolio of web applications
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
              Services (EAS) and managing a CI/CD pipelines that run Maestro E2E
              tests to ensure code quality."
            labels={reactNativeLabels}
          />
          <ExpertiseSkill
            icons={[faAws]}
            title="DevOps & Automation"
            description="Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live."
            labels={devOpsLabels}
          />
        </div>
      </div>
    </div>
  );
}
