import WhatsappIcon from "./setIcons/whatsapp";
import Image from "next/image";


export default function HeroDoubleReverse() {
    return (
        <section className="bg-blue-700 dark:bg-gray-900">
            
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="grid grid-cols-2 gap-4 mt-8">
                     <Image src="/Conteudo/exaustor2.webp" alt="fabricalhasaraucaria" className="w-full  h-96 object-cover rounded-2xl" height={400} width={400} />
                     <Image src="/Conteudo/exautor.jpg" alt="fabricalhasaraucaria"  className="mt-4 h-96 object-cover w-full lg:mt-10 rounded-2xl" height={500} width={500} />
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">Impulsione Seu Negócio com Soluções de Ventilação Eficientes!</h2>
                    <p className="mb-4 text-white">"A eficiência operacional é essencial para o sucesso de qualquer negócio. Pensando nisso, a Fabricalhas apresenta sua linha de exaustores eólicos, a solução definitiva para ventilação industrial. Projetados com tecnologia avançada e materiais de alta qualidade, nossos exaustores otimizam o ambiente de trabalho, garantindo desempenho máximo e economia.
                    </p>
                    <p className="text-white">Com um design aerodinâmico, os exaustores aproveitam a força dos ventos para renovar o ar continuamente, eliminando calor excessivo, umidade e gases indesejados. Além de criar um ambiente mais saudável e confortável para sua equipe, a Fabricalhas oferece condições imperdíveis em toda a linha de exaustores eólicos. Potencialize a produtividade e o bem-estar do seu negócio. Entre em contato hoje mesmo e descubra como nossas soluções podem transformar seu estabelecimento!</p>
                    <a href="#" className="text-white bg-amber-500 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center space-x-2 text-center mt-4 w-[250px]"><WhatsappIcon height="20" width="20"/><span>Fale conosco</span></a>
                </div>

            </div>
        </section>
    )
}