import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfileDetails = () => {
  const { uuid } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?seed=${uuid}`);
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [uuid]);

  return (
    <div>
      <h1>User Details</h1>
      {user && (
        <div>
          <img src={user.picture.large} alt={user.name.first} />
          <p>
            Name: {user.name.title} {user.name.first} {user.name.last}
          </p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Gender: {user.gender}</p>
          <p>uuid: {uuid}</p>
          {/* Add other user details here */}
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
