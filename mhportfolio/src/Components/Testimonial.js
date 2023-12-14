import React from "react";

function Testimonial() {
  return (
    <div className="flex flex-col bg-black items-center justify-center p-20 gap-20">
      <text className="dark:text-white text-5xl font-['Lora']">
        What They Say?
      </text>
      <div className="inline-flex justify-between gap-20 w-[80%]">
        <div>
          {/* <div className="w-80 h-80 bg-lime-400 rounded-3xl" /> */}
          <div className="w-80 h-80 overflow-hidden bg-lime-400 rounded-full hover:rounded-3xl transition-all ease-[cubic-bezier(1,0,0,1)] duration-1000">
            <img
              alt="picture"
              src="https://res.cloudinary.com/ddtfqfamn/image/upload/v1699012947/1599752841617_meoxxi.jpg"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          {/* <svg
            className="absolute fill-[#23252A]"
            width="126"
            height="117"
            viewBox="0 0 126 117"
          >
            <path d="M31.1041 0.89917L42.2796 9.18491C39.2443 13.0516 36.071 18.5754 32.7597 25.7563C29.4485 32.9373 26.8271 40.8087 24.8955 49.3706C22.9639 57.9325 22.4121 66.4944 23.2399 75.0563C25.1714 74.2277 26.965 73.6754 28.6207 73.3992C30.2763 72.8468 31.9319 72.5706 33.5876 72.5706C39.1063 72.5706 43.6593 74.5039 47.2465 78.3706C50.8337 82.2373 52.6273 87.0706 52.6273 92.8706C52.6273 100.604 50.4198 106.542 46.0048 110.685C41.5898 114.828 36.209 116.899 29.8624 116.899C20.4805 116.899 13.1681 113.309 7.9253 106.128C2.95842 98.6706 0.474976 89.6944 0.474976 79.1992C0.474976 72.0182 1.7167 63.5944 4.20014 53.9277C6.95952 43.9849 10.5467 34.1801 14.9617 24.5135C19.6527 14.8468 25.0335 6.97536 31.1041 0.89917ZM103.952 0.89917L115.127 9.18491C112.092 13.0516 108.919 18.5754 105.607 25.7563C102.296 32.9373 99.6748 40.8087 97.7432 49.3706C95.8116 57.9325 95.2597 66.4944 96.0876 75.0563C98.0191 74.2277 99.8127 73.6754 101.468 73.3992C103.124 72.8468 104.78 72.5706 106.435 72.5706C111.954 72.5706 116.507 74.5039 120.094 78.3706C123.681 82.2373 125.475 87.0706 125.475 92.8706C125.475 100.604 123.267 106.542 118.852 110.685C114.437 114.828 109.057 116.899 102.71 116.899C93.3282 116.899 86.0158 113.309 80.773 106.128C75.8061 98.6706 73.3227 89.6944 73.3227 79.1992C73.3227 72.0182 74.5644 63.5944 77.0478 53.9277C79.8072 43.9849 83.3944 34.1801 87.8094 24.5135C92.5004 14.8468 97.8812 6.97536 103.952 0.89917Z" />
          </svg> */}
          <p className="z-10 mb-10 text-white text-sm font-light font-['Open Sans']">
            I recommend Malek as a motion designer to any company seeking
            top-tier talent in this field. His creative skills, attention to
            detail, and collaborative spirit make him an invaluable asset. I
            genuinely hope our paths can cross again in the future, as I have no
            doubt that he will continue to excel and make significant
            contributions in his career.
          </p>
          <div className="dark:text-white text-lg font-semibold font-['Open Sans']">
            Miguel Marques
          </div>
          <div className="dark:text-white text-xs font-['Open Sans']">
            Associate Creative Director @Vistaprint
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
