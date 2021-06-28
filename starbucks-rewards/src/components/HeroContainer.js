import React from 'react';

function HeroContainer() {
    return (
        <div>
            <section className="mt-36 lg:mt-36 bg-hero-desktop bg-no-repeat bg-1/2 bg-auto-100% md:bg-2/2.5 md:bg-auto-50% bg-primary-200 py-72 px-8 2xl:py-1/5 md:pb-full md:pt-8 md:mt-28 md:text-center ">

                <div className="max-w-8xl mx-auto flex-col text-left md:flex ">
                    <h1 className="text-4xl font-semibold max-w-sm md:mx-auto md:text-2xl">FREE COFFEE</h1>
                    <h1 className="text-4xl font-semibold max-w-sm md:mx-auto md:text-2xl">IS A TAP AWAY</h1>
                    <p className="text-xl max-w-sm mb-8 pt-4 md:mx-auto md:text-base">Join now to start earning Rewards.</p>

                    <button
                        className="ml-2 py-1 px-4 border rounded-3xl bg-primary-300 text-secondry-white 
                        font-semibold hover:bg-primary-300 md:mx-auto  ">
                        <span className="md:hidden">Join now</span>
                        <span className="hidden md:inline">Join in the app</span>
                    </button>

                    <p className="mt-4 text-lg max-w-sm md:mx-auto md:text-base"><span className="md:hidden">Or <a
                                className="underline hover:no-underline" href="">join in the app</a> for the best
                            experience</span><a className="hidden md:inline hover:no-underline underline" href="#">Or join online</a>
                    </p>
                </div>
            </section>
        </div>
    )
}

export default HeroContainer;
