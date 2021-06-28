import React from "react";
import Component from "./Component";
import ImgExtrasOne from "../../img/endless_extras_img_1.webp";
import ImgExtrasTwo from "../../img/endless_extras_img_2.webp";
import ImgExtrasThree from "../../img/endless_extras_img_3.webp";


function EndlessExtras() {
  return (
    <div>
      <section className=" max-w-8xl mx-auto py-32 px-8 ">
        <h1 className="text-center font-semibold md:text-2xl text-3xl mb-4">
          Endless Extras
        </h1>
        <p className="text-center text-base mb-12 md:text-sm max-w-xl mx-auto">
          Joining Starbucks Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.
        </p>
        <div className="flex text-center md:text-left justify-between md:flex-col">
          
          <Component
            image={ImgExtrasOne}
            heading="Fun freebies"
            about="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
            link="Learn more"
          />

          <Component
            image={ImgExtrasTwo}
            heading="Order & pay ahead"
            about="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
            link="Learn More"
          />

          <Component
            image={ImgExtrasThree}
            heading="Get to free faster"
            about="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
            link="Learn more"
          />
          
        </div>
      </section>
    </div>
  );
}

export default EndlessExtras;
