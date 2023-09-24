import React from "react";
import Logo from "../Logo.svg";

function Navbar() {
  return (
    <>
      <div className="w-full h-52">
        <div class="relative">
          <div class="absolute right-8 top-8">
            <img src={Logo} alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
