import Button from "@mui/material/Button";
import styles from "./header-routes.module.css";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FolderIcon from "@mui/icons-material/Folder";
import { NavLink } from "react-router-dom";

const HeaderRoutes = () => {
  return (
    <div>
      <NavLink className={styles["header-button"]} to="/Portfolio">
        <Button className={styles["header-button"]} variant="contained">
          <FolderIcon className={styles["route-button"]} /> Portfolio
        </Button>
      </NavLink>
      <NavLink className={styles["header-button"]} to="/about-me">
        <Button className={styles["header-button"]} variant="contained">
          <AccountCircleIcon className={styles["route-button"]} /> About Me
        </Button>
      </NavLink>
      <NavLink className={styles["header-button"]} to="/contact">
        <Button className={styles["header-button"]} variant="contained">
          <ConnectWithoutContactIcon className={styles["route-button"]} />{" "}
          Contact Me
        </Button>
      </NavLink>
    </div>
  );
};

export default HeaderRoutes;
