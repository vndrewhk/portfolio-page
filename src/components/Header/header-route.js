import Button from "@mui/material/Button";
import styles from "./header.module.css";
const HeaderRoutes = () => {
  return (
    <div>
      <Button className={styles["header-button"]} variant="contained">
        Portfolio
      </Button>
      <Button className={styles["header-button"]} variant="contained">
        About Me
      </Button>
      <Button className={styles["header-button"]} variant="contained">
        Contact Me
      </Button>
    </div>
  );
};

export default HeaderRoutes;
