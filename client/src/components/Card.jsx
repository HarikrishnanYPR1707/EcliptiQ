import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ fileName, resumeRoute }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(resumeRoute)}
      className="w-[310px] cursor-pointer rounded-lg border border-purple-500 px-5 py-2 text-center font-bold"
    >
      {/* Harikrishnan-resume-[01-01-1001] */}
      {fileName}
    </div>
  );
};

export default Card;
