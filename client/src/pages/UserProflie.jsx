import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { userProfileUrlContext } from "@/Contexts/userDataContext";
import { IoHome } from "react-icons/io5";

const UesrProflie = () => {
  const { userProfileUrlLink } = useContext(userProfileUrlContext);
  const { userName } = useParams();

  return (
    <div className="h-screen border border-purple-500">
      <div className="mx-auto w-full max-w-[1050px]">
        {/* directory section  */}
        <div className="mt-10 flex w-fit items-center justify-center gap-3 ">
          <IoHome className="text-[17px]" />
          <span className="h-[20px] w-[2px] rotate-[30deg] bg-purple-500" />
          <p className="font-medium">Profile</p>
          <span className="h-[20px] w-[2px] rotate-[30deg] bg-purple-500" />
          <p className="font-medium">{userName}</p>
        </div>
        <div className="mt-5 flex w-fit items-center justify-center">
          <img
            src={userProfileUrlLink}
            alt="Profile Image"
            className="aspect-square w-[150px] rounded-full"
          />
          <p className="text-5xl font-black">{userName}</p>
        </div>

        {/* divider  */}
        <div className="my-5 h-[2px] w-full bg-purple-500" />

        {/* stats section */}
        <div className="group">
          <h1 className="relative w-fit text-3xl font-black before:absolute before:left-0 before:top-full before:h-[3px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
            My Stats
          </h1>
          <p className="my-5 flex w-fit items-center justify-center gap-2 text-xl">
            <span className="font-bold">No. of Resumes Created:</span>
            <span className="">10</span>
          </p>
        </div>

        {/* divider  */}
        <div className="my-5 h-[2px] w-full bg-purple-500" />

        {/* Resume Section  */}
        <div className="group border border-blue-500">
          <h1 className="relative w-fit text-3xl font-black before:absolute before:left-0 before:top-full before:h-[3px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
            My Resumes
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UesrProflie;
