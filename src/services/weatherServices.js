import axios from "axios";

export const getGridsService = async (x, y) => {
  console.log(x, y, ",//");
  return await axios.get(`https://api.weather.gov/points/${39.7456},${-97.0892}`);
};

export const getForecastService = async (gridId, x, y) => {
  return await axios.get(
    `https://api.weather.gov/gridpoints/${gridId}/${x},${y}/forecast`
  );
};
