import styles from "./contact.module.css";
import { TextField, Typography, Box } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";


const ContactForm = () => {
  return (
    <div className={styles["contact-info-box"]}>
      <Typography
        variant="p1"
        component="h2"
        className={styles["contact-info-title"]}
      >
        <span className={styles.icon}>
          <DriveFileRenameOutlineIcon />
        </span>
        <span>Contact Me!</span>
      </Typography>

      <Typography
        variant="p1"
        component="h3"
        className={styles["contact-form-message"]}
      >
        Leave a message here and I'll get back to you as soon as possible!
      </Typography>

      <form className={styles["contact-form-field"]}>
        <Box className = {styles['contact-form-info']}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Name" variant="standard" />
          <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="E-mail" variant="standard" />
          <PhoneIphoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Phone"
            variant="standard"
          />
        </Box>
        <TextField
         className={styles['contact-form-textbox']}
          id="outlined-multiline-flexible"
          label="Please leave a message!"
          multiline
          maxRows={10}
        //   value={value}
        //   onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default ContactForm;
