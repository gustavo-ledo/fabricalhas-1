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
         <head>
            <title>Fabricalhas - Quem somos</title>
            <meta name="description" content="Conheça a Fabricalhas, referência em fabricação e instalação de calhas e rufos em Araucária, oferecendo proteção e qualidade para sua construção." />
            <meta name="robots" content="index, follow" />
            </head>
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