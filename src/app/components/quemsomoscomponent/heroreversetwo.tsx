import WhatsappIcon from "../setIcons/whatsapp";
import Image from "next/image";


export default function HeroReverseTwo() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-1 gap-4 mt-8">
                     <Image src="/teste.jpg" alt="fabricalhasaraucaria" className="w-full object-cover h-96 rounded-lg" height={500} width={500} />
                     <Image src="/teste.jpg" alt="fabricalhasaraucaria"  className="mt-4 object-cover h-96 w-full lg:mt-10 rounded-lg" height={500} width={500} />
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 dark:text-blue-900">Proteção Duradoura com Calhas e Rufos de Aço Galvanizado em Araucária</h2>
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-amber-500">Soluções Completas: Fabricação, Instalação e Manutenção pela Fabricalhas</h2>
                    <p className="mb-4 text-blue-900">Descubra a excelência em calhas e rufos de aço galvanizado com a Fabricalhas, referência em Araucária. Oferecemos soluções completas, desde a fabricação até a instalação e manutenção, garantindo proteção duradoura e desempenho superior para sua propriedade.
                    <br /><br />
                    Nossas calhas e rufos são produzidos com aço galvanizado de alta qualidade, reconhecido por sua resistência e durabilidade. O processo de galvanização cria uma camada protetora contra corrosão, prolongando a vida útil dos produtos e tornando-os ideais para enfrentar os desafios climáticos da região.
                    <br /><br />
                    Nossa equipe especializada também cuida de cada etapa da instalação, utilizando técnicas avançadas para assegurar uma montagem precisa e a perfeita integração das calhas e rufos à estrutura existente, seja em residências, comércios ou indústrias.
                    </p>
                    <p className="text-blue-900">
                    Além disso, oferecemos serviços completos de manutenção, garantindo o funcionamento contínuo de suas calhas e rufos. Realizamos inspeções detalhadas e reparos sempre que necessário, assegurando que sua propriedade permaneça protegida contra os danos causados por chuvas e intempéries.
                    <br /><br />
                    Confie na Fabricalhas para soluções de excelência em calhas e rufos de aço galvanizado em Araucária. Entre em contato conosco hoje mesmo e descubra como podemos proteger sua propriedade com qualidade, eficiência e confiabilidade incomparáveis.
                    </p>
                    <a href="#" className="text-white bg-amber-500 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center space-x-2 text-center mt-4 w-[250px]"><WhatsappIcon height="20" width="20"/><span>Fale conosco</span></a>
                </div>
            </div>
        </section>
    )
}