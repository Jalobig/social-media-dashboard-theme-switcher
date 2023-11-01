import React from "react";
import classes from "./Follower.module.scss";
import IconDown from "../../images/icon-down.svg";
import IconUp from "../../images/icon-up.svg";
import IconFacebook from "../../images/icon-facebook.svg";
import IconTwitter from "../../images/icon-twitter.svg";
import IconInstagram from "../../images/icon-instagram.svg";
import IconYoutube from "../../images/icon-youtube.svg";
import { useTheme } from "../../context/themeContext";

const FOLLOWERS = [
  {
    color: "#198ff5",
    gradient: "",
    media: "Facebook",
    icon: IconFacebook,
    handle: "@nathanf",
    amount: "1987",
    type: "followers",
    delta: 12,
  },
  {
    color: "#1ca0f2",
    gradient: "",
    media: "Twitter",
    icon: IconTwitter,
    handle: "@nathanf",
    amount: "1044",
    type: "followers",
    delta: 99,
  },
  {
    color: "",
    gradient: "#fdc468, #df4996",
    media: "Instagram",
    icon: IconInstagram,
    handle: "@realnathanf",
    amount: "11k",
    type: "followers",
    delta: 1099,
  },
  {
    color: "#c4032a",
    gradient: "",
    media: "Youtube",
    icon: IconYoutube,
    handle: "Nathan F.",
    amount: "8239",
    type: "followers",
    delta: -144,
  },
];
const Follower = () => {
  const { theme } = useTheme();
  return (
    <div className={classes[`theme--${theme}`]}>
      <div className={classes.follower}>
        {FOLLOWERS.map((follower) => (
          <div className={classes.follower__card}>
            <div className={classes.follower__band} style={{
                backgroundColor: follower.media !== 'Instagram' ? follower.color: '',
                backgroundImage: follower.media === 'Instagram' ? `linear-gradient(to right, ${follower.gradient})`: ''
            }}></div>
            <div className={classes.follower__row}>
              <img
                src={follower.icon}
                alt={follower.media}
                className={classes.follower__image}
              />
              <p className={classes.follower__name}>{follower.handle}</p>
            </div>
            <h1 className={classes.follower__amount}>{follower.amount}</h1>
            <p className={classes.follower__text}>{follower.type}</p>
            <div className={classes.follower__row}>
              <img
                src={follower.delta < 0 ? IconDown : IconUp}
                alt={follower.delta < 0 ? "Icon Down" : "Icon Up"}
                className={classes.follower__icon}
              />
              <p className={follower.delta < 0 ? classes['follower__delta--down'] : classes['follower__delta--up']}>{Math.abs(follower.delta)} Today</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Follower;
