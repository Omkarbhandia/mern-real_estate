// import React from 'react'
import { useSelector } from "react-redux"
export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img src={currentUser.avatar} className="rounded-full h-20 w-20 object-cover hover:cursor-pointer self-center" alt="profile" />
        <input type="text" className="border p-3 rounded-lg" placeholder="Username" id="username" />
        <input type="email" className="border p-3 rounded-lg" placeholder="Email" id="email" />
        <input type="password" className="border p-3 rounded-lg" placeholder="Password" id="password" />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">Update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}
