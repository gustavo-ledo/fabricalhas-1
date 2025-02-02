
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
          <HeroSection cidade="Fazenda Rio Grande" />
        </div>
        <div>
          <CardProduct cidade="Fazenda Rio Grande" />
        </div>
        <div>
          <Portfolio cidade="Fazenda Rio Grande" />
        </div>
        <Servicos cidade="Fazenda Rio Grande" />
        <div>
          <Features  />
        </div>
        
          <div>
            <HeroDouble cidade="Fazenda Rio Grande" />
          </div>
          <div>
          <Numbers />
        </div>
        <div>
          <HeroDoubleReverse cidade="Fazenda Rio Grande" />
        </div>
        <div>
          <Reviews />
        </div>
        <Locais cidade="Fazenda Rio Grande" />
        <Footer />
    </div>
  );
}
