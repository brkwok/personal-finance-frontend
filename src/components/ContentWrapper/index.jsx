import React from "react";
import { Outlet } from "react-router-dom";

const ContentWrapper = () => {
  return (
    <div className="px-6 py-4 w-full h-full">
      <Outlet />
    </div>
  )
}

export default ContentWrapper;