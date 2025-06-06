
import HeroSection from "../components/hero";
import HeroDouble from "../components/herodouble";
import HeroDoubleReverse from "../components/herodoublereverse";
import Image from "next/image";
import Header from "../components/header";
import Numbers from "../components/numbers";
import Features from "../components/features";
import CardProduct from "../components/cardproduct";
import Reviews from "../components/reviews";
import Portfolio from "../components/portfolio";
import  { CarrouselHero } from "../components/solutions";
import WhatsappButton from "../components/whatsappbutton";
import Footer from "../components/footer";
import Locais from "../components/locais";
import Servicos from "../components/servicos";

export default function Home() {
  return (
    <div className="flex-col">
        <Header />
          <WhatsappButton />
          <CarrouselHero />
        <div className="mt-2">
          <HeroSection cidade="Colombo" />
        </div>
        <div>
          <CardProduct cidade="Colombo" />
        </div>
        <div>
          <Portfolio cidade="Colombo" />
        </div>
        <Servicos cidade="Colombo" />
        <div>
          <Features  />
        </div>
        
          <div>
            <HeroDouble cidade="Colombo" />
          </div>
          <div>
          <Numbers />
        </div>
        <div>
          <HeroDoubleReverse cidade="Colombo" />
        </div>
        <div>
          <Reviews />
        </div>
        <Locais cidade="Colombo" />
        <Footer />
    </div>
  );
}
