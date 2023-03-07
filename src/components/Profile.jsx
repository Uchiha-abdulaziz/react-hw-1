import React from "react";

const Profile = ({ avatar }) => {
  return (
    <div class="item">
      <div class="profile">
        <div class="description">
          <img src={avatar} alt="User avatar" class="avatar" />
          <h1 style={{ color: "blue" }} class="name1">
            Abdulaziz
          </h1>
          <h2 style={{ color: "blue" }} class="name2">
            Kyrgyzstan,Djalal-abad{" "}
          </h2>
          <h2 style={{ color: "blue" }} class="name3">
            Abdulazizmadaminjanov
          </h2>
        </div>

        <ul class="name">
          <li>
            <span style={{ color: "blue" }} class="name">
              Followers
            </span>
            <span style={{ color: "blue" }} class="name">
              10000
            </span>
          </li>
          <li>
            <span style={{ color: "blue" }} class="name">
              Views
            </span>
            <span style={{ color: "blue" }} class="name">
              200000
            </span>
          </li>
          <li>
            <span style={{ color: "blue" }} class="name">
              Like:{" "}
            </span>
            <span style={{ color: "blue" }} class="name">
              :3000000
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
