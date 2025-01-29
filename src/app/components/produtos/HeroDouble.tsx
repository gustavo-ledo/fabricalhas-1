import WhatsappIcon from "../setIcons/whatsapp";
import Image from "next/image";

interface Props {
    firstImg?: any;
    secondImg?: any;
    title: string;
    description: string;
    text: string;
    secondText: string;
    extraText?: string;
    extraText2?: string;
}


export default function HeroDouble({firstImg, secondImg, title, description, text, secondText, extraText2, extraText}: Props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blue-900 dark:text-blue-900">Conheça a Fabricalhas: Excelência em Calhas e Rufos em Araucária, PR</h2>
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-amber-500">Qualidade, Confiança e Dedicação</h2>
                    <p className="mb-4 text-blue-900">A Fabricalhas é referência em Araucária, PR, no mercado de fabricação e instalação de calhas e rufos, atendendo clientes residenciais, comerciais e industriais com soluções personalizadas. Nossa equipe experiente e altamente qualificada está comprometida em oferecer produtos de alta qualidade que não apenas protegem sua propriedade contra as adversidades climáticas, como chuva e vento, mas também valorizam sua estética. <br /><br />
                    Trabalhamos com materiais de primeira linha e utilizamos técnicas modernas de fabricação para garantir calhas e rufos duráveis e de alto desempenho, resistentes ao tempo. Além disso, disponibilizamos uma grande variedade de cores e estilos, permitindo uma perfeita harmonia com o design arquitetônico de cada projeto.
                    </p>
                    <p className="text-blue-900">Desde o primeiro contato até a instalação final, nosso foco é proporcionar um atendimento personalizado e serviços de excelência. Estamos comprometidos em garantir a sua satisfação em todas as etapas do processo.
                    <br /><br />
                    Proteja sua propriedade e valorize seu investimento com as soluções confiáveis e duradouras da Fabricalhas. Entre em contato hoje mesmo para saber mais sobre nossos produtos e serviços!</p>
                    <a href="#" className="text-white bg-amber-500 hover:bg-primary-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center space-x-2 text-center mt-4 w-[250px]"><WhatsappIcon height="20" width="20"/><span>Fale conosco</span></a>
                </div>
                <div className="grid grid-cols-1 gap-4 mt-8">
                     <Image src={firstImg} alt="fabricalhasaraucaria" className="w-full object-cover h-96 rounded-lg" height={1500} width={1500} />


                     <Image src={secondImg} alt="fabricalhasaraucaria"  className="mt-4 object-cover h-96 w-full lg:mt-10 rounded-lg" height={1500} width={1500} />
                </div>
            </div>
        </section>
    )
}