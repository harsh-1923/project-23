import React, {useState} from 'react';
import "./HomePage.css";
import avatar from "../..//assets/avatar.png"
import A2 from "../../assets/A2.png"
import A3 from "../../assets/A3.jpeg"

import {useNavigate} from "react-router-dom";

import PeopleBadge from '../../components/PeopleBadge/PeopleBadge';

import GroupList from '../../components/GroupList/GroupList';
import RequestList from '../../components/RequestList/RequestList';

const HomePage = () => {

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState(0);
  const [o1color, setO1color] = useState("white");
  const [o2color, setO2color] = useState("grey");

  const switchColor = () => {
    if(selectedOption === 1){
        setO1color("white");
        setO2color("grey");
    }else{
        setO1color("grey");
        setO2color("white");
    }
  }

  return (
    <div className="homepage-wrapper">
        <div className="user-details-wrapper">
            <div className="user-details">
                <h1 className="user-name">Harsh Sharma</h1>
                <small className="user-email">harsh.ju.sharma@gmail.com</small>
            </div>
            <div className="user-profile-wrapper">
                <img onClick={() => navigate("/profile")} className="user-profile" src={ avatar} alt="user profile"></img>
            </div>
        </div>

        <div className="amount-details-wrapper">
            <small className="amount-details-title">Total amount</small>
            <br/>
            <p className="amount-details-value">₹4673.7</p>
        </div>

        <p className="label-primary">People</p>
        <p className="label-primary">People</p>

        <div className="people-list-wrapper">
            <PeopleBadge img={A2} name={"Sandharv"} amount={167.4}/>
            <PeopleBadge img={A3} name={"Subham"} amount={-67.4}/>
            <PeopleBadge img={A2} name={"Aditya"} amount={45.0}/>
            <PeopleBadge img={A2} name={"Sorav"} amount={-70.4}/>
            <PeopleBadge img={A2} name={"Ayush"} amount={167.4}/>
        </div>

        <div className="label-options">
            <p 
                className="label-primary"
                style={{color: o1color}}
                onClick={() => {
                    setSelectedOption(0);
                    switchColor();
                }}
            >Groups</p>
            <p className="label-primary option" onClick={() => {
                    setSelectedOption(1);
                    switchColor();
                }} style={{color: o2color}}>Requests</p>
        </div>

        {selectedOption === 0 ? <GroupList/> : <RequestList/>}
    </div>
  )
}

export default HomePage;