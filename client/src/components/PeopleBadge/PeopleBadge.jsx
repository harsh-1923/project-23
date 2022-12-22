import React from 'react';
import "./PeoplBadge.css";

const PeopleBadge = ({img, name, amount}) => {

    const primaryColor = amount >= 0 ? "green" : "red";
  return (
    <div className="people-badge-wrapper">
        <img className="people-badge-avatar" src={img} alt={name}></img>

        <div className="people-badge-detail-wrapper">
            <small className="people-badge-name">{name}</small>
            <p className="people-badge-amount" style={{color: primaryColor}}>{amount}</p>
        </div>
    </div>
  )
}

export default PeopleBadge;