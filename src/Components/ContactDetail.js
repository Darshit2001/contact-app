import React from 'react'
import User from '../Images/User.png'
import { useLocation } from "react-router-dom";

function ContactDetail() {

  const location = useLocation();
  const {name , email}=location.state.contact;
 

  return (
    <>
      <div className="main">
        <div className="ui card centered">
          <div className="image">
            <img src={User} alt="User" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
            <div className="discription">{email}</div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactDetail