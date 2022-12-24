import React from 'react';
import "./GroupListCard.css";

const GroupListCard = ({groupName, amount}) => {

    // const colour = amount >= 0 ? "green" : "red";
  return (
    <div className='group-list-card-wrapper'>
        <p className='group-name'>{groupName}</p>
        <br />
        <h2 className='group-amount'>₹{amount}</h2>
    </div>
  )
}

export default GroupListCard