import React, { useState, useEffect } from "react";
import { createProfile, deleteProfile, getAllProfiles } from "../network";
import { Link } from "react-router-dom";
import NewProfile from "./NewProfile";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    const res = await getAllProfiles();
    setProfiles(res);
  };
  useEffect(() => {
    (async () => {
      fetchProfiles();
    })();
  }, []);

  const submitForm = async ({ firstName, lastName }) => {
    await createProfile({ firstName, lastName });
    await fetchProfiles();
  };

  const remove = async (id) => {
    await deleteProfile(id);
    await fetchProfiles();
  };

  return (
    <div className="container">
      <h1 className="text-center my-3">
        Profiles <i className="fas fa-users"></i>
      </h1>
      <NewProfile submit={submitForm} />
      <table className="table table-hover mt-3">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => {
            return (
              <tr key={profile.id}>
                <th scope="row">
                  <Link
                    style={{ color: "black", textDecoration: "underline" }}
                    to={`/profiles/${profile.id}`}
                  >
                    {profile.id}{" "}
                  </Link>
                </th>
                <td>{profile.fname}</td>
                <td>{profile.lname}</td>
                <td>
                  <a
                    className="btn btn-warning btn-sm"
                    href={`/profiles/${profile.id}/edit`}
                  >
                    <i className="fas fa-cogs"></i> Edit
                  </a>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => remove(profile.id)}
                  >
                    <i className="far fa-trash-alt"></i> Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileList;
