import HeaderRoutes from "./header-route";
import { Typography } from "@mui/material";
import styles from "./header.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      {/*  <div className = {styles['header-box']}> */}
      <NavLink to ="/" style={{ textDecoration: 'none' }}>
      <Typography variant="h3" component="h2" className = {styles.logo}>
        Andrew 
      </Typography></NavLink>
      <HeaderRoutes></HeaderRoutes>
    </div>
  );
};

export default Header;
