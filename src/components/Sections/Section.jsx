import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import Carousal from "../Carousal/Carousal";

const Section = ({ title, data, type }) => {
  const [carosalToggle, setCarosalToggle] = useState(false);

  const handleToggle = () => {
    setCarosalToggle(!carosalToggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carosalToggle ? "Collapse all" : "Show all"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carosalToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousal
              data={data}
              renderCardComponent={(item) => (
                <Card key={item.id} data={item} type={type} />
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;