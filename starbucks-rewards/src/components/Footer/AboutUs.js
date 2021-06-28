import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="flex flex-col lg:ml-4 lg:flex-row lg:justify-between lg:items-center text-left">
        <h3 className="text-lg font-normal mb-6">About Us</h3>
        <button className="hidden lg:block">
          <svg
            viewBox="0 0 24 24"
            className="valign-middle absoluteCenter"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            focusable="false"
            style={{
              width: "32px",
              height: "32px",
              overflow: "visible",
              fill: "currentcolor",
            }}
          >
            <path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path>
            <circle
              className="sb-icon-hover"
              fill="transparent"
              cx="50%"
              cy="50%"
              r="75%"
            ></circle>
          </svg>
        </button>

        <div className="flex flex-col lg:hidden">
          <a
            className="text-base py-2 m-2 text-secondry-gray-500 hover:text-secondry-black"
            href="#"
          >
            Our Heritage
          </a>
          <a
            className="text-base py-2 m-2 text-secondry-gray-500 hover:text-secondry-black"
            href="#"
          >
            Our Coffee
          </a>
          <a
            className="text-base py-2 m-2 text-secondry-gray-500 hover:text-secondry-black"
            href="#"
          >
            Stories and News
          </a>
          <a
            className="text-base py-2 m-2 text-secondry-gray-500 hover:text-secondry-black"
            href="#"
          >
            Investor Relations
          </a>
          <a
            className="text-base py-2 m-2 text-secondry-gray-500 hover:text-secondry-black"
            href="#"
          >
            Policies and Standards
          </a>
          <a
            className="text-base py-2 m-2 text-secondry-gray-500 hover:text-secondry-black"
            href="#"
          >
            Customer Service
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
