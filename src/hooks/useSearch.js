import { useState } from "react";
import { getAddressDataService } from "../services/geoCodingServices";
import {
  getForecastService,
  getGridsService,
} from "../services/weatherServices";

const useSearch = (address) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  const handleError = (msg) => {
    setMessage(msg);
    setResults([]);
    setLoading(false);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const addressResponse = await getAddressDataService(address);
      if (addressResponse.status < 300) {
        console.log(addressResponse);
        if (addressResponse?.data?.result?.addressMatches?.length) {
          const { x, y } =
            addressResponse?.data?.result?.addressMatches[0]?.coordinates;
          return getGrids(x, y);
        }
      }
    } catch {
      return handleError("An unexpected problem has occurred");
    }
    handleError("No results found.");
  };
  const getGrids = async (x, y) => {
    try {
      const gridsResponse = await getGridsService(x, y);
      if (gridsResponse.status < 300) {
        console.log(gridsResponse);
        return getForecast(gridsResponse?.data?.properties);
      }
    } catch {
      return handleError("An unexpected problem has occurred");
    }
    handleError("No results found.");
  };
  const getForecast = async ({ gridId, gridX, gridY }) => {
    try {
      const response = await getForecastService(gridId, gridX, gridY);
      if (response.status < 300) {
        console.log(response?.data?.properties?.periods);
        setResults(response?.data?.properties?.periods);
        setLoading(false);
        return;
      }
    } catch {
      return handleError("An unexpected problem has occurred");
    }
    handleError("No results found.");
  };
  return { handleSearch, loading, results, message };
};
export default useSearch;
