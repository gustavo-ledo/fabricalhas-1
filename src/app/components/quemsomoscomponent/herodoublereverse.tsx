import WhatsappIcon from "../setIcons/whatsapp";
import Image from "next/image";


export default function HeroDoubleReverse() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-1 gap-4 mt-8">
                     <Image src="/teste.jpg" alt="fabricalhasaraucaria" className="w-full object-cover h-96 rounded-lg" height={500} width={500} />
                     <Image src="/teste.jpg" alt="fabricalhasaraucaria"  className="mt-4 object-cover h-96 w-full lg:mt-10 rounded-lg" height={500} width={500} />
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 dark:text-blue-900">Soluções da Fabricalhas</h2>
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-amber-500">Proteção Duradoura para sua Propriedade</h2>
                    <p className="mb-4 text-blue-900">A Fabricalhas é sua parceira ideal em Araucária e região para serviços de alta qualidade em calhas e rufos. Nossa missão é garantir proteção duradoura para sua propriedade, combinando materiais de primeira linha, técnicas avançadas de instalação e uma equipe altamente qualificada. Desde a fabricação até a conclusão do projeto, trabalhamos para superar suas expectativas com soluções personalizadas e atendimento impecável.
                    <br /><br />
                    Oferecemos fabricação sob medida de calhas e rufos, instalação precisa e serviços de manutenção eficiente. Seja qual for o tamanho ou complexidade do projeto, estamos prontos para enfrentar qualquer desafio, protegendo sua propriedade contra os elementos climáticos com eficácia e durabilidade.
                    </p>
                    <p className="text-blue-900">Na Fabricalhas, valorizamos a transparência, a integridade e a satisfação do cliente. Nossa equipe está sempre disponível para oferecer orientações especializadas, esclarecer dúvidas e garantir uma experiência tranquila do início ao fim. Cumprimos prazos e orçamentos com compromisso, garantindo que você tenha uma jornada sem preocupações.
                    <br /><br />
                    Se você procura soluções confiáveis e de qualidade em calhas e rufos em Araucária, entre em contato conosco. A Fabricalhas está pronta para entregar resultados duradouros, protegendo seu patrimônio com excelência, profissionalismo e dedicação.</p>
                    <a href="#" className="text-white bg-amber-500 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center space-x-2 text-center mt-4 w-[250px]"><WhatsappIcon height="20" width="20"/><span>Fale conosco</span></a>
                </div>
            </div>
        </section>
    )
}