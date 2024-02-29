import { Link } from "react-router-dom";
import BankingEntryLevel from "../assets/Banking/Banking-Entry-Level.jpeg";
import BankingMidLevel from "../assets/Banking/Banking-Mid-Career.jpeg";
import BankingSeniorLevel from "../assets/Banking/Banking-Senior-Level.jpeg";
import DAEntryLevel from "../assets/DataAnalyst/Data-Analyst-Entry-Level.png";
import DAMidLevel from "../assets/DataAnalyst/Data-Analyst-Junior-Level.png";
import DASeniorLevel from "../assets/DataAnalyst/Data-Analyst-Senior-Level.png";
import SDEEntryLevel from "../assets/SDE/SDE-Entry-Level.png";
import SDEMidLevel from "../assets/SDE/SDE-Junior-Level.jpg";
import SDESeniorLevel from "../assets/SDE/SDE-Senior-Level.png";

const Template = () => {
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
                <Link to="">
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
                <Link to="">
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
                <Link to="">
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
                <Link to="">
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
                <Link to="">
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
                <Link to="">
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
