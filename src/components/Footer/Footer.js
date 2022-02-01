import styles from "./footer.module.css";
import { Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import styles from "./header.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {/*  <div className = {styles['header-box']}> */}

      <Typography variant="p1" component="h2">
        Footer
      </Typography>

      <div className = {styles.links}>
        <a href="https://linkedin.com"> Linked In</a>
        <a href="https://github.com/vndrewhk/"> GitHub</a>
      </div>
    </div>
  );
};

export default Footer;
