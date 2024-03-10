import { Link } from "react-router-dom";
import BankingEntryLevel from "../assets/images/Banking/Banking-Entry-Level.jpeg";
import BankingMidLevel from "../assets/images/Banking/Banking-Mid-Career.jpeg";
import BankingSeniorLevel from "../assets/images/Banking/Banking-Senior-Level.jpeg";
import DAEntryLevel from "../assets/images/DataAnalyst/Data-Analyst-Entry-Level.png";
import DAMidLevel from "../assets/images/DataAnalyst/Data-Analyst-Junior-Level.png";
import DASeniorLevel from "../assets/images/DataAnalyst/Data-Analyst-Senior-Level.png";
import SDEEntryLevel from "../assets/images/SDE/SDE-Entry-Level.png";
import SDEMidLevel from "../assets/images/SDE/SDE-Junior-Level.jpg";
import SDESeniorLevel from "../assets/images/SDE/SDE-Senior-Level.png";

const Template = () => {
  const userResumeData = {
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
  };

  localStorage.setItem("userResumeData", JSON.stringify(userResumeData));

  return (
    <section className="h-full">
      {/* ---------------------------- NEW DESIGN ---------------------------- */}
      {/* header section */}
      <div className="relative bg-banner bg-cover bg-center py-14">
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 mx-auto flex w-full max-w-[650px] flex-col items-center justify-center">
          <h1 className="mb-2 text-4xl font-black lg:text-5xl">
            Resume Template
          </h1>
          <p className="text-balance text-center text-xs text-gray-400 lg:text-base">
            Discover our diverse resume templates tailored for every career
            stage, from sleek modern layouts to classic designs. Choose with
            confidence, whether you're starting your journey or a seasoned pro,
            and elevate your application with professionally crafted resumes.
          </p>
        </div>
      </div>

      {/* ---------------------- TEMPLATE SELECTION SECTION ---------------------- */}
      <div className="mx-auto my-5 w-full max-w-[1000px]">
        {/* ---------------- Software Development Engineer Section ---------------- */}
        <div className="">
          {/* header section */}
          <div className="relative mb-5 flex h-[70px] items-center justify-center bg-banner bg-cover bg-center underline">
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <h1 className="relative text-center text-2xl font-black sm:text-3xl lg:text-4xl">
              Software Development Engineer
            </h1>
          </div>
          {/* template section */}
          <div className="flex flex-none flex-wrap justify-center gap-8">
            {/* template-1 */}
            <div className="w-[300px]">
              <div className="overflow-hidden rounded-2xl">
                <Link to="/templates/sde/elr">
                  <img src={SDEEntryLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold uppercase">
                  Entry level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Introducing our sleek entry-level Software Development
                  Engineer resume template, crafted to impress with its modern
                  and polished design.
                </p>
              </div>
            </div>
            {/* template-2 */}
            <div className="flex w-[300px] flex-col items-center justify-center">
              <div className="w-[275px] overflow-hidden rounded-2xl">
                <Link to="/templates/sde/jlr">
                  <img src={SDEMidLevel} alt="" />
                </Link>
              </div>
              <div className="w-[275px]">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold uppercase">
                  Junior level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Unlock your potential with our junior-level Software
                  Development Engineer resume template, designed to captivate
                  with its professional and contemporary layout.
                </p>
              </div>
            </div>
            {/* template-3 */}
            <div className="w-[300px]">
              <div className="overflow-hidden rounded-2xl">
                <Link to="/templates/sde/slr">
                  <img src={SDESeniorLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold uppercase">
                  Senior level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Elevate your career with our sophisticated senior-level
                  Software Development Engineer resume template, exuding
                  professionalism and refinement in design.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------- Data Analyst Section ---------------- */}
        <div className="mt-5">
          {/* header section */}
          <div className="relative mb-5 flex h-[70px] items-center justify-center bg-banner bg-cover bg-center underline">
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <h1 className="relative text-center text-2xl font-black sm:text-3xl lg:text-4xl">
              Data Analyst
            </h1>
          </div>
          {/* template section */}
          <div className="flex flex-none flex-wrap justify-center gap-8">
            {/* template-1 */}
            <div className="w-[300px]">
              <div className="overflow-hidden rounded-2xl">
                <Link to="/templates/da/elr">
                  <img src={DAEntryLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold uppercase">
                  Entry level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Showcase your potential with our sleek entry-level Data
                  Analyst resume template, designed to impress with its modern
                  and professional aesthetic.
                </p>
              </div>
            </div>
            {/* template-2 */}
            <div className="w-[300px]">
              <div className="overflow-hidden rounded-2xl">
                <Link to="/templates/da/jlr">
                  <img src={DAMidLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold uppercase">
                  Junior level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Elevate your career with our polished junior-level Data
                  Analyst resume template, boasting a modern and captivating
                  design.
                </p>
              </div>
            </div>
            {/* template-3 */}
            <div className="w-[300px]">
              <div className="overflow-hidden rounded-2xl">
                <Link to="/templates/da/slr">
                  <img src={DASeniorLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold uppercase">
                  Senior level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Illuminate your expertise with our sophisticated senior-level
                  Data Analyst resume template, radiating professionalism and
                  refinement.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------- Banking Section ---------------- */}
        <div className="mt-5">
          {/* header section */}
          <div className="relative mb-5 flex h-[70px] items-center justify-center bg-banner bg-cover bg-center underline">
            <div className="absolute inset-0 bg-black bg-opacity-60" />
            <h1 className="relative text-center text-2xl font-black sm:text-3xl lg:text-4xl">
              Banking
            </h1>
          </div>
          {/* template section */}
          <div className="flex flex-none flex-wrap justify-center gap-8">
            {/* template-1 */}
            <div className="w-[300px]">
              <div className="overflow-hidden rounded-2xl">
                <Link to="/templates/bk/elr">
                  <img src={BankingEntryLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold uppercase">
                  Entry level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Presenting a sleek and professional entry-level banking resume
                  template, designed to catch the eye of employers with its
                  modern layout and polished appearance.
                </p>
              </div>
            </div>
            {/* template-2 */}
            <div className="w-[300px]">
              <div className="overflow-hidden rounded-2xl">
                <Link to="/templates/bk/jlr">
                  <img src={BankingMidLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold uppercase">
                  Junior level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Stand out with our visually striking junior-level banking
                  resume template, designed to captivate recruiters with its
                  polished and professional appearance.
                </p>
              </div>
            </div>
            {/* template-3 */}
            <div className="w-[300px]">
              <div className="overflow-hidden rounded-2xl">
                <Link to="/templates/bk/slr">
                  <img src={BankingSeniorLevel} alt="" />
                </Link>
              </div>
              <div className="">
                <div className="my-2 w-fit rounded-md bg-purple-500 px-3 py-1 text-xs font-bold uppercase">
                  Senior level Resume
                </div>
                <p className="text-sm text-gray-500">
                  Impress with our sophisticated senior-level banking resume
                  template, exuding professionalism and elegance for seasoned
                  professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;
