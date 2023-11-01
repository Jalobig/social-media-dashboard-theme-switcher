import React from "react";
import classes from "./Overview.module.scss";
import IconDown from "../../images/icon-down.svg";
import IconUp from "../../images/icon-up.svg";
import IconFacebook from "../../images/icon-facebook.svg";
import IconTwitter from "../../images/icon-twitter.svg";
import IconInstagram from "../../images/icon-instagram.svg";
import IconYoutube from "../../images/icon-youtube.svg";
import { useTheme } from "../../context/themeContext";
const SOCIALSTATS = [
  {
    text: "Page Views",
    icon: IconFacebook,
    amount: "87",
    delta: 3,
    name: "Facebook",
  },
  {
    text: "Likes",
    icon: IconFacebook,
    amount: "52",
    delta: -2,
    name: "Facebook",
  },
  {
    text: "Likes",
    icon: IconInstagram,
    amount: "5462",
    delta: 2257,
    name: "Instagram",
  },
  {
    text: "Profile Views",
    icon: IconInstagram,
    amount: "52k",
    delta: 1375,
    name: "Instagram",
  },
  {
    text: "Retweets",
    icon: IconTwitter,
    amount: "117",
    delta: 303,
    name: "Twitter",
  },
  {
    text: "Likes",
    icon: IconTwitter,
    amount: "507",
    delta: 553,
    name: "Twitter",
  },
  {
    text: "Likes",
    icon: IconYoutube,
    amount: 107,
    delta: 19,
    name: "Youtube",
  },
  {
    text: "Total Views",
    icon: IconYoutube,
    amount: 1407,
    delta: 12,
    name: "Youtube",
  },
];
const Overview = () => {
  const { theme } = useTheme();
  return (
    <div className={classes[`theme--${theme}`]}>
      <div className={classes.overview}>
        <h2 className={classes.overview__heading}>Overview - today</h2>
        <div className={classes.overview__stats}>
          {SOCIALSTATS.map((stats) => (
            <div className={classes.overview__card}>
              <div className={classes.overview__row}>
                <p className={classes.overview__text}>{stats.text}</p>
                <img
                  src={stats.icon}
                  alt={`icon of ${stats.name}`}
                  className={classes.overview__icon}
                />
              </div>
              <div className={classes.overview__row}>
                <p className={classes.overview__amount}>{stats.amount}</p>
                <div className={classes.overview__group}>
                  <img
                    src={stats.delta < 0 ? IconDown : IconUp}
                    alt={stats.delta < 0 ? "Icon Down" : "Icon Up"}
                  />{" "}
                  <p
                    className={`${classes.overview__delta} ${
                      stats.delta < 0
                        ? classes.delta__decrease
                        : classes.delta__increase
                    }`}
                  >
                    {`${Math.abs(stats.delta)}%`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
