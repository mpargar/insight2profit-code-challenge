import axios from "axios";

export const getGridsService = async (x, y) => {
  return await axios.get(`https://api.weather.gov/points/${y},${x}`);
};

export const getForecastService = async (gridId, x, y) => {
  return await axios.get(
    `https://api.weather.gov/gridpoints/${gridId}/${x},${y}/forecast`
  );
};
