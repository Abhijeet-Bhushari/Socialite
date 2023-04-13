import React from "react";
import "./Following.css";

export default function Following({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <div className="rightbarFollowing">
        <img
          src={PF + user.profilePicture}
          alt=""
          className="rightbarFollowingImg"
        />
        <span className="rightbarUserFollowingName">{user.username}</span>
      </div>
    </div>
  );
}
