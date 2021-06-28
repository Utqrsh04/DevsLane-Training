import React from "react";
import ImgOne from "../../img/1.webp";
import ImgTwo from "../../img/2.webp";
import ImgThree from "../../img/3.webp";
import Container from "./Container";

function GettingStarted() {
  return (
    <div>
      <section className="py-32 px-8 max-w-8xl mx-auto">
        <h1 className="text-center font-semibold text-3xl mb-4 md:text-xl">
          Getting started is easy
        </h1>
        <p className="text-center text-base mb-12 max-w-xl mx-auto md:text-sm">
          Earn Stars and get rewarded in a few easy steps.
        </p>

        <div className="flex text-center md:text-left px-10 justify-between md:flex-col">

          <Container 
            heading="Create an account" image={ImgOne}>
                                
            <h1 className="mb-4 text-lg font-semibold hidden  md:font-medium md:block">
              Download the Starbucks app
            </h1>

            <p className="leading-normal md:hidden md:text-sm">
              To get started,&nbsp;
              <a
                className="underline hover:no-underline text-primary-300"
                href="#"
              >
                join now
              </a>
              . You can also&nbsp;
              <a
                className="underline hover:no-underline text-primary-300"
                href="#"
              >
                join in the app
              </a>
              &nbsp;to get access to the full range of Starbucks® Rewards benefits.
            </p>

            <p className="leading-normal hidden md:block md:text-sm">
              <a className="underline text-primary-300" href="#">
                Join in the app
              </a>
              to get access to the full range of Starbucks® Rewards benefits.
              You can also
              <a className="underline text-primary-300" href="#">
                join online
              </a>
              .
            </p>
          </Container>

          <Container heading="Order and pay how you’d like" image={ImgTwo}>
            <h1 className="mb-4 text-lg font-semibold hidden  md:font-medium md:block">
              Download the Starbucks app
            </h1>

            <p className="leading-normal md:hidden md:text-sm">
              To get started,&nbsp; Use cash, credit/debit card or save some
              time and pay right through the app. You’ll collect Stars all
              ways.&nbsp;
              <a className="underline text-primary-300" href="#">
                Learn how
              </a>
              .
            </p>
          </Container>

          <Container heading=" Earn Stars, get Rewards" image={ImgThree} >
          <h1 className="mb-4 text-lg font-semibold hidden  md:font-medium md:block">
              Download the Starbucks app
            </h1>

            <p className="leading-normal md:hidden md:text-sm">
            As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!
            </p>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default GettingStarted;
