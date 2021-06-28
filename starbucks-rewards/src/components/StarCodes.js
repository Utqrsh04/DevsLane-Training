import React from "react";

function StarCodes() {
  return (
    <div>
      <section className="max-w-3xl mx-auto py-32 px-6 text-left">
        <h1 className="text-3xl md:text-2xl font-semibold mb-4">Star Codes</h1>
        <p className="leading-normal md:text-sm mb-4">
          Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
          add Stars to your account.
        </p>
        <label className="leading-loose" >
          <input
            className="w-full border border-gray-500 py-2 px-2 rounded-lg"
            type="text"
            placeholder="Enter your Star Code"
          />
        </label>
        <button className=" font-semibold min-w-max ml-auto mt-4 block py-1 px-4 border border-black rounded-3xl hover:bg-gray-200">
          Submit
        </button>
        <p className="mt-8 md:text-sm leading-snug">Have a receipt but don't have a code?</p>
        <p className="leading-snug mb-32">
          Go to&nbsp;
          <a
            className="text-primary-300 md:text-sm underline hover:no-underline"
            href="#"
          >
            starbucks-stars.com
          </a>
          &nbsp;to upload your receipt and collect your Stars.
        </p>
        <h1 className="text-3xl md:text-2xl font-semibold mb-4">Questions?</h1>
        <p className="leading-snug md:text-sm ">
          We want to help in any way we can. You can ask your barista anytime or
          we’ve answered the most commonly asked questions&nbsp;
          <a
            className="text-primary-300 underline hover:no-underline"
            href="#"
          >
            right over here
          </a>
          &nbsp;.
        </p>
      </section>
    </div>
  );
}

export default StarCodes;
