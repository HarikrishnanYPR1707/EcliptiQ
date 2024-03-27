import gsap from "gsap";
import { useContext, useLayoutEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillFileLock2Fill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { LuFileSpreadsheet } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import {
  userDataContext,
  isUserLoginContext,
} from "@/Contexts/userDataContext";
import { auth } from "@/config/Firebase";

const Home = () => {
  const { user, setUser } = useContext(userDataContext);
  const { isLogin, setIsLogin } = useContext(isUserLoginContext);
  // console.log({ user, setUser });
  const navigate = useNavigate();
  console.log({ isLogin: isLogin });

  // useLayoutEffect(() => {
  //   const context = gsap.context(() => {
  //     let timeline = gsap.timeline();

  //     timeline
  //       .from("#char", {
  //         top: "100%",
  //         duration: 0.8,
  //         stagger: 0.2,
  //       })
  //       .from("#progressBar", {
  //         width: 0,
  //         duration: 1.5,
  //       })
  //       .to("#intro-slider", {
  //         xPercent: "-100",
  //         duration: 0.8,
  //       });
  //   });

  //   return () => context.revert();
  // }, []);

  return (
    <div className="gap-20">
      {/* preloader */}
      {/* <div
        id="intro-slider"
        className="absolute inset-0 top-0 z-30 flex flex-col items-center justify-center bg-[#030712] font-honk text-3xl font-black"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="relative h-[130px] w-[470px] overflow-hidden text-9xl uppercase [&>*:nth-child(1)]:left-0 [&>*:nth-child(2)]:left-[63px] [&>*:nth-child(3)]:left-[126px] [&>*:nth-child(4)]:left-[189px] [&>*:nth-child(5)]:left-[224px] [&>*:nth-child(6)]:left-[292px] [&>*:nth-child(7)]:left-[360px] [&>*:nth-child(8)]:left-[394px]">
            {"Ecliptiq".split("").map((char, idx) => (
              <span key={idx} id="char" className="absolute">
                {char}
              </span>
            ))}
          </p>
          <div id="progressBar" className="h-[2px] w-full bg-purple-500" />
        </div>
      </div> */}
      <main className="relative flex flex-col items-center justify-center">
        <div className="mx-32 flex flex-col items-center justify-center text-center">
          {/* HERO SECTION  */}
          <div className="flex w-[1200px] flex-col items-center justify-center px-10 pt-10">
            <p className="text-purple-500">Online Resume Creator</p>
            <h1 className="pt-2 text-5xl font-black">
              Your resume is your first impression on a potential employer.
              <span className="text-purple-500"> Make it count.</span>
            </h1>
            <h2 className="pt-5 text-xl">
              Create your professional resume in 5 minutes.
            </h2>
            <div className="flex items-center justify-center gap-10">
              <button
                className="mt-5 w-[250px] rounded-2xl bg-purple-500 py-5 font-bold text-white hover:bg-purple-600"
                onClick={() => {
                  isLogin ? navigate("/information") : alert("Please Login");
                }}
              >
                Create Your Resume
              </button>
              <button
                className="mt-5 w-[250px] rounded-2xl bg-purple-500 py-5 font-bold text-white hover:bg-purple-600"
                onClick={() => {
                  isLogin ? navigate("/keyword") : alert("Please Login");
                }}
              >
                Keyword
              </button>
            </div>
          </div>

          {/* WHY CHOOSE US --> SECTION */}
          <div className="mt-5 flex w-[1200px] flex-col items-center justify-center p-10">
            <div className="text-purple-500">PROFESSIONAL RESUME BUILDER</div>
            <div className="mt-2 text-4xl font-black">Win your dream job</div>
            <div className="grid grid-cols-2 gap-4 p-5">
              <div className="flex items-start justify-center gap-4">
                <div className="grid aspect-square w-[50px] place-content-center rounded-xl bg-purple-500">
                  <LuFileSpreadsheet className="text-2xl font-bold text-white" />
                </div>
                <div className="text-left">
                  <p className="text-base font-black">
                    Create resume with ease
                  </p>
                  <p className="text-sm">
                    Build your resume online in minutes without even leaving
                    your web browser.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-center gap-4">
                <div className="grid aspect-square w-[70px] place-content-center rounded-xl bg-purple-500">
                  <AiFillCheckCircle className="text-2xl font-bold text-white" />
                </div>
                <div className="text-left">
                  <p className="text-base font-black">
                    Professionally approved templates
                  </p>
                  <p className="text-sm">
                    Our well designed resume templates are approved by
                    professionals. Your resume is ready in 5 minutes.
                  </p>
                </div>
              </div>
              <div className="col-span-2 flex items-start justify-center gap-4">
                <div className="grid aspect-square w-[50px] place-content-center rounded-xl bg-purple-500">
                  <FaDownload className="text-2xl font-bold text-white" />
                </div>
                <div className="text-left">
                  <p className="text-base font-black">Download as PDF</p>
                  <p className="text-sm">
                    Download your resume in PDF and other common formats with
                    just a click.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* INFORAMTION 1 --> SECTION */}
          <div className="mt-5 flex w-[1200px] items-center justify-center gap-8 p-10 text-left">
            <img
              className="w-[520px]"
              loading="lazy"
              width="100"
              height="100"
              src="/img1.svg"
              alt="EcliptiQ Resume Example"
            />
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-base text-purple-500">RESUME MAKER</h2>
              <h1 className="text-4xl font-black">
                Building a h1 Resume is the First Step Toward a{" "}
                <span className="text-purple-500">Successful Career.</span>
              </h1>
              <button
                className="mt-5 w-[250px] rounded-2xl bg-purple-500 py-5 font-bold text-white hover:bg-purple-600"
                onClick={() => {
                  isLogin ? navigate("/information") : alert("Please Login");
                }}
              >
                Create Your Resume
              </button>
              <p className="mb-4 text-lg font-medium">
                Your resume is the initial document that reaches the HR
                recruiter's desk before you have the opportunity to meet them in
                person for an interview, when pursuing your dream job.
              </p>
              <p className="text-DarkGray text-base">
                Given that in the absence of a direct in-person interaction to
                experience your engaging personality, h1 dedication to work, and
                seamless team compatibility, your resume serves as your
                representative and must effectively convey these qualities.
                <br />
                That's why it's crucial for your resume to effectively convey
                your identity, highlight your unique skills and contributions,
                and compel them to reach out and invite you for an interview
                without hesitation.
                <br />
                EcliptiQ ensures that your resume doesn't get lost in the stack;
                instead, it grabs recruiters' attention and stands out.
              </p>
            </div>
          </div>

          {/* INFORAMTION 1 --> SECTION */}
          <div className="mt-5 flex w-[1200px] items-center justify-center gap-8 p-10 text-left">
            <div className="flex flex-col items-start justify-center">
              <h2 className="text-base text-purple-500">
                FREE RESUME TEMPLATES
              </h2>
              <h1 className="text-4xl font-black">
                Maximizing Your{" "}
                <span className="text-purple-500">Initial Impact.</span>
              </h1>
              <button
                className="mt-5 w-[250px] rounded-2xl bg-purple-500 py-5 font-bold text-white hover:bg-purple-600"
                onClick={() => {
                  isLogin ? navigate("/information") : alert("Please Login");
                }}
              >
                Create Your Resume
              </button>
              <p className="mb-4 text-lg font-medium">
                Recruiters typically dedicate just six seconds to review your
                resume, a particularly critical factor in highly competitive job
                markets where numerous candidates vie for coveted positions.
              </p>
              <p className="text-DarkGray text-base">
                EcliptiQ empowers you to craft a polished and effective resume
                with the professionalism that makes every second matter. With
                features like optimized white space, well-structured columns,
                and clear, reader-friendly headings, our tools guarantee a
                precise representation of your skills and abilities in each
                section. What sets us apart is the speed, ease, and readiness it
                provides for your journey into a new career.
              </p>
            </div>
            <img
              className="w-[520px]"
              loading="lazy"
              width="100"
              height="100"
              src="/img2.svg"
              alt="EcliptiQ Resume Example"
            />
          </div>

          {/* FREQUENTLY ASKED QUESTION */}
          <div className="my-10 w-[1200px] divide-y divide-gray-200  px-8 py-16">
            <h2 className=" text-left text-3xl font-bold tracking-tight text-purple-500">
              Frequently asked questions
            </h2>
            <div className="mt-8">
              <dl className="divide-y divide-gray-200">
                <div className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-purple-900 md:col-span-5">
                    Can I use EcliptiQ for free?
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-300">
                      Absolutely! EcliptiQ has lots of different tools you can
                      use for free.
                    </p>
                  </dd>
                </div>
                <div className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-purple-900 md:col-span-5">
                    Can I customize my resume?
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-300">
                      We have professionally built templates that are designed
                      to adapt to your content.
                    </p>
                  </dd>
                </div>
                <div className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-purple-900 md:col-span-5">
                    Can I download my resume as PDF?
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-300">
                      Yes! After you complete your resume you will be able to
                      download it as PDF with ease.
                    </p>
                  </dd>
                </div>
                <div className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8">
                  <dt className="text-base font-medium text-purple-900 md:col-span-5">
                    How can I cancel my account?
                  </dt>
                  <dd className="mt-2 md:col-span-7 md:mt-0">
                    <p className="text-base text-gray-300">
                      After login, you can easily manage everything account
                      related in your "Account Settings" page.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Call To Action */}
          <div className="mx-auto flex w-[1200px] items-center justify-between px-8 py-16">
            <h2 className="text-left text-3xl font-bold tracking-tight text-gray-800">
              Ready to dive in?
              <br />
              <span className="text-purple-500">Create your resume today.</span>
            </h2>
            <div className="mt-8 flex">
              <button
                className="mt-5 w-[250px] rounded-2xl bg-purple-500 py-5 font-bold text-white hover:bg-purple-600"
                onClick={() => {
                  isLogin ? navigate("/information") : alert("Please Login");
                }}
              >
                Create Your Resume
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
