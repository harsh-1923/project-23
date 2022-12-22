import React from 'react';
import "./ProfilePage.css";

import A2 from "../../assets/A2.png";
import wavyLines from "../../assets/wavyLines.jpeg";

const ProfilePage = () => {
  return (
    <div className="profile-page-wrapper">

        <img className="profile-picture" src={A2} alt="Profile Pic here"/>

        <h1 className="profile-page-name">Harsh Sharma</h1>
        <small className="profile-page-email">harsh.ju.sharma@gmail.com</small>

        <div className="profile-page-details-wrapper">
            <div className="profile-page-detail-card-groups">
                <h3>4</h3>
                <small className='secondary-label'>Groups</small>
            </div>

            <div className="profile-page-detail-card-groups">
                <h3>239</h3>
                <small className='secondary-label'>Involvments</small>
            </div>

            <div className="profile-page-detail-card-groups">
                <h3>14</h3>
                <small className='secondary-label'>People</small>
            </div>

            
        </div>

        <div style={{ backgroundImage: `url(${wavyLines})` }}className="profile-page-product-page">
            
        </div>
    </div>
  )
}

export default ProfilePage;