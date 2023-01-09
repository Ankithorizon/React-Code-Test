/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";
import axios from "axios";
import { useSate, useEffect } from "react";

const RemoteApi = () => {
  const [data, setData] = useState([]);

  const getDataFromRemoteApi = () => {
    axios
      .get("https://randomuser.me/api")
      .then(function (response) {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  useEffect(() => {
    getDataFromRemoteApi();
  }, []);

  const displayName = (nameVal) => {
    return nameVal.title + " " + nameVal.first + ", " + nameVal.last;
  };

  const displayData = () => {
    return (
      <div>
        {data.map((d, index) => (
          <div key={index}>
            <img src={d.picture.thumbnail} alt="" />
            <span>{displayName(d.name)}</span>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div>
      <h3>Remote-Api</h3>
      <p></p>
      <div>{displayData()}</div>
    </div>
  );
};

export default RemoteApi;
