import "./styles/Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactCard from "./helper-pages/ContactCard";

const contactItems = [
  {
    icon: <LinkedInIcon style={{ fontSize: "5rem" }} />,
    title: "Message me at LinkedIn",
    link: "https://www.linkedin.com/in/mark-agluba-10a600237/",
  },
  {
    icon: <GitHubIcon style={{ fontSize: "5rem" }} />,
    title: "Check my Github Profile!",
    link: "https://github.com/MarkProjs",
  },
  {
    icon: <EmailIcon style={{ fontSize: "5rem" }} />,
    title: "Email me to drop some knowledge!",
    link: "aglubamark@yahoo.ca",
  },
  {
    icon: <ContactPhoneIcon style={{ fontSize: "5rem" }} />,
    title: "Text or call me!",
    link: "+1 514-570-0827",
  },
];

function Contact() {
  return (
    <div className="contact">
      <div className="intro">
        <h1>Let's get connected!</h1>
        <p> Message or email me and let's get in touch!</p>
      </div>
      <div className="contactList">
        {contactItems.map((item, index) => (
          <ContactCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
