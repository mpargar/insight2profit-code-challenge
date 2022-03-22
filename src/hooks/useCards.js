import { useEffect, useMemo, useState } from "react";

const useCards = (results = []) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    const days = [];
    for (let i = 0; i < results.length; i += 2) {
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
