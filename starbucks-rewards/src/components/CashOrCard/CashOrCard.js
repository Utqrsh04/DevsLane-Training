import React from "react";
import CashCardContainers from "./CashCardContainers";

import CashCardImg1 from "../../img/cash_or_card_img_1.png"
import CashCardImg2 from "../../img/cash_or_card_img_2.png"
import CashCardImg3 from "../../img/cash_or_card_img_3.png"
import CashCardImg4 from "../../img/cash_or_card_img_4.png"
import CashCardImg5 from "../../img/cash_or_card_img_5.png"


function CashOrCard() {
  return (
    <div>

      <section className="bg-gray-100 py-12">
        <h1 className="text-3xl font-semibold max-w-sm text-center mx-auto mb-4 ">
          Cash or card, you earn Stars
        </h1>
        <p className="max-w-2xl text-center mx-auto mb-20 px-8">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>

        {/* Container 1 */}
        <CashCardContainers
          heading1="1"
          about1="Pay as you go"
          heading2="Scan and pay separately"
          about2="Use cash or credit/debit card at the register."
          heading3="Save payment in the app"
          about3="Check-out faster by saving a credit/debit card or PayPal to your
          account. You’ll be able to order ahead or scan and pay at the
          register in one step."
          image1={CashCardImg1}
          image2={CashCardImg2}
        />

        <div className="max-w-8xl mx-auto h-px bg-gray-300 mt-6 mb-12"></div>

        {/* Container 2 */}
        <CashCardContainers
          heading1="2"
          about1="Add funds in the app"
          heading2="Preload"
          about2="To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app."
          heading3="Register your gift card"
          about3="Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
          image1={CashCardImg3}
          image2={CashCardImg4}
        />

        <div className="max-w-8xl mx-auto h-px bg-gray-300 mt-6 mb-12"></div>

        {/* Container 3 */}
        <div className="max-w-8xl mx-auto flex justify-start px-8 lg:flex-wrap">
          <div className="w-1/6 min-w-1/6 lg:w-full lg:mb-8 text-left">
            <h1 className="text-2xl font-semibold mb-2 w-full">
              Up to 3
              <svg className="inline" height="28" width="20">
                <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
              </svg>
              per dollar
            </h1>
            <p className="text-base leading-snug w-full">
              With Starbucks Rewards Visa Card
            </p>
          </div>

          <div className="max-w-7.5 flex mx-7 lg:mx-0 2xl:flex-1 md:max-w-full">
            <img
              className="w-28 h-40 mr-5"
              src={CashCardImg5}
              alt=""
            />
            <div className="text-left">
              <h1 className="text-xl font-semibold mb-4">
                Earn Stars even faster
              </h1>
              <p className="leading-normal font-medium">
                Earn Stars on all purchases you make with our
                <a
                  className="text-primary-darkerShade underline hover:no-underline"
                  href="#"
                >
                  credit card
                </a>
                opens in new window in and outside of Starbucks. Earn 1 Star per
                $1 when you digitally preload your Starbucks Card with your
                Starbucks Rewards Visa Card, and earn 2 Stars per $1 when you
                pay with that preloaded Starbucks Card.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CashOrCard;
