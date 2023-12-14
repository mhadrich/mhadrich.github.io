import React from "react";

function SingleView({ data }) {
  return (
    <div className=" flex flex-col gap-4">
      <a
        className="w-80 h-80 relative overflow-hidden rounded-3xl items-center justify-center flex hover:scale-[1.] hover:rounded-xl transition-all duration-700"
        target="_blank"
        rel="noreferrer"
        href={data.link}
      >
        <div className="group">
          <img
            className="absolute scale-[2] brightness-75 blur-[10px] group-hover:brightness-100 transition-all duration-1000"
            alt={data.title}
            src={data.image}
          />
          <img
            className="brightness-75 blur-[1px] group-hover:brightness-100 group-hover:blur-none group-hover:scale-[1.2] transition-all duration-1000"
            alt={data.title}
            src={data.image}
          />
        </div>
      </a>
      <div className="flex flex-col ">
        <text className="text-white text-3xl font-medium font-['Lora']">
          {data.title}
        </text>
        <text className="text-white text-sm font-light font-['Open Sans']">
          {data.description}
        </text>
      </div>
    </div>
  );
}

export default SingleView;
