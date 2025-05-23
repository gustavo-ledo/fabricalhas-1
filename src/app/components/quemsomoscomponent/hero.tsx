import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="bg-blue-700 ">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto space-y-3 place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight text-white leading-none md:text-4xl xl:text-5xl dark:text-white"><span className="text-amber-500">Conheça a Fabricalhas:</span> Especialista em Calhas e Rufos</h1>
                    <h1 className="max-w-2xl mb-2 font-light text-white lg:mb-2 md:text-lg lg:text-lg dark:text-gray-400">
                    Sua Aliada de Confiança para Garantir Proteção e Estilo na sua Construção
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">A Fabricalhas é especialista na fabricação e instalação de calhas e rufos, atuando há mais de 10 anos no mercado. Com foco na qualidade, durabilidade e excelência, nos destacamos por atender cada projeto de forma personalizada. Nossa equipe altamente capacitada está comprometida em entender as necessidades específicas de cada cliente, oferecendo soluções sob medida que superam expectativas.</p>
                </div>
                <div className="flex xl:relative xl:top-16 lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        src="/homem.png"
                        className="w-full object-contain"
                        alt="fabricalhasaraucaria"
                        height={1500}
                        width={1500}
                    />
                </div>                
            </div>
        </section>
    )
}