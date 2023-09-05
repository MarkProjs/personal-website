import "./assets/Contact.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactCard from "./helper-pages/ContactCard";

const contactItems = [
  {
    icon: <LinkedInIcon />,
    title: "LinkedIn",
    desc: "https://www.linkedin.com/in/mark-agluba-10a600237/",
  },
  {
    icon: <GitHubIcon />,
    title: "GitHub",
    desc: "https://github.com/MarkProjs",
  },
  {
    icon: <EmailIcon />,
    title: "Email",
    desc: "aglubamark@yahoo.ca",
  },
  {
    icon: <ContactPhoneIcon />,
    title: "Phone Number",
    desc: "+1 514-570-0827",
  },
];

function Contact() {
  return (
    <div className="contact">
      <h1>Let's get connected!</h1>
      <p> Message or email me and let us get in touch!</p>
      <div className="contactList">
        {contactItems.map((item, index) => (
          <ContactCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
