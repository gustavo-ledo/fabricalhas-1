"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Props {
    cidade?: string;
}

export default function HeroSection({ cidade }: Props) {
    const [mostrarMais, setMostrarMais] = useState(false);

    const textoCompleto = `
    A Fabricalhas é uma excelente escolha em soluções na instalação de calhas e rufos em ${cidade}, para assim melhor atender todos os nossos clientes. Atendemos toda a diversidade e complexidade da sua obra, através dos anos de serviços e experiência de nossos calheiros. A Fabricalhas é referência em calhas na cidade de ${cidade}. A Fabricalhas vem se destacando na fabricação de calhas, coifas e chaminés em ${cidade}, executando serviços na cidade de Curitiba e região há mais de 10 anos. Nossa qualificação e preço justo são nossos principais diferenciais. Atendemos grandes e complexas obras de calhas e também temos todas as opções de chapas, galvanizadas, galvalume, alumínio, inox e também com pinturas epóxi nas cores que desejar, tudo que você procura em calhas, coifas e chaminés na cidade de ${cidade}. Atendemos inclusive vazamentos e manutenções básicas para seu telhado, como limpezas e troca de telhas.

    Sua residência ou empresa merece a segurança de um telhado bem conservado! Com Calheiros experientes, a Fabricalhas oferece serviços especializados de manutenção de telhados e instalação de calhas, coifas e chaminés em ${cidade}, garantindo que sua estrutura esteja sempre em perfeitas condições, protegendo você contra as intempéries e evitando prejuízos com infiltrações e danos. Oferecemos serviços de inspeção completa do telhado, verificação de telhas, calhas, rufos e outros componentes essenciais, troca de telhas quebradas ou danificadas, garantindo a integridade do seu telhado. Desentupimento de Calhas e Rufos evitando alagamentos e danos à estrutura do imóvel. Reparos na estrutura aumentam a durabilidade e segurança do telhado.
    Impermeabilização e proteção extra contra infiltrações e umidade.
    Nossa equipe de Calheiros altamente qualificada trabalha com materiais de primeira linha, proporcionando qualidade, rapidez e eficiência. Com mais de 10 anos de experiência no mercado e atuando na cidade de ${cidade}, a Fabricalhas é a escolha certa para quem busca confiança e excelência.
    Atendimento personalizado, analisamos as necessidades específicas de cada cliente.
    Compromisso com os prazos estabelecidos para não interromper o seu dia a dia.
    Se você está em ${cidade} e precisa de manutenção de calhas e telhados, entre em contato com a Fabricalhas. Nosso time está pronto para garantir que sua casa ou empresa fique protegida e segura, independentemente das condições climáticas.
    Manutenção de calhas e telhado em ${cidade} é com a Fabricalhas.
    `;

    const textoResumo = textoCompleto.substring(0, 500) + "...";

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight text-blue-700 leading-none md:text-4xl xl:text-5xl dark:text-white">
                        <span className="text-amber-500">Conheça a Fabricalhas:</span> Especialista em Calhas e Rufos em {cidade}
                    </h1>
                    <h1 className="max-w-2xl mb-2 font-light text-gray-500 lg:mb-2 md:text-lg lg:text-lg dark:text-gray-400">
                        Sua Aliada de Confiança para Garantir Proteção e Estilo na sua Construção
                    </h1>
                    <p className="max-w-2xl mb-1w2a2ww2c font-light text-gray-500 md:text-lg lg:text-lg dark:text-gray-400 whitespace-pre-line">
                        {mostrarMais ? textoCompleto : textoResumo}
                    </p>
                    <button
                        onClick={() => setMostrarMais(!mostrarMais)}
                        className="text-blue-600 hover:underline font-medium text-sm mb-6"
                    >
                        {mostrarMais ? "Mostrar menos" : "Ler mais..."}
                    </button>
                    <div>
                        <a href="#" className="text-white bg-amber-500 hover:bg-primary-800 font-medium rounded-xl text-md px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center space-x-2 text-center w-[330px]">
                            <span>Conheça um pouco mais sobre nós</span>
                            <ArrowRight />
                        </a>
                    </div>
                </div>
                <div className="flex xl:relative xl:top-16 lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        src="/homem-fundo-branco.png"
                        className="w-full object-contain"
                        alt="fabricalhasaraucaria"
                        height={1500}
                        width={1500}
                    />
                </div>
            </div>
        </section>
    );
}
