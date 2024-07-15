import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bidDetails.css";

const BidDetails = ({ id }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
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

    fetchBidDetails();
  }, [id]);

  return (
    <div className="bid-details">
      <div className="html-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Due / Close Date</th>
              <th>Publish Date UTC-4</th>
              <th>Main Category</th>
              <th>Solicitation Type</th>
              <th>Issuing Agency</th>
              <th>Bid Holders List</th>
              <th>eMM ID</th>
            </tr>
          </thead>
          <tbody dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </table>
      </div>
    </div>
  );
};

export default BidDetails;
