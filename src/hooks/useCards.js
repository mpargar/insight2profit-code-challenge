import { useEffect, useMemo, useState } from "react";

const useCards = (results = [], numberOfDaysToShow = 7) => {
  const [currentCard, setCurrentCard] = useState(null);
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    if (!results.length) {
      setForecast([]);
      handleSelectDay(null);
    }
    const days = [];
    const numberofDays = results.length ? numberOfDaysToShow * 2 : 0;
    for (let i = 0; i < numberofDays; i += 2) {
      const name = i === 0 ? "Today" : results[i]?.name;
      days.push({
        name,
        forecast: [results[i], results[i + 1]],
      });
    }
    setForecast(days);
    handleSelectDay(days[0]);
  }, [results]);
  const handleSelectDay = (day) => {
    setCurrentCard(day);
  };
  return { currentCard, forecast, handleSelectDay };
};
export default useCards;
