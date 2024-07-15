import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bigDetails.css";

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
      <div
        className="html-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default BidDetails;
