import React from "react";
import useCards from "../../hooks/useCards";
import Button from "../button/Button";
import styles from "./Results.module.scss";
const Results = ({ results, numberOfDaysToShow = 7}) => {
  const { currentCard, forecast, handleSelectDay } = useCards(results, numberOfDaysToShow);
  return (
    <>
      <div className={styles.daysWrapper}>
        {forecast.map((day, index) => (
          <Button
            key={index}
            styleType="accent"
            onClick={() => handleSelectDay(day)}
          >
            {day?.name}
          </Button>
        ))}
      </div>
      {currentCard && (
        <div className={styles.card}>
          {currentCard?.forecast?.map((f) => (
            <div key={f.name}>
              <div className={styles.image}>
                <img alt={f.shortForecast} src={f.icon} />
              </div>
              <span className={styles.dayName}>{f.name}</span>
              <span className={styles.temperature}>
                {f.temperature}°{f.temperatureUnit}
              </span>
              <span className={styles.forecast}>{f.detailedForecast}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Results;
