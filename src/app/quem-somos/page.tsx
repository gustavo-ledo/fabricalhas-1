import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/quemsomoscomponent/hero";
import WhatsappButton from "../components/whatsappbutton";

export default function QuemSomos() {
    return(
        <>
            <div className="flex-col">
                    <Header />
                      <WhatsappButton />
                      <Hero />
                    <Footer />
                </div>
        </>
    )
}