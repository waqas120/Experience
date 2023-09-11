import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" w-full bg-[#221F38] ">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
