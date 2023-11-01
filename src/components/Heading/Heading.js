import React from "react";
import classes from "./Heading.module.scss";
import Switch from "../Switch/Switch";
import { useTheme } from "../../context/themeContext";
import useMediaQuery from "../../hooks/useMediaQuery";

const Heading = () => {
  const { theme } = useTheme();
  const media = useMediaQuery("only screen and (max-width:606px)");
  return (
    <div className={classes[`theme--${theme}`]}>
      <div className={classes.heading}>
        <div className={classes.heading__column}>
          <h1 className={classes.heading__title}>Social Media Dashboard</h1>
          <p className={classes.heading__subtitle}>Total Followers: 23 004</p>
        </div>
        {media && <hr className={classes.heading__hr} />}
        <div className={classes.heading__group}>
          <p className={classes.heading__text}>Dark Mode</p>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Heading;
