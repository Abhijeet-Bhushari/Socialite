import React from "react";
import "./CloseFriend.css";

export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <div className="sidebarFriend">
        <img
          type="file"
          src={PF + user.profilePicture}
          alt=""
          className="sidebarFriendImg"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </div>
    </div>
  );
}
