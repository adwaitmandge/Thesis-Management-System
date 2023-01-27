import { Image } from "@mui/icons-material";
import React, { useState } from "react";
import { ChatState } from "../Context/ChatProvider";

const ProfilePage = () => {

  const { user } = ChatState();

  return (
    <div className=" flex justify-center flex-col items-center p-4 px-[5%] rounded-lg h-[100%]">
      <div classNaxme="flex justify-center ">
        <img
          src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-full mx-auto mb-4"
        />
      </div>
      <div className="">
        <div>
          <h1 className="text-5xl font-medium py-3">{user.name}</h1>
          <h1 className="text-5xl font-medium py-3">{user.role}</h1>
        </div>

        <div className="">
          <p className="text-3xl text-black font-semibold py-3">
            E-mail:{user.email}
          </p>
          <p className="text-3xl text-black font-semibold py-3">
            ID:{user.registrationId}
          </p>
        </div>
      </div>

      <div className="flex">
        <p className="text-3xl text-black font-semibold py-3">
          Field Of Interest
        </p>
        <p className="text-3xl text-black font-semibold py-3 px-2">:</p>
        <p className="text-3xl text-black font-semibold py-3">
          {user.fieldOfInterest}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
