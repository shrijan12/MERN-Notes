import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full font-medium bg-slate-100 text-slate-900">
        {getInitials("Shrijan Dhungel")}
      </div>
      <div>
        <p className="text-sm font-medium text-black">Shrijan</p>
        <button
          className="text-sm text-slate-700 underline cursor-pointer"
          onClick={() => {
            onLogout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
