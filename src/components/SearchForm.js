import React, { useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [id, setId] = useState("");
  const [elementHtml, setElementHtml] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5000/api/scrape?id=${id}`
      );
      setElementHtml(response.data);
      setError("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Check console for details.");
      setElementHtml("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Enter Data ID"
        />
        <button type="submit">Search</button>
      </form>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        {elementHtml && (
          <div>
            <h2>Element HTML:</h2>
            <pre>{elementHtml}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
