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
              {" "}
              <td>ID</td>
              <td>title</td>
              <td>Status</td>
              <td>Due / Close Date</td>
              <td>Publish Date UTC-4</td>
              <td>Main Category</td>
              <td>Solicitation Type</td>
              <td>Issuing Agency</td>
              <td>Bid Holders List</td>
              <td>eMM ID</td>
            </tr>
          </thead>
          <tbody dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </table>
      </div>
    </div>
  );
};

export default BidDetails;
