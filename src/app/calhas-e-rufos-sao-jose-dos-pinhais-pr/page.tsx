
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

export default function Home() {
  return (
    <div className="flex-col">
        <Header />
          <WhatsappButton />
          <CarrouselHero />
        <div className="mt-2">
          <HeroSection cidade="São José dos Pinhais" />
        </div>
        <div>
          <CardProduct cidade="São José dos Pinhais" />
        </div>
        <div>
          <Portfolio cidade="São José dos Pinhais" />
        </div>
        <div>
          <Features  />
        </div>
        
          <div>
            <HeroDouble cidade="São José dos Pinhais" />
          </div>
          <div>
          <Numbers />
        </div>
        <div>
          <HeroDoubleReverse cidade="São José dos Pinhais" />
        </div>
        <div>
          <Reviews />
        </div>
        <Locais cidade="São José dos Pinhais" />
        <Footer />
    </div>
  );
}
