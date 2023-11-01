import React from "react";
import classes from "./Footer.module.scss";
import { useTheme } from "../../context/themeContext";

const Footer = () => {
  const {theme} = useTheme()
  return (
    <footer className={`${classes.footer} ${classes[`footer--${theme}`]}`}>
      <div className={classes.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/jalobig" rel="noreferrer" target="_blank">
          Jason Alexis
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
