import axios from "axios";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Information = () => {
  const [userResumeData, setUserResumeData] = useState({
    personalDetails: {
      jobTitle: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      website: "",
    },
    professionalSummary: "",
    education: {
      college: "",
      degree: "",
      place: "",
      startDate: "",
      endDate: "",
      description: "",
    },
    experience: {
      experience1: {
        jobTitle: "",
        employer: "",
        place: "",
        startDate: "",
        endDate: "",
        description: "",
      },
      experience2: {
        jobTitle: "",
        employer: "",
        place: "",
        startDate: "",
        endDate: "",
        description: "",
      },
      experience3: {
        jobTitle: "",
        employer: "",
        place: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    },
    relevantCourses: "",
    certification: "",
    project: {
      project1: {
        title: "",
        description: "",
        position: "",
      },
      project2: {
        title: "",
        description: "",
        position: "",
      },
    },
    socialLink: {
      link1: {
        label: "",
        link: "",
      },
      link2: {
        label: "",
        link: "",
      },
      link3: {
        label: "",
        link: "",
      },
      link4: {
        label: "",
        link: "",
      },
    },
    skills: "",
    language: "",
  });
  // printing userResumeData ---
  console.clear();
  console.log(userResumeData);
  // ---------------------------

  const handleDataSubmission = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/add/userResume",
        userResumeData,
      );
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // localStorage.setItem("userResumeData", JSON.stringify(userResumeData));

  return (
    <div className="flex flex-col items-center justify-center border-white pb-5">
      {/* image container */}
      <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-banner bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <p className="relative text-center text-3xl font-bold uppercase text-white">
          {/* Enter your information for resume */}
          Drop your deets in the data zone
          {/* Build Your Career Canvas: Input Your Details */}
        </p>
      </div>
      {/* Main Input Container */}
      <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-5 px-5 py-10">
        {/* Personal Details Container */}
        {/* border border-[#07102d] */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="font-bold">
            <h1 className="flex w-fit items-center justify-center gap-2 text-xl">
              <FaInfoCircle className="text-purple-500" />
              <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                Personal Details
              </span>
            </h1>
          </div>
          {/* input section */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Job Title
              </label>
              <input
                type="text"
                placeholder="eg. FrontEnd Developer"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      jobTitle: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                First Name
              </label>
              <input
                type="text"
                placeholder="e.g. John"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      firstName: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Last Name
              </label>
              <input
                type="text"
                placeholder="e.g. Doe"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      lastName: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Email
              </label>
              <input
                type="email"
                placeholder="e.g. john.doe@example.com"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      email: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Phone
              </label>
              <input
                type="number"
                placeholder="e.g. +123 1234567890"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      phone: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Website
              </label>
              <input
                type="number"
                placeholder="e.g. www.sample.com"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) =>
                  setUserResumeData((prev) => ({
                    ...prev,
                    personalDetails: {
                      ...prev.personalDetails,
                      website: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </div>
        </div>

        {/* Professional Summary Container */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="py-2">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute  before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Professional Summary
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                Include summary of your skills and experience in 3-5 sentences
              </p>
            </div>
          </div>
          {/* input section */}
          <div className="mt-5">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <textarea
                placeholder="Enter your summary"
                className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    professionalSummary: e.target.value,
                  }));
                }}
              />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Education
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                List your most recent education.
              </p>
            </div>
          </div>
          {/* input section */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                College
              </label>
              <input
                type="text"
                placeholder="eg. Universal College of Engineering"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    education: {
                      ...prev.education,
                      college: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Degree
              </label>
              <input
                type="text"
                placeholder="e.g. B.Tech in Computer Engineering"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    education: {
                      ...prev.education,
                      degree: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Place
              </label>
              <input
                type="text"
                placeholder="eg. SDE-3"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    education: {
                      ...prev.education,
                      place: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            {/* 
                ------------------------------
                DATE VALUE
                ------------------------------
            */}
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Start Date
              </label>
              <input
                type="date"
                placeholder="eg. Feb, 2024"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    education: {
                      ...prev.education,
                      startDate: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            {/* 
                ------------------------------
                DATE VALUE
                ------------------------------
            */}
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                End Date
              </label>
              <input
                type="date"
                placeholder="eg. Feb, 2024"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    education: {
                      ...prev.education,
                      endDate: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="mt-5 sm:col-span-2">
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="flex flex-col font-bold" htmlFor="">
                  <span className="">Description</span>
                  <span className="text-xs text-red-600">
                    *Seperate every point/sentence with "---"
                  </span>
                </label>
                <textarea
                  placeholder="Enter your summary"
                  className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      education: {
                        ...prev.education,
                        description: e.target.value,
                      },
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Experience
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                Include 2-3 work responsibility for each experience
              </p>
            </div>
          </div>
          {/* input section */}
          <div className="">
            <h1 className="mt-5 font-bold italic">Experience - 1</h1>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="eg. SDE-3"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience1: {
                          ...prev.experience.experience1,
                          jobTitle: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Employer
                </label>
                <input
                  type="text"
                  placeholder="e.g. Google"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience1: {
                          ...prev.experience.experience1,
                          employer: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Place
                </label>
                <input
                  type="text"
                  placeholder="eg. SDE-3"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience1: {
                          ...prev.experience.experience1,
                          place: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              {/* 
                ------------------------------
                DATE VALUE
                ------------------------------
            */}
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Start Date
                </label>
                <input
                  type="date"
                  placeholder="eg. Feb, 2024"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience1: {
                          ...prev.experience.experience1,
                          startDate: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              {/* 
                ------------------------------
                DATE VALUE
                ------------------------------
            */}
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  End Date
                </label>
                <input
                  type="date"
                  placeholder="eg. Feb, 2024"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience1: {
                          ...prev.experience.experience1,
                          endDate: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="mt-5 sm:col-span-2">
                <div className="flex w-full flex-col items-start justify-center gap-1">
                  <label className="flex flex-col font-bold" htmlFor="">
                    <span className="">Description</span>
                    <span className="text-xs text-red-600">
                      *Seperate every point/sentence with "---"
                    </span>
                  </label>
                  <textarea
                    placeholder="Enter your summary"
                    className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                    onChange={(e) => {
                      setUserResumeData((prev) => ({
                        ...prev,
                        experience: {
                          ...prev.experience,
                          experience1: {
                            ...prev.experience.experience1,
                            description: e.target.value,
                          },
                        },
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
            <h1 className="mt-5 font-bold italic">Experience - 2</h1>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="eg. SDE-3"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience2: {
                          ...prev.experience.experience2,
                          jobTitle: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Employer
                </label>
                <input
                  type="text"
                  placeholder="e.g. Google"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience2: {
                          ...prev.experience.experience2,
                          employer: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Place
                </label>
                <input
                  type="text"
                  placeholder="eg. SDE-3"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience2: {
                          ...prev.experience.experience2,
                          place: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              {/* 
                ------------------------------
                DATE VALUE
                ------------------------------
            */}
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Start Date
                </label>
                <input
                  type="date"
                  placeholder="eg. Feb, 2024"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience2: {
                          ...prev.experience.experience2,
                          startDate: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              {/* 
                ------------------------------
                DATE VALUE
                ------------------------------
            */}
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  End Date
                </label>
                <input
                  type="date"
                  placeholder="eg. Feb, 2024"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience2: {
                          ...prev.experience.experience2,
                          endDate: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="mt-5 sm:col-span-2">
                <div className="flex w-full flex-col items-start justify-center gap-1">
                  <label className="flex flex-col font-bold" htmlFor="">
                    <span className="">Description</span>
                    <span className="text-xs text-red-600">
                      *Seperate every point/sentence with "---"
                    </span>
                  </label>
                  <textarea
                    placeholder="Enter your summary"
                    className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                    onChange={(e) => {
                      setUserResumeData((prev) => ({
                        ...prev,
                        experience: {
                          ...prev.experience,
                          experience2: {
                            ...prev.experience.experience2,
                            description: e.target.value,
                          },
                        },
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
            <h1 className="mt-5 font-bold italic">Experience - 3</h1>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="eg. SDE-3"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience3: {
                          ...prev.experience.experience3,
                          jobTitle: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Employer
                </label>
                <input
                  type="text"
                  placeholder="e.g. Google"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience3: {
                          ...prev.experience.experience3,
                          employer: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Place
                </label>
                <input
                  type="text"
                  placeholder="eg. SDE-3"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience3: {
                          ...prev.experience.experience3,
                          place: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              {/* 
                ------------------------------
                DATE VALUE
                ------------------------------
            */}
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  Start Date
                </label>
                <input
                  type="date"
                  placeholder="eg. Feb, 2024"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience3: {
                          ...prev.experience.experience3,
                          startDate: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              {/* 
                ------------------------------
                DATE VALUE
                ------------------------------
            */}
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="font-bold" htmlFor="">
                  End Date
                </label>
                <input
                  type="date"
                  placeholder="eg. Feb, 2024"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      experience: {
                        ...prev.experience,
                        experience3: {
                          ...prev.experience.experience3,
                          endDate: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="mt-5 sm:col-span-2">
                <div className="flex w-full flex-col items-start justify-center gap-1">
                  <label className="flex flex-col font-bold" htmlFor="">
                    <span className="">Description</span>
                    <span className="text-xs text-red-600">
                      *Seperate every point/sentence with "---"
                    </span>
                  </label>
                  <textarea
                    placeholder="Enter your summary"
                    className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                    onChange={(e) => {
                      setUserResumeData((prev) => ({
                        ...prev,
                        experience: {
                          ...prev.experience,
                          experience3: {
                            ...prev.experience.experience3,
                            description: e.target.value,
                          },
                        },
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Relevent Courses Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Relevant Courses
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                Only list relevant courses related to you domain
              </p>
              <p className="mt-2 text-xs text-red-600">
                *seperate the courses with "---"
              </p>
            </div>
          </div>
          {/* input section */}
          {/* <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-1
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill1: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-2
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill2: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-3
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill3: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-4
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill4: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-5
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill5: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-6
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill6: e.target.value,
                    },
                  }));
                }}
              />
            </div>
          </div> */}
          <div className="mt-5 flex w-full flex-col items-start justify-center gap-1">
            <textarea
              placeholder="Enter your skills"
              className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              onChange={(e) => {
                setUserResumeData((prev) => ({
                  ...prev,
                  relevantCourses: e.target.value,
                }));
              }}
            />
          </div>
        </div>

        {/* Certification Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Certification
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                Only list certification related to you domain
              </p>
              <p className="mt-2 text-xs text-red-600">
                *seperate the certification name with "---"
              </p>
            </div>
          </div>
          {/* input section */}
          {/* <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-1
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill1: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-2
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill2: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-3
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill3: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-4
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill4: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-5
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill5: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-6
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill6: e.target.value,
                    },
                  }));
                }}
              />
            </div>
          </div> */}
          <div className="mt-5 flex w-full flex-col items-start justify-center gap-1">
            <textarea
              placeholder="Enter your skills"
              className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              onChange={(e) => {
                setUserResumeData((prev) => ({
                  ...prev,
                  certification: e.target.value,
                }));
              }}
            />
          </div>
        </div>

        {/* Project Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Project
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                Only list projects related to you domain
              </p>
            </div>
          </div>
          {/* input section */}
          <h1 className="mt-5 font-bold italic underline">Project - 1</h1>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Title
              </label>
              <input
                type="text"
                placeholder="e.g. Google"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    project: {
                      ...prev.project,
                      project1: {
                        ...prev.project.project1,
                        title: e.target.value,
                      },
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Position
              </label>
              <input
                type="text"
                placeholder="e.g. Project Lead"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    project: {
                      ...prev.project,
                      project1: {
                        ...prev.project.project1,
                        position: e.target.value,
                      },
                    },
                  }));
                }}
              />
            </div>
            <div className="mt-5 sm:col-span-2">
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="flex flex-col font-bold" htmlFor="">
                  <span className="">Description</span>
                  <span className="text-xs text-red-600">
                    *Seperate every point/sentence with "---"
                  </span>
                </label>
                <textarea
                  placeholder="Enter your summary"
                  className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      project: {
                        ...prev.project,
                        project1: {
                          ...prev.project.project1,
                          description: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
            </div>
          </div>
          <h1 className="mt-5 font-bold italic underline">Project - 2</h1>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Title
              </label>
              <input
                type="text"
                placeholder="e.g. Google"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    project: {
                      ...prev.project,
                      project2: {
                        ...prev.project.project2,
                        title: e.target.value,
                      },
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Position
              </label>
              <input
                type="text"
                placeholder="e.g. Project Lead"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    project: {
                      ...prev.project,
                      project2: {
                        ...prev.project.project2,
                        position: e.target.value,
                      },
                    },
                  }));
                }}
              />
            </div>
            <div className="mt-5 sm:col-span-2">
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <label className="flex flex-col font-bold" htmlFor="">
                  <span className="">Description</span>
                  <span className="text-xs text-red-600">
                    *Seperate every point/sentence with "---"
                  </span>
                </label>
                <textarea
                  placeholder="Enter your summary"
                  className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      project: {
                        ...prev.project,
                        project2: {
                          ...prev.project.project2,
                          description: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Link Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Social Link
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                You can include your social profiles such as LinkedIn, Facebook,
                Twitter or personal website.
              </p>
            </div>
          </div>
          {/* input section */}
          <div className="mt-5 grid gap-4">
            {/* label-1 */}
            <div className="flex w-full items-start justify-between gap-4">
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Label-1
                </label>
                <input
                  type="text"
                  placeholder="eg. Twitter"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      socialLink: {
                        ...prev.socialLink,
                        link1: {
                          ...prev.socialLink.link1,
                          label: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Link-1
                </label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      socialLink: {
                        ...prev.socialLink,
                        link1: {
                          ...prev.socialLink.link1,
                          link: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
            </div>
            {/* label-2 */}
            <div className="flex w-full items-start justify-between gap-4">
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Label-2
                </label>
                <input
                  type="text"
                  placeholder="eg. Twitter"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      socialLink: {
                        ...prev.socialLink,
                        link2: {
                          ...prev.socialLink.link2,
                          label: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Link-2
                </label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      socialLink: {
                        ...prev.socialLink,
                        link2: {
                          ...prev.socialLink.link2,
                          link: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
            </div>
            {/* label-3 */}
            <div className="flex w-full items-start justify-between gap-4">
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Label-3
                </label>
                <input
                  type="text"
                  placeholder="eg. Twitter"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      socialLink: {
                        ...prev.socialLink,
                        link3: {
                          ...prev.socialLink.link3,
                          label: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Link-3
                </label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      socialLink: {
                        ...prev.socialLink,
                        link3: {
                          ...prev.socialLink.link3,
                          link: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
            </div>
            {/* label-4 */}
            <div className="flex w-full items-start justify-between gap-4">
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Label-4
                </label>
                <input
                  type="text"
                  placeholder="eg. Twitter"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      socialLink: {
                        ...prev.socialLink,
                        link4: {
                          ...prev.socialLink.link2,
                          label: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
              <div className="w-full">
                <label className="font-bold" htmlFor="">
                  Link-4
                </label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      socialLink: {
                        ...prev.socialLink,
                        link4: {
                          ...prev.socialLink.link4,
                          link: e.target.value,
                        },
                      },
                    }));
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Skills
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                Only list relevant skills related to you domain
              </p>
              <p className="mt-2 text-xs text-red-600">
                *seperate the skills with "---"
              </p>
            </div>
          </div>
          {/* input section */}
          {/* <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-1
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill1: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-2
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill2: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-3
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill3: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-4
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill4: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-5
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill5: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Skill-6
              </label>
              <input
                type="text"
                placeholder="eg. React.js"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      skill6: e.target.value,
                    },
                  }));
                }}
              />
            </div>
          </div> */}
          <div className="mt-5 flex w-full flex-col items-start justify-center gap-1">
            <textarea
              placeholder="Enter your skills"
              className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              onChange={(e) => {
                setUserResumeData((prev) => ({
                  ...prev,
                  skills: e.target.value,
                }));
              }}
            />
          </div>
        </div>

        {/* Language Section */}
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          {/* header */}
          <div className="">
            <div className="">
              <h1 className="flex w-fit items-center justify-center gap-2 text-xl font-bold">
                <FaInfoCircle className="text-purple-500" />
                <span className="relative before:absolute before:left-0 before:top-full before:h-[2px] before:w-[65%] before:bg-purple-500 before:duration-700 before:ease-inOutQuint group-hover:before:w-full">
                  Language
                </span>
              </h1>
              <p className="mt-2 text-[#9e9e9e]">
                List your most relevant language on top.
              </p>
              <p className="mt-2 text-xs text-red-600">
                *seperate the languages with "---"
              </p>
            </div>
          </div>
          {/* input section */}
          {/* <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Language-1
              </label>
              <input
                type="text"
                placeholder="eg. English"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    language: {
                      ...prev.language,
                      lang1: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Language-2
              </label>
              <input
                type="text"
                placeholder="eg. English"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    language: {
                      ...prev.language,
                      lang2: e.target.value,
                    },
                  }));
                }}
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <label className="font-bold" htmlFor="">
                Language-3
              </label>
              <input
                type="text"
                placeholder="eg. English"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                onChange={(e) => {
                  setUserResumeData((prev) => ({
                    ...prev,
                    language: {
                      ...prev.language,
                      lang3: e.target.value,
                    },
                  }));
                }}
              />
            </div>
          </div> */}
          <div className="gap-1la mt-5 flex w-full flex-col items-start justify-center">
            <textarea
              placeholder="Enter the languages"
              className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              onChange={(e) => {
                setUserResumeData((prev) => ({
                  ...prev,
                  language: e.target.value,
                }));
              }}
            />
          </div>
        </div>
      </div>
      {/* <button
        onClick={handleDataSubmission}
        className="mb-5 w-[250px] rounded-lg bg-purple-500 py-2 text-sm font-bold"
      >
        Save
      </button> */}
      <Link to="/templates">
        <button className="w-[250px] rounded-lg bg-purple-500 py-2 text-sm font-bold">
          Select Template
        </button>
      </Link>
    </div>
  );
};

export default Information;
