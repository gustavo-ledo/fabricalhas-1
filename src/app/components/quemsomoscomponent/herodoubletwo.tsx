import WhatsappIcon from "../setIcons/whatsapp";
import Image from "next/image";


export default function HeroDoubleTwo() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 dark:text-blue-900">Excelência em Soluções Versáteis: Calhas e Rufos de Qualidade em Araucária</h2>
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-amber-500">Proteção, Durabilidade e Estilo para Residências, Comércios e Indústrias</h2>
                    <p className="mb-4 text-blue-900">Descubra a qualidade e versatilidade das soluções em calhas e rufos da Fabricalhas, referência em Araucária. Com um compromisso sólido em oferecer produtos e serviços de alta performance, atendemos às necessidades de residências, comércios e indústrias, garantindo proteção eficaz contra os rigores do clima e valorizando a estética de sua propriedade.
                    <br /><br />
                    Nossa equipe especializada combina anos de experiência com materiais de alto padrão e técnicas de fabricação avançadas, resultando em sistemas de drenagem duráveis, funcionais e esteticamente integrados ao design arquitetônico. Desde o planejamento até a instalação, trabalhamos para oferecer soluções personalizadas que atendam às demandas específicas de cada projeto.
                    </p>
                    <p className="text-blue-900">Na Fabricalhas, entendemos que cada cliente possui necessidades únicas. Por isso, seja para uma residência, um empreendimento comercial ou uma instalação industrial, estamos preparados para entregar produtos e serviços que superem suas expectativas. Não comprometa a segurança e a integridade de sua propriedade – confie na Fabricalhas para soluções em calhas e rufos que combinam qualidade, durabilidade e estilo.
                    <br /><br />    
                    Entre em contato conosco hoje mesmo e descubra como podemos transformar sua propriedade com excelência e profissionalismo.</p>
                    <a href="#" className="text-white bg-amber-500 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center space-x-2 text-center mt-4 w-[250px]"><WhatsappIcon height="20" width="20"/><span>Fale conosco</span></a>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-8">
                     <Image src="/teste.jpg" alt="fabricalhasaraucaria" className="w-full object-cover h-96 rounded-lg" height={500} width={500} />
                     <Image src="/teste.jpg" alt="fabricalhasaraucaria"  className="mt-4 object-cover h-96 w-full lg:mt-10 rounded-lg" height={500} width={500} />
                </div>
            </div>
        </section>
    )
}