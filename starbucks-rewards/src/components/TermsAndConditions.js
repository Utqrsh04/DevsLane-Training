import React from "react";

function TermsAndConditions() {
  return (
    <div>
      <section className="max-w-8xl ml-0 mr-0 text-left text-gray-800 text-sm py-12 px-4 bg-primary-100">
        <p className="w-full mb-8 leading-snug ">
          At participating stores. Restrictions apply.
        </p>
        <div className="flex md:flex-wrap mb-8 text-left md:text-sm">
          <div className="flex-1 mr-4 md:w-full md:flex-none md:mr-0">
            <h3 className="text-sm font-bold text-secondry-gray-500 mb-4">EARNING STARS</h3>
            <p className="mb-4 leading-snug">
              Stars cannot be earned on purchases of alcohol, Starbucks Cards or
              Starbucks Card reloads.
            </p>
            <p className="mb-4 leading-snug">
              Earn 1 Star per $1 spent when you scan your member barcode in the
              app, then pay with cash, credit/debit cards or mobile wallets at
              participating stores. You can also earn 1 Star per $1 spent when
              you link a payment method and pay directly through the app.
            </p>
            <p className=" leading-snug">
              Earn 2 Stars per $1 spent when you load funds and pay with your
              digital Starbucks Card in the app. You can also earn 2 Stars per
              $1 spent when you pay in-person at a participating store with your
              registered physical Starbucks Card or scan your member barcode in
              the app, and then use any physical Starbucks Card (regardless of
              whether it is registered) to complete the purchase.
            </p>
          </div>
          <div className="flex-1 ml-4 md:w-full md:flex-none md:ml-0 mt-8">
            <h3 className="text-sm font-bold text-secondry-gray-500 mb-4">TERMS OF USE</h3>
            <p className="mb-4 leading-snug">
              For full program details visit{" "}
              <a
                className="text-primary-300 underline hover:no-underline"
                href="#"
              >
                starbucks.com/rewards/terms
              </a>
              .
            </p>
            <p className="mb-4 leading-snug">
              * Earn 1 Star per $1 when digitally loading your Starbucks Card
              with your Starbucks® Rewards Visa® Card: See your Card Rewards
              Program Agreement for more details.
            </p>
            <p className="mb-4 leading-snug">
              Starbucks® Rewards benefits are available at participating
              Starbucks stores. Not all stores have the ability to honor Rewards
              at this time. Visit the{" "}
              <a
                className="underline text-primary-300 hover:no-underline"
                href="#"
              >
                Starbucks Store Locator
              </a>{" "}
              and search for locations honoring “Redeem Rewards”.
            </p>
            <p className=" leading-snug">
              Deposit and credit card products provided by JPMorgan Chase Bank,
              N.A. Member FDIC
            </p>
          </div>
        </div>
        
        <div className="flex md:flex-wrap text-left md:text-sm">
          <div className="flex-1 mr-4 md:w-full md:flex-none md:mr-0">
            <h3 className="text-sm font-bold text-secondry-gray-500 mb-4">BENEFITS</h3>
            <p className=" leading-snug">
              Free refills available during same in-store visit only. To qualify
              for the Birthday Reward, you must have made at least one
              Star-earning transaction.
            </p>
          </div>
          <div className="flex-1 ml-4 md:w-full md:flex-none md:ml-0 md:mt-8">
            <h3 className="text-sm font-bold text-secondry-gray-500 mb-4">
              REDEEMING REWARDS
            </h3>
            <p className=" leading-snug">
              Rewards cannot be redeemed for alcoholic beverages or multi-serve
              items. Not all stores honor tiered Rewards. Select stores redeem
              150 Stars for free food or drink items only.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-8xl mx-auto h-px bg-gray-300 my-12"></div>
    </div>
  );
}

export default TermsAndConditions;
