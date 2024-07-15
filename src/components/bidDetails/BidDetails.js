import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bidDetails.css";

const BidDetails = ({ id }) => {
  const [bidDetails, setBidDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBidDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/scrape?id=${id}`
        );
        setBidDetails(response.data);
      } catch (error) {
        console.error("Error fetching bid details:", error);
        setError("Error fetching data. Check console for details.");
      }
    };

    fetchBidDetails();
  }, [id]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!bidDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bid-details">
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
        <tbody>
          <tr>
            <td>{bidDetails.id}</td>
            <td>{bidDetails.title}</td>
            <td>{bidDetails.status}</td>
            <td>{bidDetails.dueDate}</td>
            <td>{bidDetails.publishDate}</td>
            <td>{bidDetails.mainCategory}</td>
            <td>{bidDetails.solicitationType}</td>
            <td>{bidDetails.issuingAgency}</td>
            <td>{bidDetails.bidHoldersList}</td>
            <td>{bidDetails.emmId}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BidDetails;
