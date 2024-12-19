import { Box } from "@mui/material";

type ProjectCardProps = {
  imgSrc: string;
  link: string;
  title: string;
  description: string;
};

export default function ProjectCard({
  imgSrc,
  link,
  title,
  description,
}: ProjectCardProps) {
  return (
    <Box className="project">
      <Box className="project-image">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={imgSrc} className="zoom" alt="thumbnail" />
        </a>
      </Box>
      <a href={link} target="_blank" rel="noreferrer">
        <h2>{title}</h2>
      </a>
      <p>{description}</p>
    </Box>
  );
}
