import React from "react";
import SingleView from "./SingleView";

const design = [
  {
    title: "BBC Media Action",
    link: "https://www.behance.net/gallery/94348283/BBC-Media-Action",
    description:
      "A series of freelance projects for BBC group. Main job 2D animation video editing.",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/808/a6ba6494348283.Y3JvcCwyNDAwLDE4NzcsMCwyNDM.png",
  },
  {
    title: "UBCI Crédit Conso",
    link: "https://vimeo.com/305006949",
    description:
      "A freelance project for PNB Paribas UBCI, 2D animation motion graphics",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/689e6273469741.5c0a42cca0269.jpg",
  },
  {
    title: "Kanalytik",
    link: "https://www.behance.net/gallery/43621405/Kanalytik-Stats",
    description: "A series of animated videos for Kanaseed",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/808/8e3b2e43621405.Y3JvcCw5MDgsNzExLDE4Niww.jpeg",
  },
  {
    title: "Festival Hammamet",
    link: "https://vimeo.com/182973359",
    description: "52ème édition Festival International Hammamet",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/88bd4242888597.Y3JvcCw3NjMsNTk3LDg4Niww.jpg",
  },
  {
    title: "I feel like Tunisia",
    link: "https://vimeo.com/163181033",
    description:
      "A tribute for Tunisia's beautiful scenes, video editing color correction",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/808/64d6fc36211059.Y3JvcCwxMjAwLDkzNywwLDEzMA.jpg",
  },
  {
    title: "Mobicash",
    link: "https://vimeo.com/167100869",
    description: "A 2D animation video for Ooredoo",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/808/51b8e141685195.Y3JvcCwxMDc0LDg0MCw1NSwyMQ.png",
  },
  {
    title: "EU Neighbors South",
    link: "https://vimeo.com/182973359",
    description: "Pending Description",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/808/6b131243619029.Y3JvcCwxODk1LDE0ODMsMzc5LDA.jpeg",
  },
];

const dev = [
  {
    title: "Crafty",
    link: "https://www.behance.net/gallery/184259695/Crafty",
    description:
      "A full-stack mobile application that is a hub for people that make handcrafted items. People can buy items read articles or tips made by the community and also place custom orders by instant messaging the seller",
    image:
      "https://res.cloudinary.com/ddtfqfamn/image/upload/v1699615164/Artboard_1-100_mdja3o.jpg",
  },
];

function MainView() {
  return (
    <div className="w-screen flex flex-col dark:bg-black p-20 justify-center items-center gap-10">
      <div className="justify-center items-center flex flex-col">
        <div className="dark:text-white text-5xl font-['Lora']">
          Some curated work.
        </div>
        <div className="text-white  font-light font-['Open Sans']">
          Click projects to see further details
        </div>
      </div>
      <div className="flex w-full overflow-x-auto relative">
        <div className="flex gap-20 relative px-4">
          {design.map((elem, key) => (
            <SingleView data={elem} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainView;
