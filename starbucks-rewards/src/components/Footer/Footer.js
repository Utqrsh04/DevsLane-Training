import React from "react";
import FooterLinks from "./FooterLinks";
import AboutUs from "./AboutUs";
import Careers from "./Careers";
import Socialimpact from "./SocialImpact";
import ForBusinessPartners from "./ForBusineesPartners";
import OrderPickup from "./OrderPickup"

function Footer() {
  return (
    <div>
      <footer className="max-w-8xl mx-auto px-8">
        
        <section className="flex lg:flex-col">
          <AboutUs/>
          <Careers/>
          <Socialimpact/>
          <ForBusinessPartners/>
          <OrderPickup/>
        </section>
        
        <div className="w-full h-px bg-gray-300 my-12"></div>

        <FooterLinks />
      
      </footer>
    </div>
  );
}

export default Footer;
