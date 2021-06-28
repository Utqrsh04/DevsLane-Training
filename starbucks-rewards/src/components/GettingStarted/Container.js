import React from "react";
import ImgOne from "../../img/1.webp";

function Container(props) {
  return (
    <div>
      <div className="max-w-sm md:max-w-full md:flex justify-start">
        <img
          className="w-12 h-12 mx-auto mb-6 md:m-0 md:mr-4"
          src={props.image}
          alt={"Image"}
        />
        <div>
          <h1 className="mb-4 text-lg font-semibold md:font-normal md:hidden">
            {props.heading}
          </h1>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Container;
