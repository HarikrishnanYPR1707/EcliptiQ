import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { userProfileUrlContext } from "@/Contexts/userDataContext";
import { IoHome } from "react-icons/io5";

const UesrProflie = () => {
  const { userProfileUrlLink } = useContext(userProfileUrlContext);
  const { userName } = useParams();

  return (
    <div className="h-screen border border-purple-500">
      <div className="mx-auto w-full max-w-[1050px] border border-purple-500">
        {/* directory section  */}
        <div className="mt-10 flex w-fit items-center justify-center gap-3 ">
          <IoHome className="text-[17px]" />
          <span className="h-[20px] w-[2px] rotate-[30deg] bg-purple-500" />
          <p className="font-bold">Profile</p>
          <span className="h-[20px] w-[2px] rotate-[30deg] bg-purple-500" />
          <p className="font-bold">{userName}</p>
        </div>

        {/* divider  */}
        <span className="h-[10px] w-full bg-red-500" />
      </div>
    </div>
  );
};

export default UesrProflie;
