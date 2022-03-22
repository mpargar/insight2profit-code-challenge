import { useState } from "react";
import { getAddressDataService } from "../services/geoCodingServices";
import { getGridsService } from "../services/weatherServices";

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
    const addressResponse = await getAddressDataService(address);
    if (addressResponse.status < 300) {
      console.log(addressResponse);
      if (addressResponse?.data?.result?.addressMatches?.length) {
        const { x, y } =
          addressResponse?.data?.result?.addressMatches[0]?.coordinates;
        return getGrids(x, y);
      }
      handleError("No results found.");
    }
    setResults([]);
    setLoading(false);
  };
  const getGrids = async (x, y) => {
    try {
      const gridsResponse = await getGridsService(x, y);
      if (gridsResponse.status < 300) {
      }
    } catch {
      setMessage("An unexpected problem has occurred");
      setResults([]);
      setLoading(false);
    }
  };
  return { handleSearch, loading, results, message };
};
export default useSearch;
