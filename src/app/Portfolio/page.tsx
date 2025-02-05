import Footer from "../components/footer";
import Header from "../components/header";
import PortfolioCompleto from "../components/portfoliocompleto";

export default function Portfolio() {
    return (
        <>
            <head>
                <title>Fabricalhas - Portfólio</title>
                <meta name="description" content="Explore nosso portfólio e conheça projetos de calhas, rufos e soluções sob medida que garantem proteção e qualidade em Araucária e região." />
                <meta name="robots" content="index, follow" />
            </head>
            <div>
                <Header />
                <PortfolioCompleto />
                <Footer />
            </div> 
        </>
       
    )
}