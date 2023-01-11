import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Detail = ({ name, username, email, action }) => {
  const [updatedName, setUpdatedName] = useState("");

  useEffect(() => {
    setUpdatedName(name);
  }, [name]);

  const nameChanged = (e) => {
    setUpdatedName(e.target.value);
  };

  const updateNameAndParentComponent = () => {
    action(name, updatedName);
  };
  const displayUpdateNameForm = () => {
    return (
      <div>
        <form>
          <label htmlFor="name">Change Name?</label>
          <input
            value={updatedName}
            type="text"
            onChange={(e) => nameChanged(e)}
            name="updatedName"
          />
          <p></p>
          <Button
            onClick={(e) => updateNameAndParentComponent(e)}
            type="button"
            className="btn btn-success"
            color="primary"
          >
            Update Name &amp; Parent Component
          </Button>
        </form>
      </div>
    );
  };
  const displayUserDetails = () => {
    return (
      <div>
        <h4>Username : {username}</h4>
        <h4>Name : {name}</h4>
        <h4>Email : {email}</h4>
      </div>
    );
  };
  return (
    <div className="detailContent">
      {displayUserDetails()}
      <p></p>
      {displayUpdateNameForm()}
    </div>
  );
};

export default Detail;
