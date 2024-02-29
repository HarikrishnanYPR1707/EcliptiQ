import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      let timeline = gsap.timeline();

      timeline
        .from("#char", {
          top: "100%",
          duration: 0.8,
          stagger: 0.2,
        })
        .from("#progressBar", {
          width: 0,
          duration: 1.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 0.8,
        });
    });

    return () => context.revert();
  }, []);

  return (
    <div className="h-heightWithoutNavbar border">
      <div
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
      </div>
      home page
      <Link to="/informations">
        <button className="rounded-xl bg-purple-500 px-3 py-2 font-black uppercase">
          Create your resume
        </button>
      </Link>
    </div>
  );
};

export default Home;
