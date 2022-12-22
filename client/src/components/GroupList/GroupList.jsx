import React from 'react';
import GroupListCard from '../GroupListCard/GroupListCard';
import "./GroupList.css";


const GroupList = () => {
  return (
    <div className="group-list-wrapper">
        <GroupListCard groupName={"Homies"} amount={360.91}/>
        <GroupListCard groupName={"Banglore Trip"} amount={360.91}/>
        <GroupListCard groupName={"Banglore Trip"} amount={360.91}/>
        <GroupListCard groupName={"Banglore Trip"} amount={360.91}/>
        <GroupListCard groupName={"Banglore Trip"} amount={360.91}/>
    </div>
  )
}

export default GroupList