import React from "react";

function FavoriteItems(props) {
  return (
    <div>
      <div className="py-8 bg-primary-200 flex md:flex-col justify-center items-center px-8">
        <img
          className="max-w-sm md:max-w-full"
          src={props.image}
          alt=""
        />
        <div className="max-w-xs md:max-w-full md:text-center ">
          <h1 className="text-2xl mb-4 font-semibold tracking-widest">
            {props.heading}
          </h1>
          <p className=" leading-5 font-medium">
            {props.about}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FavoriteItems;
