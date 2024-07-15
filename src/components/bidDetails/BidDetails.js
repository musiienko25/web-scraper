import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bidDetails.css";

const BidDetails = ({ id }) => {
  const [htmlContent, setHtmlContent] = useState("");

  const fetchBidDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/scrape?id=${id}`
      );
      setHtmlContent(response.data);
    } catch (error) {
      console.error("Error fetching bid details:", error);
    }
  };

  useEffect(() => {
    fetchBidDetails();
  }, [id]);

  return (
    <div className="bid-details">
      <div className="html-content">
        {/* Обгортка у <table> для збереження <td> тегів */}
        <table>
          <tbody dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </table>
      </div>
    </div>
  );
};

export default BidDetails;
