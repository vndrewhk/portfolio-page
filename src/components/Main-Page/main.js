import { Button, Card } from "@mui/material";
import Projects from "../Projects/Projects";
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

     {/* <Projects></Projects> */}
    </div>
  );
};

export default Main;
