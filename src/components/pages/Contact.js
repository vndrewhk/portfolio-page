import styles from "./contact.module.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
const Contact = () => {
  return (
    <div className={styles.main}>
      <ContactInfo></ContactInfo>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
