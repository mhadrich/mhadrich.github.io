import React from "react";

function SingleView({ data }) {
  return (
    <div className=" flex flex-col gap-4">
      <a
        className="w-96 h-96 relative overflow-hidden rounded-3xl drop-shadow-sm items-center justify-center flex hover:drop-shadow-xl hover:rounded-xl transition-all duration-700"
        target="_blank"
        rel="noreferrer"
        href={data.link}
      >
        <div className="group">
          <img
            className="absolute scale-[2] brightness-95 blur-[10px] group-hover:brightness-100 transition-all duration-1000"
            alt={data.title}
            src={data.image}
          />
          <img
            className="brightness-95 blur-[1px] group-hover:brightness-100 group-hover:blur-none group-hover:scale-[1.1] transition-all duration-1000 ease-in-out"
            alt={data.title}
            src={data.image}
          />
        </div>
      </a>
      <div className="flex flex-col ">
        <text className="dark:text-white text-3xl font-medium font-['Lora']">
          {data.title}
        </text>
        <text className="dark:text-white text-sm font-light font-['Open Sans']">
          {data.description}
        </text>
      </div>
    </div>
  );
}

export default SingleView;
