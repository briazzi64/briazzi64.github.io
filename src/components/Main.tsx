import me from "../assets/images/me.jpg";
import ContactLinks from "./ContactLinks";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={me} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <ContactLinks />
          </div>
          <h1>Brian Riazzi</h1>
          <p>Front End Engineer</p>

          <div className="mobile_social_icons">
            <ContactLinks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
