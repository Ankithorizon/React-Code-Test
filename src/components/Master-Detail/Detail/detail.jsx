import React from "react";
import "./style.css";


const Detail = ({ name, username, email }) => {
  const displayUserDetails = () => {
    return (
      <div>
        <h4>Username : {username}</h4>
        <h4>Name : {name}</h4>
        <h4>Email : {email}</h4>
      </div>
    );
  };
  return <div className="detailContent">{displayUserDetails()}</div>;
};

export default Detail;
