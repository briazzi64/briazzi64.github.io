import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

type CareerHistoryItemProps = {
  date: string;
  title: string;
  company: string;
  descriptions: string[];
};

export default function CareerHistoryItem({
  date,
  title,
  company,
  descriptions,
}: CareerHistoryItemProps) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
      icon={<FontAwesomeIcon icon={faBriefcase} />}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{company}</h4>
      <ul>
        {descriptions.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}
