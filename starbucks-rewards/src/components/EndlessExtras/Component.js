import React from "react";

function Component(props) {
  return (
    <div>
      <div className="max-w-sm md:max-w-full md:flex justify-start">
        {/* <!-- freebies image --> */}
        <img
          className="w-28 h-28 mx-auto mb-6 md:m-0 md:mr-4"
          src={props.image}
          alt={"props.image"}
        />
        <div>
          <h2 className="mb-4 text-lg font-semibold">{props.heading}</h2>
          <p className="leading-normal">{props.about}
          </p>
          <button className="my-4">
            <a
              className="text-primary-darkerShade underline hover:no-underline "
              href="#"
            >{props.link}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Component;
