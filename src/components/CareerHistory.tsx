import "@fortawesome/free-regular-svg-icons";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/CareerHistory.scss";
import { Box } from "@mui/material";
import CareerHistoryItem from "./CareerHistoryItem";

function Timeline() {
  return (
    <Box id="history">
      <Box className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <CareerHistoryItem
            date="July 2023 - Current"
            title="Mobile Application Developer"
            company="Skyview1"
            descriptions={[
              "Cultivated app design system to streamline application production.",
              "Created and managed the CI/CD pipeline for deploying the mobile app to the App Store/Play Store.",
              "Tracked post-deployment bug reports to recognize and resolve trends among user-reported faults and complaints.",
              "Implemented E2E testing using Maestro to provide code confidence for all deployments.",
              "Built a desktop CMS for managing the app's customers and clients.",
              "Maintained SOC2 Compliance for both the app and website.",
              "Managed a team of three frontend developers.",
            ]}
          />
          <CareerHistoryItem
            date="January 2021 - July 2023"
            title="Senior Software Engineer"
            company="Insight Digital Innovation"
            descriptions={[
              "Managed the architecture of the Vue2 / Vue3 application and led the refactoring effort to transition the project from Vue 2 to Vue 3.",
              "Created full stack graphing and charting solution for Purell that tracks employee hand hygiene and washing percentages.",
              "Implemented analytics solution to track user engagement and problem points to help drive design decisions.",
              "Created APIs using C# to gather and return data for the Frontend application to ingest.",
              "Managed design system and implemented best practices for the modernization of the Frontend application.",
              "Led four design sessions to solicit feedback from users, provide a demo of upcoming features, and improve user engagement.",
            ]}
          />
          <CareerHistoryItem
            date="August 2020 - January 2021"
            title="Developer II"
            company="Nexient"
            descriptions={[
              "Created Frontend Web Applications using Vue, JavaScript, CSS, and HTML.",
              "Helped create 'Find a Store Near You' and 'Buy Online Pickup In Store' functionality for Williams Sonoma Inc and all its affiliated brands.",
              "Participated in end-to-end test-driven development.",
              "Practiced Agile development by estimating and refining 5 features that eventually were released to the users.",
            ]}
          />
          <CareerHistoryItem
            date="December 2014 - January 2020"
            title="Senior JavaScript Developer"
            company="Victoria's Secret"
            descriptions={[
              "Created web based solutions for the Victoria Secret E-commerce website using proprietary JavaScript framework, HTML5, and CSS all while meeting WCAG standards.",
              "Began work on transitioning from a proprietary JavaScript framework to React.",
              "Led a team of six developers with members in Bangalore, India and Columbus, Ohio.",
              "Practiced Agile development and estimated and planned sprint activities for the team in order to ensure deadlines were met.",
              "Created the foundation of a design system used on the Victoria's Secret Website.",
              "Created and trained users on collaboration tools and international development partners.",
            ]}
          />
          <CareerHistoryItem
            date="September 2013 - November 2014"
            title="Front End Web Developer"
            company="Epstein Design Partners"
            descriptions={[
              "Created six responsive and two mobile sites using custom Twitter Bootstrap template in WordPress.",
              "Created customized PHP solutions on individual client basis.",
              "Conducted internal training with the team about the best practices for responsive web design.",
              "Helped create the user interfaces for online web applications.",
              "Managed the email program for numerous clients and their advertising needs",
            ]}
          />
          <CareerHistoryItem
            date="September 2012 - September 2013"
            title="Front End Web Developer"
            company="Emerge Inc"
            descriptions={[
              "Created five responsive websites and three desktop websites using the latest HTML, CSS, and JavaScript practices.",
              "Helped create a proprietary, responsive CMS over three months.",
              "Managed the content and updates for four clients.",
              "Managed the design and user interface for the mobile applications.",
            ]}
          />
        </VerticalTimeline>
      </Box>
    </Box>
  );
}

export default Timeline;
