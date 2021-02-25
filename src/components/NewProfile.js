import React, { useState } from "react";

const NewProfile = ({ submit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    submit({ firstName, lastName });
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="firt name" className="sr-only">
            First name
          </label>
          <input
            type="text"
            value={firstName || ""}
            className="form-control"
            id="first name"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="last name" className="sr-only">
            Last name
          </label>
          <input
            type="text"
            value={lastName || ""}
            className="form-control"
            id="last name"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button
          onClick={submitForm}
          type="submit"
          className="btn btn-success mb-2"
        >
          Add Profile <i className="fas fa-plus-circle"></i>
        </button>
      </form>
    </div>
  );
};

export default NewProfile;
