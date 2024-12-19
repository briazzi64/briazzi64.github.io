import { Box } from "@mui/material";
import oneadvisor from "../assets/images/1advisor.png";
import smartlink from "../assets/images/smartlink.png";
import vs from "../assets/images/vs.png";
import ws from "../assets/images/ws.jpg";
import ProjectCard from "./ProjectCard";
import "../assets/styles/Projects.scss";

export default function Projects() {
  return (
    <Box className="projects-container" id="projects">
      <h1>Professional Projects</h1>
      <Box className="projects-grid">
        <ProjectCard
          imgSrc={oneadvisor}
          link="https://files.1advisor.com/skyview-onboarding-template.mp4"
          title="1Advisor Mobile App and Client Portal"
          description="I built and managed the React Native mobile banking app. This includes creating and managing the CI/CD pipeline for deploying the mobile app to the App Store/Play Store, tracking post-deployment bug reports to recognize and resolve trends among user-reported faults and complaints and implementing E2E tests using Maestro. I also built and managed the React web application for managing the advisor's banking clients."
        />
        <ProjectCard
          imgSrc={smartlink}
          link="https://www.gojo.com/en/Product-Catalog/Dispenser/Smartlink"
          title="Purell SmartLink"
          description="I managed the architecture of the Vue application that displayed a graphs and charts for Purell that tracks employee hand hygiene and washing percentages. I also implemented analytics solutions to track user engagement and problem points to help drive design decisions."
        />
        <ProjectCard
          imgSrc={ws}
          link={
            "https://www.williams-sonoma.com/customer-service/buy-online-pick-up-in-store.html"
          }
          title="Williams Sonoma Buy Online Pickup in Store"
          description="I helped create 'Find a Store Near You' and 'Buy Online Pickup In Store' functionality for Williams Sonoma Inc and all its affiliated brands. I also assisted in the E2E testing using Playwright."
        />
        <ProjectCard
          imgSrc={vs}
          link="https://www.victoriassecret.com/us/"
          title="Victoria's Secret Ecommerce Website"
          description="I created the foundations for a design system that was used to creat web based solutions for the Victoria Secret E-commerce website all while meeting WCAG standards. While working at Victoria's Secret I managed 6 developers who were stationed in both Bangalore, India and Columbus, Ohio and we were in charge of the product pages and adding items to your bag."
        />
      </Box>
    </Box>
  );
}
