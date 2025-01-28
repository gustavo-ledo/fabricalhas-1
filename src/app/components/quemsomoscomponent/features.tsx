import { Check } from "lucide-react";

export default function Features() {
    return (
        <section className="bg-neutral-100 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-xl justify-center flex items-center flex-col text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-blue-900 dark:text-white">Missão, Visão, Valores e Comprometimento</h2>
                    <p className="text-amber-500 sm:text-2xl dark:text-gray-400">A Essência da Fabricalhas</p>
                    <div className="w-[300px] mt-3 bg-amber-500 h-[2px]"></div>
                    <p className="text-neutral-700 mt-5 sm:text-sm xl:text-sm">Na Fabricalhas, temos o propósito de oferecer soluções excepcionais em calhas e rufos para proteger sua propriedade com produtos de alta qualidade. Nossa missão é garantir segurança e durabilidade, sempre atendendo às suas necessidades.

                    Nossa visão é ser líderes no mercado, reconhecidos pela inovação, excelência e satisfação do cliente em Araucária e região.

                    Guiados por nossos valores – integridade, excelência e compromisso com a qualidade – buscamos construir relações de confiança e respeito com nossos clientes, colaboradores e parceiros.

                    Nosso compromisso é superar suas expectativas, entregando soluções que aliam profissionalismo, eficiência e dedicação em cada projeto.</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-12 md:space-y-0">
                    <div className="shadow-xl bg-neutral-100 p-4 rounded-xl">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 shadow-xl text-white bg-blue-500">
                            <Check />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Missão da Fabricalhas</h3>
                        <p className="text-gray-500 dark:text-gray-400">Nossa missão é oferecer soluções de excelência em calhas e rufos, garantindo proteção com qualidade e durabilidade para as propriedades de nossos clientes em Araucária. Estamos comprometidos em atender às necessidades de cada cliente, superando expectativas com produtos e serviços que refletem profissionalismo e dedicação.</p>
                    </div>
                    <div className="shadow-md bg-neutral-100 p-4 rounded-xl">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 shadow-xl text-white bg-blue-500">
                            <Check />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Visão da Fabricalhas</h3>
                        <p className="text-gray-500 dark:text-gray-400">Ser referência no mercado de calhas e rufos em Araucária e região é o nosso objetivo. Buscamos liderar com inovação, qualidade e um compromisso inabalável com a satisfação do cliente. Nossa visão é continuar crescendo e expandindo nossos serviços, sempre mantendo a excelência como prioridade.</p>
                    </div>
                    <div className="shadow-md bg-neutral-100 p-4 rounded-xl">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 shadow-xl text-white bg-blue-500">
                            <Check />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Valores da Fabricalhas</h3>
                        <p className="text-gray-500 dark:text-gray-400">A Fabricalhas se baseia em valores sólidos como integridade, excelência e compromisso com a qualidade. Prezamos pelo respeito e pela transparência em todas as nossas relações com clientes, colaboradores e parceiros. Esses princípios nos guiam na entrega de soluções que fazem a diferença.</p>
                    </div>
                    <div className="shadow-md bg-neutral-100 p-4 rounded-xl">
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 shadow-xl text-white bg-blue-500">
                            <Check />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Compromisso da Fabricalhas</h3>
                        <p className="text-gray-500 dark:text-gray-400">Nosso compromisso é claro: garantir a máxima qualidade em cada projeto de calhas e rufos que realizamos. Trabalhamos com dedicação para proteger sua propriedade, priorizando sua satisfação e confiança. Confie na Fabricalhas para soluções que combinam profissionalismo, eficiência e durabilidade.</p>
                    </div>     
                </div>
            </div>
            </section>
    )
}