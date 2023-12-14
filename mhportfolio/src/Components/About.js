import React, { useState } from "react";
import Experience from "../assets/Experience.json";
import Education from "../assets/Education.json";
import CV from "../assets/Malek-Hadrich-CV.pdf";
import Rating from "react-rating";

function About() {
  const categories = ["Skills", "Experience", "Education"];
  const Skills = [
    ["After Effects", "5"],
    ["Photoshop", "5"],
    ["Illustrator", "4"],
    ["Premiere", "4"],
    ["Figma", "4"],
    ["Davinci", "4"],
    ["Tailwind", "4"],
    ["CSS", "3"],
    ["Javascript", "4"],
    ["Typescript", "3"],
    ["HTML", "3"],
    ["React", "4"],
    ["Next 13", "3"],
    ["Rest API", "3"],
    ["SQL", "3"],
    ["Scrum", "4"],
    ["Agile", "5"],
  ];
  const [clicked, setClicked] = useState("Experience");
  return (
    <div className="flex flex-col bg-[#f9f9f9] dark:bg-tertiary p-20 items-center justify-center gap-20">
      <div className="flex flex-col gap-6 justify-center items-center">
        <text className="dark:text-white text-5xl font-base font-['Lora']">
          About
        </text>
        <text className="w-[100%] text-center dark:text-white font-normal font-['Open Sans'] leading-relaxed">
          A brief presentation of skills, experience and education.
          <br />
          You can also download my Resume using the button below
        </text>
        <button className="w-48 h-12 bg-secondary rounded-3xl justify-center items-center flex hover:bg-highlight duration-1000">
          <a
            href={CV}
            download="Malek-Hadrich-CV"
            target="_blank"
            className="a-base font-semibold font-['Open Sans']"
          >
            Download CV
          </a>
        </button>
      </div>
      <div className="w-[80%] inline-flex justify-between items-center">
        {categories.map((item, key) => {
          return (
            <div key={key}>
              {clicked !== item && (
                <button
                  onClick={() => {
                    setClicked(item);
                  }}
                  className="w-80 dark:text-white text-3xl font-medium font-['Lora']"
                >
                  {item}
                </button>
              )}
              {clicked === item && (
                <div className="flex-col flex gap-1">
                  <button className="text-secondary text-3xl font-medium font-['Lora']">
                    {item}
                  </button>
                  <div className="border-t border-secondary w-80" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {clicked === "Experience" && (
        <div className="w-[100%] px-20">
          {Experience &&
            Experience.map((element, key) => {
              return (
                <div className="w-full" key={key}>
                  <div className="w-full py-10 inline-flex justify-between items-start">
                    <div className="flex flex-col">
                      <text className="w-60 dark:text-white font-thin font-['Open Sans']">
                        {element.period}
                      </text>
                      <text className="dark:text-white text-3xl font-light font-['Lora']">
                        {element.location}
                      </text>
                    </div>
                    <text className="w-80 dark:text-white text-3xl font-medium font-['Lora']">
                      {element.position}
                    </text>
                    <div className="flex flex-col">
                      {element.description.split("\n").map((e, i) => (
                        <text
                          key={i}
                          className="w-96 dark:text-white text- font-normal font-['Open Sans']"
                        >
                          {e}
                        </text>
                      ))}
                    </div>
                  </div>
                  {key !== Experience.length - 1 && (
                    <div className="border-t" />
                  )}
                </div>
              );
            })}
        </div>
      )}
      {clicked === "Skills" && (
        <div className="w-[100%] grid grid-cols-3">
          {Skills &&
            Skills.map((element, key) => {
              return (
                <div className="group">
                  <div
                    className="items-center justify-center flex flex-col my-14"
                    key={key}
                  >
                    <text className="dark:text-white text-center text-2xl font-medium font-['Open Sans']  group-hover:text-3xl duration-1000 ease-in-out">
                      {element[0]}
                    </text>
                    <div className="scale-50 dark:invert opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                      <Rating initialRating={element[1]} readonly={true} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      {clicked === "Education" && (
        <div className="w-[100%]">
          {Education &&
            Education.map((element, key) => {
              return (
                <div className="w-full" key={key}>
                  <div className="w-full py-10 inline-flex justify-between items-center">
                    <text className="w-60 text-start dark:text-white text-xl font-thin font-['Open Sans']">
                      {element.period}
                    </text>
                    <text className="w-[90%] text-center dark:text-white text-2xl font-medium font-['Lora']">
                      {element.degree}
                    </text>
                    <text className="w-60 text-end dark:text-white text-lg font-thin font-['Open Sans']">
                      {element.status}
                    </text>
                    <div className="flex flex-col"></div>
                  </div>
                  {key !== Education.length - 1 && <div className="border-t" />}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default About;
