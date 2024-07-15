import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default BidDetails;
