import React from "react";
import Styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={Styles.wrapper}>
              <div className={Styles.card}>
                <img src={image} alt="album" />
                <div className={Styles.banner}>
                  <Chip
                    className={Styles.chip}
                    label={`${follows} Follows`}
                    size="small"
                  />
                </div>
              </div>
              <div className={Styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "song": {
        const { image, title, durationInMs } = data;
        const minutes = Math.floor(durationInMs / 60000);
        const seconds = Math.floor((durationInMs % 60000) / 1000);
        const duration = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        return (
          <Tooltip title={duration} placement="top" arrow>
            <div className={Styles.wrapper}>
              <div className={Styles.card}>
                <img src={image} alt={title} />
              </div>
              <div className={Styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;