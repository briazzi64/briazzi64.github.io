import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function ContactLinks() {
  const linkProps = { target: "_blank", rel: "noreferrer" };

  return (
    <>
      <a
        href="https://www.linkedin.com/in/brian-riazzi-a7592222/"
        {...linkProps}
      >
        <LinkedInIcon />
      </a>
      <a href="https://github.com/briazzi64" {...linkProps}>
        <GitHubIcon />
      </a>
      <a href="mailto:brianriazzi87@gmail.com" {...linkProps}>
        <EmailIcon />
      </a>
      <a href="tel:+9374168369" {...linkProps}>
        <PhoneIcon />
      </a>
    </>
  );
}
