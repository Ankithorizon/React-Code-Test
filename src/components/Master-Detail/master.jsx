import React from "react";
import { useEffect, useState } from "react";
import Detail from "./Detail/detail";

const Master = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await resp.json();
      setUsers(json);

      console.log(json);
    })();
  }, []);

  const getSelectedUser = (selectedUser) => {
    setSelectedUser(selectedUser);
  };
  let displayUsers = () => {
    return (
      <div>
        {users &&
          users.map((d, index) => (
            <div onClick={() => getSelectedUser(d)} key={index}>
              {d.name}
            </div>
          ))}
      </div>
    );
  };
  return (
    <div>
      <h3>Master-Detail</h3>
      <p></p>
      <div>
        <h2>User List</h2>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-3">
            <div>{users && displayUsers()}</div>
          </div>
          <div className="col-sm-5">
            <div>
              {selectedUser && (
                <Detail
                  username={selectedUser.username}
                  email={selectedUser.email}
                  name={selectedUser.name}
                ></Detail>
              )}
            </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Master;
