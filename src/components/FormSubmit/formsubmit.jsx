import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const FormSubmit = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [modelError, setModelError] = useState({
    emailAddressError: "",
    passwordError: "",
  });
  const [disableSubmit, setDisableSubmit] = useState(false);

  useEffect(() => {
    disableSubmitButton();
  }, []);

  const displayModelErrors = () => {
    return (
      <div>
        <div>
          {modelError.emailAddressError &&
          modelError.emailAddressError.length > 0 ? (
            <span>{modelError.emailAddressError}</span>
          ) : (
            <span></span>
          )}
        </div>
        <div>
          {modelError.passwordError && modelError.passwordError.length > 0 ? (
            <span>{modelError.passwordError}</span>
          ) : (
            <span></span>
          )}
        </div>
      </div>
    );
  };

  // this will disable submit button @ beginning
  const disableSubmitButton = () => {
    if (emailAddress === "" || password === "") setDisableSubmit(true);
    else setDisableSubmit(false);
  };

  const formDataSubmit = () => {
    if (modelError.passwordError && modelError.passwordError.length > 0) {
      return;
    }
    if (
      modelError.emailAddressError &&
      modelError.emailAddressError.length > 0
    ) {
      return;
    }

    // if form is valid then submit data to api
    console.log(emailAddress, password);
  };
  const formValueChanged = (event) => {
    disableSubmitButton();

    // emailAddress
    if (event.target.name === "emailAddress") {
      setEmailAddress(event.target.value);

      if (!event.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        setModelError({
          ...modelError,
          emailAddressError: "Invalid Email!",
        });
      } else {
        setModelError({
          ...modelError,
          emailAddressError: "",
        });
      }
    }
    // password
    else if (event.target.name === "password") {
      setPassword(event.target.value);

      if (event.target.value.length < 8) {
        setModelError({
          ...modelError,
          passwordError: "Invalid Password!",
        });
      } else {
        setModelError({
          ...modelError,
          passwordError: "",
        });
      }
    }
  };
  return (
    <div>
      <h3>Form-Validation-Submit</h3>
      <p></p>
      <div>
        <form>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-4">
                  <div className="modelValidation">{displayModelErrors()}</div>
                </div>
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="emailAddress">Email Address</label>
                  </div>
                  <div className="col-sm-4">
                    <input
                      value={emailAddress}
                      type="email"
                      onChange={(e) => formValueChanged(e)}
                      name="emailAddress"
                    />
                  </div>
                  {modelError.emailAddressError && (
                    <div className="col-sm-4 fieldErrorMessage">
                      {modelError.emailAddressError}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="col-sm-4">
                    <input
                      value={password}
                      type="password"
                      onChange={(e) => formValueChanged(e)}
                      name="password"
                    />
                  </div>
                  {modelError.passwordError && (
                    <div className="col-sm-4 fieldErrorMessage">
                      {modelError.passwordError}
                    </div>
                  )}
                </div>
              </div>
              <p></p>
              <Button
                disabled={disableSubmit}
                onClick={(e) => formDataSubmit(e)}
                type="button"
                className="btn btn-success"
                color="primary"
              >
                Login
              </Button>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSubmit;
