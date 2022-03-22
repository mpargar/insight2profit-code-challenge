import React from "react";
import useCards from "../../hooks/useCards";
import Button from "../button/Button";
import styles from "./Results.module.scss";
const Results = ({ results }) => {
  const { currentCardIndex, forecast, handleSelectDay } = useCards(results);
  return (
    <>
      <div className={styles.daysWrapper}>
        {forecast.map((day, index) => (
          <Button
            key={index}
            styleType="accent"
            onClick={(day) => handleSelectDay(day)}
          >
            {day?.name}
          </Button>
        ))}
      </div>
    </>
  );
};
export default Results;
