import { useState } from "react";

const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const handleSearch = (address) => {
    setLoading(true);
    console.log(`Searching ${address}`);
    setResults([]);
    setLoading(false);
  };
  return { handleSearch, loading, results };
};
export default useSearch;
