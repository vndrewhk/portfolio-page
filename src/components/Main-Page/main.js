import { Button, Card } from "@mui/material";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.intro}>
        <h1>Andrew Ma</h1>
        <p1 className={styles.paragraph}>
          A Mechanical Engineer turned Front-end Developer. Experienced in
          Javascript, CSS, HTML5, React.js, and Node.js.
        </p1>
      </div>

      {/* variant	'contained' */}
      {/* | 'outlined' */}
      {/* | 'text' */}
      {/* | string */}

      <div className={styles["card-box"]}>
        <Card className={styles.card}>Project 1</Card>
        <Card className={styles.card}>Project 2</Card>
        <Card className={styles.card}>Project 3</Card>
      </div>
    </div>
  );
};

export default Main;
