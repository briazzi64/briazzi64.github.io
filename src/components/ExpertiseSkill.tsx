import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Chip } from "@mui/material";

type ExpertiseSkillProps = {
  icons: IconDefinition[];
  title: string;
  description: string;
  labels: string[];
};

export default function ExpertiseSkill({
  icons,
  title,
  description,
  labels,
}: ExpertiseSkillProps) {
  return (
    <Box className="skill">
      {icons.map((icon, index) => (
        <FontAwesomeIcon
          key={`icon${index}`}
          icon={icon}
          size="3x"
          style={{ marginRight: "10px" }}
        />
      ))}
      <h3>{title}</h3>
      <p>{description}</p>
      <Box className="flex-chips">
        {labels.map((label, index) => (
          <Chip key={index} className="chip" label={label} />
        ))}
      </Box>
    </Box>
  );
}
