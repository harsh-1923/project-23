import React from 'react';
import "./RequestList.css";

import RequestCard from '../RequestCard/RequestCard';

const RequestList = () => {
  return (
    <div className="request-list-wrapper">
        <br/>
        <RequestCard />
        <RequestCard />
        <br/>

        <p className="label-primary">Settled Requests</p>
        <br/>

        <RequestCard />
        <RequestCard />

        <RequestCard />
        <RequestCard />
    </div>
  )
}

export default RequestList;