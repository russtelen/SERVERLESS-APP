import React, { useState, useEffect } from "react";

const ProfileList = () => {
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Thornton</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileList;
