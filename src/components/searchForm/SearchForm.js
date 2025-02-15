import { useState } from "react";
import axios from "axios";
import BidDetails from "../bidDetails/BidDetails";
import "./searchForm.css";

const SearchForm = () => {
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}?id=${id}`
      );
      if (response.data.error) {
        setError(response.data.error);
        return;
      }
      setError("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Check console for details.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Bid ID"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {id && <BidDetails id={id} />}
    </div>
  );
};

export default SearchForm;
