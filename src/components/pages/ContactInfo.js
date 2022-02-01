import { Typography } from "@mui/material";
import styles from "./contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import WebIcon from "@mui/icons-material/Web";
import ContactsIcon from "@mui/icons-material/Contacts";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactInfo = () => {
  return (
    <div className={styles["contact-info-box"]}>
      <Typography
        variant="p1"
        component="h2"
        className={styles["contact-info-title"]}
      >
        <span className={styles.icon}>
          <ContactsIcon />
        </span>{" "}
        <span>Contact Info</span>
      </Typography>

{/* Probably better to use columns and align it in a row rather than what I did here... */}
      <div className={styles["contact-info"]}>
        <div className={styles["contact-info-divider"]}>
          <Typography variant="p1" component="p">
            <span className={styles.icon}>
              <EmailIcon />
            </span>
            <span className={styles["contact-info-text"]}>
              andrewhkma@gmail.com
            </span>
          </Typography>
          <Typography variant="p1" component="p">
            <span className={styles.icon}>
              <WebIcon />
            </span>
            <a href="andrewhkma.com" className={styles["contact-info-text"]}>
              andrewhkma.com
            </a>
          </Typography>
        </div>
        <div className={styles["contact-info-divider"]}>
          <Typography variant="p1" component="p">
            <span className={styles.icon}>
              <PhoneIphoneIcon />
            </span>
            <span className={styles["contact-info-text"]}>(647)-XXX-XXXX</span>
          </Typography>
          <Typography variant="p1" component="p">
            <span className={styles.icon}>
              <LinkedInIcon />
            </span>
            <a
              href="https://www.linkedin.com/in/andrew-m-394714136/"
              className={styles["contact-info-text"]}
            >
              LinkedIn
            </a>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
