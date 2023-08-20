import React, { useState } from "react";

function Signup() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });
  return (
    <div className="grid grid-cols-3 py-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% min-h-screen">
      <div></div>
      <div className="col-span-3 md:col-span-1 flex flex-col items-center justify-center border-2 p-5 border-[#737373] bg-[#3b82f6]">
        <h1 className="text-xl font-bold text-white mb-10">Signup</h1>
        <div>
          <div className="flex items-center justify-between">
            <label className="mr-4 text-[#334155] font-semibold">
              Fullname
            </label>
            <input
              type="text"
              placeholder="fullname"
              className="w-fit px-2 py-1 rounded"
              onChange={(e) =>
                setUserDetails({ ...userDetails, userName: e.target.value })
              }
              value={userDetails.userName}
            />
          </div>
          <div className="flex items-center justify-between mt-5">
            <label className="mr-4 text-[#334155] font-semibold">Email</label>
            <input
              type="email"
              placeholder="email"
              className="w-fit px-2 py-1 rounded"
              onChange={(e) =>
                setUserDetails({ ...userDetails, email: e.target.value })
              }
              value={userDetails.email}
            />
          </div>
          <div className="flex items-center justify-between mt-5">
            <label className="mr-4 text-[#334155] font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="password"
              className="w-fit px-2 py-1 rounded"
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
              value={userDetails.password}
            />
          </div>
          <div className="flex justify-end mt-5">
            <button className="text-white px-4 py-2 rounded bg-gradient-to-r from-green-400 to-[#9333ea] hover:from-pink-500 hover:to-yellow-500">
              Signup
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Signup;
