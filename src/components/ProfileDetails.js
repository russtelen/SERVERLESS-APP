import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getProfile } from "../network";

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getProfile(id);
      setProfile(data[0]);
    })();
  }, [id]);
  return (
    <div className="container">
      <div className="m-3">
        <Link className="text-dark" to="/profiles">
          <i className="fas fa-arrow-left"></i> Back to home
        </Link>
      </div>

      <p className="text-center display-2">
        ID {profile.id}: {profile.fname} {profile.lname}{" "}
        <i className="fas fa-user"></i>
      </p>
    </div>
  );
};

export default ProfileDetails;
