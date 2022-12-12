import React from "react";
import Trevo from "./Trevo";

const Header: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-end px-4 py-2">
        <Trevo width={64} height={64} />
      </div>
    </>
  );
};

export default Header;
