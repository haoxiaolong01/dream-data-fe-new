import React from "react";
import "./index.css";
import logo from "@/assets/images/desktop-white.png";

const UserLayout: React.FC<any> = ({ children }) => {
  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <div className="text-center mb-8">
          <img style={{ width: "160px" }} src={logo} alt="" />
          {/* <div className="text-3xl md:text-3xl font-bold text-white">IPVerse.ai</div> */}
        </div>

        <div
          className="w-full max-w-md bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl shadow-2xl"
          style={{ borderStyle: "solid" }}
        >
          {children}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-slate-600">© Powered by Yodo1</p>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
