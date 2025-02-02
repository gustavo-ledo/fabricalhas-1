'use client'

import { useState, useEffect } from "react";

interface Servico {
  id: number;
  titulo: string;
  descricao: string;
}

interface ServicosProps {
  cidade: string;
}

const Servicos = ({ cidade }: ServicosProps) => {
  const [servicoAtivo, setServicoAtivo] = useState<Servico | null>(null);

  const servicos: Servico[] = [
    {
      id: 1,
      titulo: `Fabricação de Calhas e Rufos sob medida ${cidade}`,
      descricao: `Na Fabricalhas, estamos comprometidos em oferecer uma ampla gama de serviços especializados em calhas e rufos, para atender às necessidades específicas de nossos clientes. Nossos serviços incluem consultoria especializada para ajudá-lo a escolher as melhores opções para suas necessidades, fabricação de calhas e rufos, utilizando materiais de alta qualidade e tecnologia avançada, e instalação precisa e eficiente para garantir a funcionalidade e durabilidade de nossos produtos. Além disso, oferecemos serviços de manutenção e reparo para garantir que suas calhas e rufos permaneçam em perfeitas condições ao longo do tempo.`,
    },
    {
      id: 2,
      titulo: `Manutenção de Calhas e Rufos em ${cidade}`,
      descricao: `Garanta a durabilidade e eficiência de suas calhas e rufos com os serviços de manutenção preventiva e corretiva oferecidos pela Fabricalhas. Nossa equipe experiente está pronta para realizar inspeções regulares e resolver quaisquer problemas, garantindo a proteção contínua de sua propriedade contra danos causados pela água.`,
    },
    {
      id: 3,
      titulo: `Limpeza e Desobstrução de Calhas e Rufos em ${cidade}`,
      descricao: `Mantenha suas calhas e rufos funcionando perfeitamente com os serviços de limpeza e desobstrução oferecidos pela Fabricalhas. Nossa equipe especializada utiliza técnicas eficientes para remover detritos e prevenir obstruções, garantindo a eficácia do sistema de drenagem e prevenindo danos causados pela água à sua propriedade.`,
    },
    {
      id: 4,
      titulo: `Consultoria Especializada de Calhas e Rufos ${cidade}`,
      descricao: `Conte com a expertise da Fabricalhas para uma consultoria especializada em calhas e rufos. Nossa equipe qualificada oferece orientação personalizada para ajudá-lo a escolher as melhores soluções para sua propriedade, garantindo funcionalidade e proteção contra intempéries em cada projeto.`,
    },
    {
      id: 5,
      titulo: `Profissionalismo na Instalação de Calhas e Rufos em ${cidade}`,
      descricao: `Conte com a Fabricalhas para uma instalação profissional de calhas e rufos. Nossa equipe especializada garante um serviço preciso e eficiente, proporcionando proteção duradoura para sua propriedade. Confie em nossa experiência e compromisso com a excelência para garantir resultados impecáveis em cada projeto.`,
    },
  ];

  // Set the first service as active by default
  useEffect(() => {
    setServicoAtivo(servicos[0]);
  }, []);

  return (
    <section id="servicos" className="p-6 flex h-auto w-fulll flex-col  items-center justify-center">
      <div className="flex flex-col items-center space-y-4 w-full mt-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-800 text-center">
          Descubra Nossos Serviços na Fabricalhas em {cidade}
        </h1>
        <h2 className="text-md sm:text-lg md:text-xl text-center text-amber-500 max-w-screen-lg">
          Soluções Sob Medida para Proteção e Estilo na Sua Construção em {cidade}
        </h2>
        <div className="w-[250px] sm:w-[300px] md:w-[600px] mb-2 bg-amber-500 h-[2px]"></div>
        <p className="max-w-screen-xl text-sm sm:text-base text-blue-950 text-center mb-5">
          Na Fabricalhas {cidade}, estamos dedicados a oferecer uma variedade de serviços especializados em calhas e rufos, projetados para atender às necessidades únicas de nossos clientes. Oferecemos consultoria especializada para orientá-lo na escolha das melhores soluções para o seu projeto, fabricação de calhas e rufos com materiais de alta qualidade e tecnologia de ponta, além de instalação precisa para garantir funcionalidade e durabilidade. Também disponibilizamos serviços de manutenção e reparo, assegurando que suas calhas e rufos se mantenham em perfeitas condições ao longo do tempo.
        </p>
      </div>

      {/* Botões para selecionar o serviço */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 max-w-screen-xl items-center justify-center gap-4 mb-6">
        {servicos.map((servico) => (
          <button
            key={servico.id}
            onClick={() => setServicoAtivo(servico)}
            className={`p-3 sm:p-4 md:p-5 rounded-lg text-left w-full sm:w-auto ${
              servicoAtivo?.id === servico.id
                ? "bg-orange-400 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {servico.titulo}
          </button>
        ))}
      </div>

      {/* Exibição do serviço ativo */}
      {servicoAtivo && (
        <div className="border p-4 sm:p-6 rounded-lg bg-gray-50 max-w-screen-lg mx-auto mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">{servicoAtivo.titulo}</h2>
          <p className="text-sm sm:text-base">{servicoAtivo.descricao}</p>
        </div>
      )}
    </section>
  );
};

export default Servicos;
