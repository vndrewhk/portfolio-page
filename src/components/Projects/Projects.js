import { Card } from "@mui/material";
import styles from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={styles["card-box"]}>

      {/* variant	'contained' */}
      {/* | 'outlined' */}
      {/* | 'text' */}
      {/* | string */}

      <Card className={styles.card}>Project 1</Card>
      <Card className={styles.card}>Project 2</Card>
      <Card className={styles.card}>Project 3</Card>
    </div>
  );
};

export default Projects;
