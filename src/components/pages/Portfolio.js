import { Typography } from "@mui/material";
import Projects from "../Projects/Projects";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.main}>
      <div className={styles["info-box"]}>
        <Typography variant="p1" component="h1" className={styles["info-header"]}>
          Personal Projects
        </Typography>
        <Typography variant="p1" component="p" className={styles["info-paragraph"]}>
          A collection of the projects I've worked on in the past. Click on them
          to visit a live demo or view the source code!
        </Typography>
      </div>

      <Projects></Projects>
    </div>
  );
};

export default Portfolio;
