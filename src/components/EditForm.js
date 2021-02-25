import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { getProfile, updateProfile } from "../network";
const EditForm = () => {
  const { id } = useParams();
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    (async () => {
      const res = await getProfile(id);
      const data = res[0];
      setFirstName(data.fname);
      setLastName(data.lname);
    })();
  }, [id]);

  const update = async (e) => {
    e.preventDefault();
    await updateProfile(id, firstName, lastName);
    setFirstName("");
    setLastName("");
    history.push("/profiles");
  };

  return (
    <div className="container mt-5">
      <div className="m-3">
        <Link className="text-dark" to="/profiles">
          <i className="fas fa-arrow-left"></i> Back to home
        </Link>
      </div>
      <h1 className="text-center">Edit Profile ID: {id}</h1>
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
            onClick={update}
            type="submit"
            className="btn btn-success mb-2"
          >
            Update Profile <i className="fas fa-plus-circle"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
