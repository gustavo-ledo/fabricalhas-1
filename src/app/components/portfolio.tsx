'use client'
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

interface Props {
  cidade?: string;
}

export default function Portfolio({ cidade }: Props) {
  const images = [
    "/portifolio/42.jpeg",
    "/portifolio/2.jpeg",
    "/portifolio/8.jpeg",
    "/portifolio/13.jpeg",
    "/portifolio/21.jpeg",
    "/portifolio/31.jpeg",
    "/portifolio/34.jpeg",
    "/portifolio/49.jpeg",
    "/portifolio/48.jpeg",
  ];

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="max-w-screen-xl-xl space-y-10 mb-10 p-2 flex flex-col items-center h-auto">
      <div className="flex flex-col items-center space-y-2 w-full mt-6">
        <h1 className="text-2xl md:text-4xl font-semibold text-blue-800">
          Conheça nosso portifólio em {cidade}
        </h1>
        <h2 className="text-md md:text-xl max-w-screen-lg text-center text-amber-500">
          Soluções Personalizadas da Fabricalhas. Usos e Aplicações de Calhas,
          Rufos, Coifas, Curvas, Dutos, Perfis Metálicos e Exaustores Eólicos.
        </h2>
        <div className="w-[300px] md:w-[600px] mb-2 bg-amber-500 h-[2px]"></div>
        <p className="max-w-screen-xl text-sm text-blue-950 text-center mb-5">
          Conheça o amplo portfólio da Fabricalhas em {cidade}, com produtos
          como calhas, rufos, coifas, curvas, dutos, perfis metálicos e
          exaustores eólicos. Fabricados com materiais de alta qualidade, nossos
          itens proporcionam proteção confiável contra intempéries. Com uma
          equipe especializada, desenvolvemos soluções sob medida para atender às
          demandas específicas de cada cliente. Confie na Fabricalhas para
          garantir a proteção e durabilidade da sua propriedade!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-xl gap-x-2 gap-y-3 auto-rows-[400px] mt-2">
        {images.map((src, index) => (
          <div
            key={index}
            className="min-h-[150px] min-w-[400px] rounded-lg bg-neutral-100 cursor-pointer"
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          >
            <Image
              src={src}
              alt={`fabricalhasaraucaria-${index}`}
              className="w-full h-full object-cover  rounded-lg"
              height={1500}
              width={1500}
            />
          </div>
        ))}
      </div>

      <a href="" className="p-2 rounded-2xl bg-blue-800 text-white">
        Ver mais dos nossos trabalhos
      </a>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={photoIndex}
        />
      )}
    </div>
  );
}
