import React from 'react';
import "./RequestCard.css";

import A3 from "../../assets/A3.jpeg";

const RequestCard = () => {
  return (
    <div className="request-card-wrapper">
        <img className="request-card-profile" src={A3} alt={"F"} />

        <div className="request-card-detail-wrapper">
            <div className="request-card-part1">
                <h3 className="request-card-name">Subham Sahu</h3>
                <small className="request-card-requestby label">in Homies</small>

            </div>
            <div className="request-card-part2">
                <h4>₹463</h4>
                <div className="request-card-paynow">
                    <p className="request-card-pntext">Details</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RequestCard;