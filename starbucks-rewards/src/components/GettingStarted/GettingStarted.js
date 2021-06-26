import React from 'react';
import ImgOne from "../../img/1.webp";
import ImgTwo from "../../img/2.webp";
import ImgThree from "../../img/3.webp";

function GettingStarted() {
    return (
        
        <div>
            <section className="py-32 px-8 max-w-8xl mx-auto">
                <h1 className="text-center font-semibold text-3xl mb-4 md:text-xl">Getting started is easy</h1>
                <p className="text-center text-base mb-12 max-w-xl mx-auto md:text-sm">Earn Stars and get rewarded in a few easy steps.</p>

                <div className="flex text-center md:text-left justify-between md:flex-col">

                    <div className="max-w-sm md:max-w-full md:flex justify-start">
                        <img className="w-12 h-12 mx-auto mb-6 md:m-0 md:mr-4" src={ImgOne} alt={"ImgOne"}/>
                        <div>
                            <h1 className="mb-4 text-lg font-semibold md:font-normal md:hidden">Create an account</h1>
                            <h1 className="mb-4 text-lg font-semibold hidden  md:font-medium md:block">Download the Starbucks app</h1>

                            <p className="leading-normal md:hidden md:text-sm">To get started,&nbsp;<a
                                    className="underline hover:no-underline text-primary-darkShade" href="#">join now</a> . You can
                                also <a className="underline hover:no-underline text-primary-darkShade" href="#">join in the app</a>
                                to get access to the full range of Starbucks® Rewards benefits.</p>

                            <p className="leading-normal hidden md:block md:text-sm"><a className="underline text-primary-darkShade" href="#">Join
                                    in the app</a> to get access to the full range of Starbucks® Rewards benefits. You can also
                                <a className="underline text-primary-darkShade" href="#">join online</a>.</p>
                        </div>
                    </div>

                    <div className="max-w-sm md:max-w-full mx-6 md:mx-0 md:mt-8 md:flex justify-start">
                        <img className="w-12 h-12 mx-auto mb-6 md:m-0 md:mr-4" src={ImgTwo} alt={"ImgTwo"}/>
                        <div>
                            <h1 className="mb-4 text-lg font-semibold md:font-medium">Order and pay how you’d like</h1>
                            <p className="leading-normal md:text-sm">Use cash, credit/debit card or save some time and pay right through the
                                app. You’ll collect Stars all ways. <a
                                    className="underline hover:no-underline text-primary-darkShade" href="#">Learn how</a></p>
                        </div>
                    </div>

                    <div className="max-w-sm md:max-w-full md:flex justify-start md:mt-8">
                        <img className="w-12 h-12 mx-auto mb-6 md:m-0 md:mr-4" src={ImgThree} alt={"ImgThree"}/>
                        <div>
                            <h1 className="mb-4 text-lg font-semibold md:font-medium">Earn Stars, get Rewards</h1>
                            <p className="leading-normal md:text-sm">As you earn Stars, you can redeem them for Rewards—like free food, drinks,
                                and more. Start redeeming with as little as 25 Stars!</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default GettingStarted
