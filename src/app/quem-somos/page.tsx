import Footer from "../components/footer";
import Header from "../components/header";
import Portfolio from "../components/portfolio";
import Features from "../components/quemsomoscomponent/features";
import FeaturesTwo from "../components/quemsomoscomponent/featurestwo";
import Hero from "../components/quemsomoscomponent/hero";
import HeroDouble from "../components/quemsomoscomponent/herodouble";
import HeroDoubleReverse from "../components/quemsomoscomponent/herodoublereverse";
import HeroDoubleTwo from "../components/quemsomoscomponent/herodoubletwo";
import HeroReverseTwo from "../components/quemsomoscomponent/heroreversetwo";
import Reviews from "../components/reviews";
import WhatsappButton from "../components/whatsappbutton";

export default function QuemSomos() {
    return(
        <>
            <div className="flex-col">
                    <Header />
                      <WhatsappButton />
                      <Hero />
                      <HeroDouble />
                      <Features />
                      <HeroDoubleReverse />
                      <Portfolio />
                      <HeroDoubleTwo />
                      <Reviews />
                      <HeroReverseTwo />
                      <FeaturesTwo />
                    <Footer />
                </div>
        </>
    )
}