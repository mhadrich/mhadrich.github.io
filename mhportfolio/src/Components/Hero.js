import React from "react";
import portrait from "../assets/_G5A0025.png";

function Hero() {
  return (
    <div className="dark:bg-black py-[8%] w-screen px-20 inline-flex items-center justify-between">
      <div className="flex flex-col gap-6">
        <text className="dark:text-white w-[50%] text-8xl font-medium font-['Lora']">
          Hey There, I’m Malek
        </text>
        <text className="w-[50%] dark:text-white font-light font-['Open Sans']">
          An experienced visual content producer, Full-stack Developer with a
          passion to learn and desire to innovate. Always on the lookout for new
          challenges, and excited to be part of a team that can push the limits
          of what’s possible.
        </text>
        <div className="flex flex-row gap-6">
          <div className="w-48 h-12 p-2 bg-secondary rounded-3xl justify-center items-center flex hover:rounded-xl duration-1000">
            <text className="text-black text-base font-semibold font-['Open Sans']">
              Say Hello
            </text>
          </div>
          <div className="w-48 h-12 p-2 rounded-3xl border border-black dark:border-secondary justify-center hover:rounded-xl duration-1000 items-center gap-1 inline-flex">
            <text className="dark:text-secondary text-base font-semibold font-['Open Sans']">
              Explore Project
            </text>
          </div>
        </div>
      </div>
      <div className="flex">
        {/* THE IMAGE */}
        <div className="mx-20 bg-primary rounded-full flex-col justify-end items-center inline-flex">
          <img className="rounded-full" src={portrait} alt="portrait" />
        </div>
        {/* THE IMAGE */}
        <div className=" absolute w-[25%] h-[57%] inline-flex justify-between items-center">
          <div className="flex flex-col justify-between h-[60%]">
            {/* UI/UX */}
            <div className="flex flex-row gap-4 shadow-2xl bg-[#f9f9f9] dark:bg-tertiary w-36 h-20 left-10 rounded-2xl items-center justify-center">
              <div className="fill-white w-8 h-8 flex bg-primary rounded-full justify-center items-center">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <g clip-path="url(#clip0_204_14)">
                    <path d="M17.5 15.8334C17.7124 15.8336 17.9167 15.9149 18.0711 16.0607C18.2256 16.2066 18.3185 16.4058 18.331 16.6179C18.3434 16.8299 18.2744 17.0387 18.1381 17.2016C18.0018 17.3644 17.8084 17.4691 17.5975 17.4942L17.5 17.5H2.5C2.2876 17.4998 2.08331 17.4185 1.92886 17.2727C1.77441 17.1269 1.68147 16.9276 1.66902 16.7155C1.65658 16.5035 1.72556 16.2947 1.86189 16.1318C1.99821 15.969 2.19159 15.8643 2.4025 15.8392L2.5 15.8334H17.5ZM15.8333 3.33337C16.2538 3.33324 16.6588 3.49205 16.9671 3.77795C17.2754 4.06386 17.4643 4.45574 17.4958 4.87504L17.5 5.00004V13.3334C17.5001 13.7539 17.3413 14.1588 17.0554 14.4672C16.7695 14.7755 16.3776 14.9643 15.9583 14.9959L15.8333 15H4.16667C3.74619 15.0002 3.3412 14.8414 3.03288 14.5555C2.72456 14.2696 2.5357 13.8777 2.50417 13.4584L2.5 13.3334V5.00004C2.49987 4.57956 2.65867 4.17457 2.94458 3.86625C3.23049 3.55793 3.62237 3.36908 4.04167 3.33754L4.16667 3.33337H15.8333Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_204_14">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <text className="dark:text-white text-sm font-['Open Sans']">
                UI/UX
                <br /> Designer
              </text>
            </div>
            {/* UI/UX */}
            {/* YEARS OF XP */}
            <div className="flex flex-row gap-2 shadow-2xl bg-[#f9f9f9] dark:bg-tertiary w-40 h-20 rounded-2xl items-center justify-center">
              <text className="dark:text-white  text-3xl font-['Lora']">
                12
              </text>
              <text className="dark:text-white text-sm font-['Open Sans']">
                Years of
                <br /> Experience
              </text>
            </div>
            {/* YEARS OF XP */}
          </div>
          {/* JS DEV */}
          <div className="flex flex-col gap-2 shadow-2xl bg-[#f9f9f9] dark:bg-tertiary w-32 h-28 rounded-2xl items-center justify-center">
            <div className="fill-white w-8 h-8 flex bg-primary rounded-full justify-center items-center">
              <svg width="20" height="20" viewBox="0 0 20 20">
                <g clip-path="url(#clip0_204_14)">
                  <path d="M17.5 15.8334C17.7124 15.8336 17.9167 15.9149 18.0711 16.0607C18.2256 16.2066 18.3185 16.4058 18.331 16.6179C18.3434 16.8299 18.2744 17.0387 18.1381 17.2016C18.0018 17.3644 17.8084 17.4691 17.5975 17.4942L17.5 17.5H2.5C2.2876 17.4998 2.08331 17.4185 1.92886 17.2727C1.77441 17.1269 1.68147 16.9276 1.66902 16.7155C1.65658 16.5035 1.72556 16.2947 1.86189 16.1318C1.99821 15.969 2.19159 15.8643 2.4025 15.8392L2.5 15.8334H17.5ZM15.8333 3.33337C16.2538 3.33324 16.6588 3.49205 16.9671 3.77795C17.2754 4.06386 17.4643 4.45574 17.4958 4.87504L17.5 5.00004V13.3334C17.5001 13.7539 17.3413 14.1588 17.0554 14.4672C16.7695 14.7755 16.3776 14.9643 15.9583 14.9959L15.8333 15H4.16667C3.74619 15.0002 3.3412 14.8414 3.03288 14.5555C2.72456 14.2696 2.5357 13.8777 2.50417 13.4584L2.5 13.3334V5.00004C2.49987 4.57956 2.65867 4.17457 2.94458 3.86625C3.23049 3.55793 3.62237 3.36908 4.04167 3.33754L4.16667 3.33337H15.8333Z" />
                </g>
                <defs>
                  <clipPath id="clip0_204_14">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <text className="w-24 dark:text-white text-sm text-center font-['Open Sans']">
              Full-Stack JS Developper
            </text>
          </div>
          {/* JS DEV */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
