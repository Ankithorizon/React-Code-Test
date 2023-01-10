import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const Paging = () => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    setData(getData());

    if (getData() && getData().length > 0) {
      setTotalPages(Math.ceil(getData().length / recordsPerPage));
    }

    getPageData(getData());
  }, []);

  const getPageData = (myData) => {
    var pageData_ = [];

    let lastIndex = currentPage * recordsPerPage - 1;
    let beginIndex = lastIndex - recordsPerPage + 1;
    for (let r = beginIndex; r <= lastIndex; r++) {
      if (myData[r] !== undefined) pageData_.push(myData[r]);
    }
    setPageData([...pageData_]);
  };
  const getData = () => {
    return [
      {
        id: 1,
        name: "name-1",
        address: "address-1",
      },
      {
        id: 2,
        name: "name-2",
        address: "address-2",
      },
      {
        id: 3,
        name: "name-3",
        address: "address-3",
      },
      {
        id: 4,
        name: "name-4",
        address: "address-4",
      },
      {
        id: 5,
        name: "name-5",
        address: "address-5",
      },
      {
        id: 6,
        name: "name-6",
        address: "address-6",
      },
      {
        id: 7,
        name: "name-7",
        address: "address-7",
      },
      {
        id: 8,
        name: "name-8",
        address: "address-8",
      },
      {
        id: 9,
        name: "name-9",
        address: "address-9",
      },
    ];
  };

  let displayPageData = () => {
    return (
      <tbody>
        {pageData &&
          pageData.map((d, index) => (
            <tr key={index}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.address}</td>
            </tr>
          ))}
      </tbody>
    );
  };

  let displayData = () => {
    return (
      <tbody>
        {data &&
          data.map((d, index) => (
            <tr key={index}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.address}</td>
            </tr>
          ))}
      </tbody>
    );
  };

  const nextPage = () => {
    if (currentPage + 1 > totalPages) return;
    else {
      setCurrentPage(currentPage + 1);

      var pageData_ = [];
      let lastIndex = (currentPage + 1) * recordsPerPage - 1;
      let beginIndex = lastIndex - recordsPerPage + 1;
      for (let r = beginIndex; r <= lastIndex; r++) {
        if (data[r] !== undefined) pageData_.push(data[r]);
      }
      setPageData([...pageData_]);
    }
  };
  const previousPage = () => {
    if (currentPage - 1 === 0) return;
    else {
      setCurrentPage(currentPage - 1);

      var pageData_ = [];
      let lastIndex = (currentPage - 1) * recordsPerPage - 1;
      let beginIndex = lastIndex - recordsPerPage + 1;
      for (let r = beginIndex; r <= lastIndex; r++) {
        if (data[r] !== undefined) pageData_.push(data[r]);
      }
      setPageData([...pageData_]);
    }
  };
  return (
    <div>
      <h3>Paging</h3>
      <p></p>
      <div>
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">{JSON.stringify(data, null, 2)}</div>
          <div className="col-sm-4"></div>
        </div>
      </div>
      <p></p>
      <div>
        <div className="row">
          <div className="col-sm-4">
            <Button
              className="btn btn-info"
              type="button"
              onClick={(e) => previousPage(e)}
            >
              Previous
            </Button>
          </div>
          <div className="col-sm-4">
            <h3>
              Page : {currentPage} of {totalPages}
            </h3>
          </div>
          <div className="col-sm-4">
            <Button
              className="btn btn-info"
              type="button"
              onClick={(e) => nextPage(e)}
            >
              Next
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                </tr>
              </thead>

              {/* {displayData()} */}

              {displayPageData()}
            </table>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Paging;
