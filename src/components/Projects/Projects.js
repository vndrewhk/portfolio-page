import { Card } from "@mui/material";
import styles from "./Projects.module.css";
const Projects = () => {
  const projectRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className={styles["card-box"]}>
      <Card
        className={styles.card}
        onClick={projectRedirect.bind(null, "http://localhost:3000")}
      >
        Personal Website
      </Card>

      <Card className={styles.card}>Discord Bot to display Valorant stats</Card>
      <Card className={styles.card}>
        Website to display League of Legends statistics through webscraping and
        APIs
      </Card>
      <Card className={styles.card}>Project 1</Card>
      <Card className={styles.card}>Project 2</Card>
      <Card className={styles.card}>Project 3</Card>
    </div>
  );
};

export default Projects;
