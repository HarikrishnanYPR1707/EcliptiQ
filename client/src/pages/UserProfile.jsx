import {
  userEmailContext,
  userProfileUrlContext,
} from "@/Contexts/userDataContext";
import { BASEURL } from "@/assets/API/api";
import Card from "@/components/Card";
import axios from "axios";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

const UesrProflie = () => {
  const navigate = useNavigate();
  const { userProfileUrlLink } = useContext(userProfileUrlContext);
  const { user } = useContext(userEmailContext);
  const { userName } = useParams();

  const [allData, setAllData] = useState([]);

  console.log(user);

  const fetchAllData = async () => {
    try {
      const response = await axios
        .get(`${BASEURL}/api/getAllData?userEmail=${user}`)
        .then((res) => setAllData(res.data.data));
      // console.log(response);
    } catch (error) {
      // console.log(error.toJSON());
      console.log(error);
    }
  };

  // fetchAllData();
  console.log("------------------------------------------");
  console.log(allData);

  localStorage.setItem("profileData", JSON.stringify(allData));

  const profileData = localStorage.getItem("profileData");

  console.log(profileData);

  console.log("------------------------------------------");

  useEffect(() => {
    fetchAllData();
  }, []);

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
        <div className="mt-5 flex w-fit items-center justify-center gap-5">
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
          <h1 className="relative mb-5 w-fit text-3xl font-black before:absolute before:left-0 before:top-full before:h-[3px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
            My Resumes
          </h1>
          <div className="grid grid-cols-3 gap-5">
            {/* {Array(10)
              .fill(true)
              .map((card, index) => (
                <Card key={index} />
              ))} */}
            {profileData.map((card, index) => (
              <Card
                fileName={card.fileName}
                resumeRoute={card.resumeTemplateRoute}
              />
            ))}
            <div
              onClick={() => navigate("/information/newResume")}
              className="w-[310px] cursor-pointer rounded-lg border border-dashed border-purple-500 px-5 py-2 text-center font-bold uppercase"
            >
              Create New Resume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UesrProflie;
