import React from "react";

function CashCardContainers(props) {
  return (
    <div>
      <div className="max-w-8xl mx-auto flex justify-between px-8 lg:flex-wrap">
        {/* <!-- sub container 1 --> */}
        <div className="w-1/6 min-w-1/6 lg:w-full lg:mb-8 text-left">
          <h1 className="text-2xl font-semibold mb-3 w-full">
            {props.heading1}
            <svg className="inline" height="28" width="20">
              <polygon
                points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
              />
            </svg> 
            per dollor
          </h1>
          <p className="text-base leading-snug w-full">{props.about1}</p>
        </div>

        {/* <!-- sub container 2 --> */}
        <div className="max-w-7.5 min-w-6.5 flex mx-6 lg:mx-0 2xl:flex-1 text-left">
          {/* <!-- image 1 --> */}
          <img
            className="w-28 h-40 mr-4"
            src={props.image1}
            alt=""
          />
          <div className="">
            <h1 className="text-xl font-semibold mb-4">{props.heading2}</h1>
            <p className=" leading-snug">{props.about2}</p>
          </div>
        </div>

        {/* <!-- sub conatiner 3 --> */}
        <div className="max-w-7.5 flex lg:mx-0 md:max-w-full md:flex-none 2xl:flex-1 text-left">
          {/* <!-- image 2 --> */}
          <img
            className="w-28 h-40 mr-4"
            src={props.image2}
            alt=""
          />
          <div className="">
            <h1 className="text-xl font-semibold mb-4">{props.heading3}</h1>
            <p className="leading-snug">{props.about3}</p>
          </div>
        </div>

        <div className="w-48 2xl:w-0 xl:hidden"></div>
      </div>
    </div>
  );
}

export default CashCardContainers;
