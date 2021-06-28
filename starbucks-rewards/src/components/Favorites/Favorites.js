import React from "react";
import FavoriteItems from "./FavoriteItems";
import CustomiseDrinkImg from "../../img/customise_your_drink.webp";


function Favorites() {
  return (
    <div>
      <section className="py-16 bg-primary-100">
        <h1 className="text-3xl md:text-2xl font-semibold text-center mb-6 px-8">
          Get your favorites for free
        </h1>
        <div className="max-w-lg md:max-w-full flex text-3xl justify-between mx-auto">
          <h1 className="relative py-4 px-2 md:text-lg font-semibold md:w-full text-center md:px-0">
            25<span className="text-yellow-500 text-lg">★</span>
            <span className="absolute w-full h-1 bg-primary-300 bottom-0 right-0 left-0"></span>
          </h1>

          <h1 className="relative py-4 px-2 font-semibold md:text-lg md:w-full text-center md:px-0">
            50<span className="text-yellow-500 text-lg">★</span>
          </h1>

          <h1 className="relative py-4 px-2 font-semibold md:w-full md:text-lg text-center md:px-0">
            150<span className="text-yellow-500 text-lg">★</span>
          </h1>

          <h1 className="relative py-4 px-2 font-semibold md:w-full md:text-lg text-center md:px-0">
            200<span className="text-yellow-500 text-lg">★</span>
          </h1>

          <h1 className="relative py-4 px-2 font-semibold md:w-full md:text-lg text-center md:px-0">
            400<span className="text-yellow-500 text-lg">★</span>
          </h1>
        </div>

        <FavoriteItems
          heading="Customize your drink"
          about="Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."
          image={CustomiseDrinkImg}
        />
      </section>
    </div>
  );
}

export default Favorites;
