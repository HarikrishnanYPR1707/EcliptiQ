import { currentResumeContext } from "@/Contexts/ResumeContext.js";
import { userEmailContext } from "@/Contexts/userDataContext.js";
import axios from "axios";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BASEURL } from "../assets/API/api.js";
import { useParams } from "react-router-dom";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";

const Information = () => {
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(true);
  const [isUpdateButtonActive, setIsUpdateButtonActive] = useState(false);

  const [userResumeData, setUserResumeData] = useState({
    fileName: "",
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

  // const [userResumeData, setUserResumeData] = useState({
  //   fileName: "Harikrishnan-Resume-[23-01-2024]",
  //   personalDetails: {
  //     jobTitle: "Frontend Developer",
  //     firstName: "Harikrishnan",
  //     lastName: "Prasannakumar",
  //     email: "hk17.dev@gmail.com",
  //     phone: "7776861386",
  //     website: "www.hk17.dev",
  //   },
  //   professionalSummary:
  //     "Highly motivated and results-oriented Software Development Engineer (SDE-3) with X years of experience in designing, developing, and deploying complex software solutions. Proven ability to lead and contribute to cross-functional teams, tackle challenging software problems, and deliver high-quality, scalable, and maintainable code. Possesses a strong understanding of system design principles and experience in owning and operating services within a product-based organization.",
  //   education: {
  //     college: "Universal College of Enginereing",
  //     degree: "B.Tech in Computer Engineering",
  //     place: "Vasai, Kaman",
  //     startDate: "2021-07-17",
  //     endDate: "2024-07-17",
  //     description:
  //       "University Name: Universal College of Engineering---Degree: B.Tech in Computer Engineering---Expected Graduation Date: July 2024---GPA (Optional): Include only if above 3.5 or within the honor roll range (e.g., July 2024 (Expected), GPA: 3.8)---Relevant Coursework (Optional): List a few key courses aligned with your target job. (e.g., Data Structures & Algorithms, Software Design Patterns, Computer Networks)---Honors & Awards (Optional): Mention any relevant academic achievements like scholarships, dean's list mentions, or competition awards.---Projects/Activities (Optional): Briefly describe any academic projects or extracurricular activities related to computer science that showcase your skills and interests. (e.g., Senior Capstone Project: Developed a recommendation system using machine learning)---Study Abroad (Optional): If applicable, mention any international study programs you participated in, highlighting the location and duration.",
  //   },
  //   experience: {
  //     experience1: {
  //       jobTitle: "Software Development Engineer - 2",
  //       employer: "Google",
  //       place: "Banglore",
  //       startDate: "2021-07-17",
  //       endDate: "2024-07-17",
  //       description:
  //         "SDE-2 is also commonly addressed as a Senior Software Engineer or Senior Member of Technical Staff in different organizations.---An SDE-2 by capacity is an individual contributor who works in a team.---When someone is hired as an SDE-2 or gets promoted to an SDE-2 role, it is expected that they have considerable experience and won't need much help in solving straightforward issues.---A Software Development Engineer-2 (or an E4 in the case of Meta) holds end-to-end service ownership in various product-based organizations.",
  //     },
  //     experience2: {
  //       jobTitle: "Senior FrontEnd Developer",
  //       employer: "Google",
  //       place: "Banglore",
  //       startDate: "2021-07-17",
  //       endDate: "2024-07-17",
  //       description:
  //         "Developing and maintaining complex web applications: This involves writing clean, efficient, and maintainable code using frameworks like React, Angular, or Vue.js, ensuring the application functions smoothly across different browsers and devices.---Collaborating with designers and back-end developers: Working closely with UI/UX designers to understand design goals and integrate them into the development process. Collaborating with back-end developers to ensure seamless integration between the front-end and back-end components.---Optimizing website performance and responsiveness: Implementing best practices for code optimization, performance tuning, and ensuring the website functions well on various devices and internet connection speeds.",
  //     },
  //     experience3: {
  //       jobTitle: "Research Intern",
  //       employer: "OpenAI",
  //       place: "Banglore",
  //       startDate: "2021-07-17",
  //       endDate: "2024-07-17",
  //       description:
  //         "Machine Learning Expertise: Trained various AI models, demonstrating an understanding of machine learning algorithms and techniques.---Database Management: Handled databases, showcasing proficiency in data storage, manipulation, and retrieval.---Data Analysis and Manipulation: Worked upon data, highlighting your ability to not only store and manage data, but also analyze and extract insights.---Problem-Solving and Adaptability: This overarching point summarizes the potential benefits of combining these skills. By mastering AI models, databases, and data analysis.",
  //     },
  //   },
  //   relevantCourses:
  //     "Frontend Web Development Mastery---SCSS Mastery---Web Design Mastery---Motion Graphics---Web Motions",
  //   certification:
  //     "Certified Web Professional - Web Developer---Certified Scrum Master (CSM)---Google Data Analytics Professional Certificate---Java Development Certified Professional---Certified Customer Service Specialist (CSS)---Certified Software Development Professional (CSDP)",
  //   project: {
  //     project1: {
  //       title: "RESTful API for a Social Networking Platform",
  //       description:
  //         "Design endpoints for user management, profile creation, and content sharing.---Implement authentication and authorization mechanisms to ensure data security and privacy.",
  //       position: "Project Lead",
  //     },
  //     project2: {
  //       title: "Content Management System (CMS) Interface:",
  //       description:
  //         "Managing complex data structures: Content in a CMS can be diverse, requiring you to design user-friendly interfaces for creating, editing, and organizing various types of content, like text, images, and multimedia elements.---Ensuring user experience and efficiency: The interface needs to be intuitive and efficient for users to manage content, including features like drag-and-drop editing, clear navigation, and search functionalities.",
  //       position: "Project Lead",
  //     },
  //   },
  //   socialLink: {
  //     link1: {
  //       label: "twitter",
  //       link: "twitter.com",
  //     },
  //     link2: {
  //       label: "linkedin",
  //       link: "linkedin.com",
  //     },
  //     link3: {
  //       label: "youtube",
  //       link: "youtube.com",
  //     },
  //     link4: {
  //       label: "behance",
  //       link: "behance.com",
  //     },
  //   },
  //   skills: "ReactJs---NextJs---TailwindCSS---Framer Motion---GSAP---SCSS",
  //   language: "Malayalam---English---Hindi---Marathi",
  // });

  const { user } = useContext(userEmailContext);
  const { currentResumeId, setCurrentResumeId } =
    useContext(currentResumeContext);

  const { resumeId } = useParams();
  Cookies.set("currentResumeId", resumeId);

  // printing userResumeData ---
  console.clear();
  console.log(user);
  console.log(userResumeData);
  console.log("RESUME ID --> " + resumeId);
  // ---------------------------

  const fetchData = () => {
    if (resumeId === "newResume") {
      setIsSaveButtonActive(true);
      setIsUpdateButtonActive(false);
      return;
    } else {
      setIsSaveButtonActive(false);
      setIsUpdateButtonActive(true);
      try {
        const response = axios
          .get(`${BASEURL}/api/getSingleData?id=${resumeId}`)
          .then((res) => setUserResumeData(res.data.data[0].data));
        // console.log(response);

        Cookies.set("currentResumeId", response.data.data._id);
      } catch (error) {
        // console.log(error.toJSON());
        console.log(error);
      }
    }
  };

  const updateResumeData = async (event) => {
    event.preventDefault();
    if (resumeId === "newResume") {
      return;
    } else {
      // console.log("update");
      try {
        const response = await axios.put(`${BASEURL}/api/updateSingleData`, {
          id: resumeId,
          data: userResumeData,
        });

        console.log("Data Updated!!!", response);
      } catch (error) {
        // console.log(error.toJSON());
        console.log(error);
      }
    }
  };

  const handleDataSubmission = async (event) => {
    event.preventDefault();
    if (resumeId === "newResume") {
      try {
        const response = await axios.post(`${BASEURL}/api/addData`, {
          userEmail: user,
          resumeTemplateRoute: "",
          data: userResumeData,
        });

        Cookies.set("currentResumeId", response.data.data._id);

        console.log("Post created:", response);

        console.log(currentResumeId);
      } catch (error) {
        // console.log(error.toJSON());
        console.log(error);
      }
    } else {
      return;
    }
  };

  const formatDate = (dateString) => {
    const formattedDateString = moment(dateString).format("YYYY-MM-DD");
    return formattedDateString;
  };

  const fillForm = () => {
    setUserResumeData({
      fileName: "Demo-file-demo-data",
      personalDetails: {
        jobTitle: "Frontend Developer",
        firstName: "Harikrishnan",
        lastName: "Prasannakumar",
        email: "hk17.dev@gmail.com",
        phone: "7776861386",
        website: "www.hk17.dev",
      },
      professionalSummary:
        "Highly motivated and results-oriented Software Development Engineer (SDE-3) with X years of experience in designing, developing, and deploying complex software solutions. Proven ability to lead and contribute to cross-functional teams, tackle challenging software problems, and deliver high-quality, scalable, and maintainable code. Possesses a strong understanding of system design principles and experience in owning and operating services within a product-based organization.",
      education: {
        college: "Universal College of Enginereing",
        degree: "B.Tech in Computer Engineering",
        place: "Vasai, Kaman",
        startDate: "2021-07-17",
        endDate: "2024-07-17",
        description:
          "University Name: Universal College of Engineering---Degree: B.Tech in Computer Engineering---Expected Graduation Date: July 2024---GPA (Optional): Include only if above 3.5 or within the honor roll range (e.g., July 2024 (Expected), GPA: 3.8)---Relevant Coursework (Optional): List a few key courses aligned with your target job. (e.g., Data Structures & Algorithms, Software Design Patterns, Computer Networks)---Honors & Awards (Optional): Mention any relevant academic achievements like scholarships, dean's list mentions, or competition awards.---Projects/Activities (Optional): Briefly describe any academic projects or extracurricular activities related to computer science that showcase your skills and interests. (e.g., Senior Capstone Project: Developed a recommendation system using machine learning)---Study Abroad (Optional): If applicable, mention any international study programs you participated in, highlighting the location and duration.",
      },
      experience: {
        experience1: {
          jobTitle: "Software Development Engineer - 2",
          employer: "Google",
          place: "Banglore",
          startDate: "2021-07-17",
          endDate: "2024-07-17",
          description:
            "SDE-2 is also commonly addressed as a Senior Software Engineer or Senior Member of Technical Staff in different organizations.---An SDE-2 by capacity is an individual contributor who works in a team.---When someone is hired as an SDE-2 or gets promoted to an SDE-2 role, it is expected that they have considerable experience and won't need much help in solving straightforward issues.---A Software Development Engineer-2 (or an E4 in the case of Meta) holds end-to-end service ownership in various product-based organizations.",
        },
        experience2: {
          jobTitle: "Senior FrontEnd Developer",
          employer: "Google",
          place: "Banglore",
          startDate: "2021-07-17",
          endDate: "2024-07-17",
          description:
            "Developing and maintaining complex web applications: This involves writing clean, efficient, and maintainable code using frameworks like React, Angular, or Vue.js, ensuring the application functions smoothly across different browsers and devices.---Collaborating with designers and back-end developers: Working closely with UI/UX designers to understand design goals and integrate them into the development process. Collaborating with back-end developers to ensure seamless integration between the front-end and back-end components.---Optimizing website performance and responsiveness: Implementing best practices for code optimization, performance tuning, and ensuring the website functions well on various devices and internet connection speeds.",
        },
        experience3: {
          jobTitle: "Research Intern",
          employer: "OpenAI",
          place: "Banglore",
          startDate: "2021-07-17",
          endDate: "2024-07-17",
          description:
            "Machine Learning Expertise: Trained various AI models, demonstrating an understanding of machine learning algorithms and techniques.---Database Management: Handled databases, showcasing proficiency in data storage, manipulation, and retrieval.---Data Analysis and Manipulation: Worked upon data, highlighting your ability to not only store and manage data, but also analyze and extract insights.---Problem-Solving and Adaptability: This overarching point summarizes the potential benefits of combining these skills. By mastering AI models, databases, and data analysis.",
        },
      },
      relevantCourses:
        "Frontend Web Development Mastery---SCSS Mastery---Web Design Mastery---Motion Graphics---Web Motions",
      certification:
        "Certified Web Professional - Web Developer---Certified Scrum Master (CSM)---Google Data Analytics Professional Certificate---Java Development Certified Professional---Certified Customer Service Specialist (CSS)---Certified Software Development Professional (CSDP)",
      project: {
        project1: {
          title: "RESTful API for a Social Networking Platform",
          description:
            "Design endpoints for user management, profile creation, and content sharing.---Implement authentication and authorization mechanisms to ensure data security and privacy.",
          position: "Project Lead",
        },
        project2: {
          title: "Content Management System (CMS) Interface:",
          description:
            "Managing complex data structures: Content in a CMS can be diverse, requiring you to design user-friendly interfaces for creating, editing, and organizing various types of content, like text, images, and multimedia elements.---Ensuring user experience and efficiency: The interface needs to be intuitive and efficient for users to manage content, including features like drag-and-drop editing, clear navigation, and search functionalities.",
          position: "Project Lead",
        },
      },
      socialLink: {
        link1: {
          label: "twitter",
          link: "twitter.com",
        },
        link2: {
          label: "linkedin",
          link: "linkedin.com",
        },
        link3: {
          label: "youtube",
          link: "youtube.com",
        },
        link4: {
          label: "behance",
          link: "behance.com",
        },
      },
      skills: "ReactJs---NextJs---TailwindCSS---Framer Motion---GSAP---SCSS",
      language: "Malayalam---English---Hindi---Marathi",
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center border-white pb-5">
      <Toaster position="bottom-right" reverseOrder={false} />
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
      <div className="relative flex w-full max-w-[800px] flex-col items-center justify-center gap-5 px-5 py-10">
        <div
          className="absolute -right-80 top-10 flex h-[87px] w-[87px] cursor-pointer items-center justify-center rounded-full  bg-purple-700"
          onClick={() => fillForm()}
        >
          <img
            className="h-[80px] w-[80px] cursor-pointer rounded-full bg-purple-700"
            onClick={() => fillForm()}
            src="https://www.meme-arsenal.com/memes/a94130763269dfa2d1ab6499983948ea.jpg"
            alt=""
          />
        </div>
        <div className="group w-full rounded-xl bg-[#040a1a] p-6">
          <div className="flex w-full flex-col items-start justify-center gap-1">
            <label className="font-bold" htmlFor="">
              File Name
            </label>
            <input
              type="text"
              maxLength="35"
              placeholder="Enter file name"
              className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              value={userResumeData.fileName}
              onChange={(e) =>
                setUserResumeData((prev) => ({
                  ...prev,
                  fileName: e.target.value,
                }))
              }
            />
          </div>
        </div>
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
                value={userResumeData.personalDetails.jobTitle}
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
                value={userResumeData.personalDetails.firstName}
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
                value={userResumeData.personalDetails.lastName}
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
                value={userResumeData.personalDetails.email}
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
                value={userResumeData.personalDetails.phone}
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
                type="url"
                placeholder="e.g. www.sample.com"
                className="w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
                value={userResumeData.personalDetails.website}
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
                value={userResumeData.professionalSummary}
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
                value={userResumeData.education.college}
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
                value={userResumeData.education.degree}
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
                value={userResumeData.education.place}
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
                value={formatDate(userResumeData.education.startDate)}
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
                value={formatDate(userResumeData.education.endDate)}
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
                  value={userResumeData.education.description}
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
                  value={userResumeData.experience.experience1.jobTitle}
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
                  value={userResumeData.experience.experience1.employer}
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
                  value={userResumeData.experience.experience1.place}
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
                  value={formatDate(
                    userResumeData.experience.experience1.startDate,
                  )}
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
                  value={formatDate(
                    userResumeData.experience.experience1.endDate,
                  )}
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
                    value={userResumeData.experience.experience1.description}
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
                  value={userResumeData.experience.experience2.jobTitle}
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
                  value={userResumeData.experience.experience2.employer}
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
                  value={userResumeData.experience.experience2.place}
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
                  value={formatDate(
                    userResumeData.experience.experience2.startDate,
                  )}
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
                  value={formatDate(
                    userResumeData.experience.experience2.endDate,
                  )}
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
                    value={userResumeData.experience.experience2.description}
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
                  value={userResumeData.experience.experience3.jobTitle}
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
                  value={userResumeData.experience.experience3.employer}
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
                  value={userResumeData.experience.experience3.place}
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
                  value={formatDate(
                    userResumeData.experience.experience3.startDate,
                  )}
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
                  value={formatDate(
                    userResumeData.experience.experience3.endDate,
                  )}
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
                    value={userResumeData.experience.experience3.description}
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
          <div className="mt-5 flex w-full flex-col items-start justify-center gap-1">
            <textarea
              placeholder="Enter your skills"
              className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              value={userResumeData.relevantCourses}
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
          <div className="mt-5 flex w-full flex-col items-start justify-center gap-1">
            <textarea
              placeholder="Enter your skills"
              className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              value={userResumeData.certification}
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
                value={userResumeData.project.project1.title}
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
                value={userResumeData.project.project1.position}
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
                  value={userResumeData.project.project1.description}
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
                value={userResumeData.project.project2.title}
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
                value={userResumeData.project.project2.position}
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
                  value={userResumeData.project.project2.description}
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
                  value={userResumeData.socialLink.link1.label}
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
                  value={userResumeData.socialLink.link1.link}
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
                  value={userResumeData.socialLink.link2.label}
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
                  value={userResumeData.socialLink.link2.link}
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
                  value={userResumeData.socialLink.link3.label}
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
                  value={userResumeData.socialLink.link3.link}
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
                  value={userResumeData.socialLink.link4.label}
                  onChange={(e) => {
                    setUserResumeData((prev) => ({
                      ...prev,
                      socialLink: {
                        ...prev.socialLink,
                        link4: {
                          ...prev.socialLink.link4,
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
                  value={userResumeData.socialLink.link4.link}
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
          <div className="mt-5 flex w-full flex-col items-start justify-center gap-1">
            <textarea
              placeholder="Enter your skills"
              className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              value={userResumeData.skills}
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
          <div className="mt-5 flex w-full flex-col items-start justify-center gap-1">
            <textarea
              placeholder="Enter the languages"
              className="h-[130px] w-full rounded-xl border border-[#0a1846] bg-[#040a1a] py-3 pl-5 text-white placeholder:text-[#22283b] focus:border-none focus:outline focus:outline-purple-500"
              value={userResumeData.language}
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
      <div className="flex w-[760px] items-center justify-between">
        <button
          onClick={
            resumeId !== "newResume"
              ? null
              : (event) => {
                  handleDataSubmission(event);
                  toast.success("Resume Data Saved successfully");
                }
          }
          // className="w-[200px] rounded-lg bg-purple-500 py-2 text-sm font-semibold"
          className={
            isSaveButtonActive
              ? "w-[200px] rounded-lg bg-purple-500 py-2 text-sm font-semibold"
              : "w-[200px] cursor-not-allowed rounded-lg bg-purple-500 py-2 text-sm font-semibold opacity-80"
          }
        >
          Save
        </button>
        <button
          onClick={
            resumeId === "newResume"
              ? null
              : (event) => {
                  updateResumeData(event);
                  toast.success("Resume Data Updated successfully");
                }
          }
          className={
            isUpdateButtonActive
              ? "w-[200px] rounded-lg bg-purple-500 py-2 text-sm font-semibold"
              : "w-[200px] cursor-not-allowed rounded-lg bg-purple-500 py-2 text-sm font-semibold opacity-80"
          }
        >
          Update
        </button>
        <Link
          to="/templates"
          className="w-[200px] rounded-lg bg-purple-500 py-2 text-center text-sm font-semibold"
        >
          Select Template
        </Link>
      </div>
    </div>
  );
};

export default Information;
