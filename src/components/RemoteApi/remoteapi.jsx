import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const RemoteApi = () => {
  const [data, setData] = useState([]);
  const [jsonData, setJsonData] = useState("");

  // ?page=2
  const [nextPage, setNextPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const getPageDataFromRemoteApi = () => {
    axios
      .get("https://randomuser.me/api?page=" + { nextPage })
      .then(function (response) {
        if (response !== undefined && response.data.results.length > 0) {
          setPageData([...response.data.results]);
          setNextPage(nextPage + 1);
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  const getRandomDataFromRemoteApi = () => {
    axios
      .get("https://randomuser.me/api")
      .then(function (response) {
        setData(response.data.results);
        setJsonData(JSON.stringify(response.data.results));
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  useEffect(() => {
    getRandomDataFromRemoteApi();

    getPageDataFromRemoteApi();
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

  const displayPageData = () => {
    return (
      <div>
        {pageData && pageData.length > 0 && nextPage <= 10 ? (
          <div>
            {pageData.map((d, index) => (
              <div key={index}>
                <img src={d.picture.thumbnail} alt="" />
                <span>{displayName(d.name)}</span>
              </div>
            ))}
          </div>
        ) : (
          <div>No Data</div>
        )}
      </div>
    );
  };
  return (
    <div>
      <h3>Remote-Api</h3>
      <p></p>
      <div>{displayData()}</div>
      <p></p>
      <div>{jsonData}</div>
      <p></p>
      <div>
        <Button
          className="btn btn-success"
          type="button"
          onClick={(e) => getPageDataFromRemoteApi(e)}
        >
          Next Data
        </Button>
        <p></p>
        {pageData && pageData?.length > 0 ? (
          <div>{displayPageData()}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default RemoteApi;
