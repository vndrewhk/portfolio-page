import Button from "@mui/material/Button";
import styles from "./header-routes.module.css";

import { NavLink } from "react-router-dom";

const HeaderRoutes = () => {
  return (
    <div>
      <NavLink to="/Portfolio">
        <Button className={styles["header-button"]} variant="contained">
          Portfolio
        </Button>
      </NavLink>
      <NavLink to="/about-me">
        <Button className={styles["header-button"]} variant="contained">
          About Me
        </Button>
      </NavLink>
      <NavLink to="contact">
        <Button className={styles["header-button"]} variant="contained">
          Contact Me
        </Button>
      </NavLink>
    </div>
  );
};

export default HeaderRoutes;
