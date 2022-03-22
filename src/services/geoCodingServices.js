import axios from "axios";

export const getAddressDataService = async (address) => {
  return await axios.get(
    "https://geocoding.geo.census.gov/geocoder/locations/onelineaddress",
    {
      params: {
        address,
        benchmark: "2020",
        format: "json",
      },
    }
  );
};
