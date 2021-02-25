import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAllProfiles } from "../network";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(async () => {
    const res = await getAllProfiles();
    setProfiles(res);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-3">Profiles</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => {
            return (
              <tr>
                <th scope="row">{profile.id}</th>
                <td>{profile.fname}</td>
                <td>{profile.lname}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileList;
