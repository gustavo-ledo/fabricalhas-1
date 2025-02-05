'use client'
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

interface Props {
  cidade?: string;
}

export default function PortfolioCompleto({ cidade }: Props) {
  const images = [
    "/portifolio/1.jpeg",
    "/portifolio/2.jpeg",
    "/portifolio/3.jpeg",
    "/portifolio/4.jpeg",
    "/portifolio/5.jpeg",
    "/portifolio/6.jpeg",
    "/portifolio/7.jpeg",
    "/portifolio/8.jpeg",
    "/portifolio/9.jpeg",
    "/portifolio/10.jpeg",
    "/portifolio/11.jpeg",
    "/portifolio/12.jpeg",
    "/portifolio/13.jpeg",
    "/portifolio/14.jpeg",
    "/portifolio/15.jpeg",
    "/portifolio/16.jpeg",
    "/portifolio/17.jpeg",
    "/portifolio/18.jpeg",
    "/portifolio/19.jpeg",
    "/portifolio/20.jpeg",
    "/portifolio/21.jpeg",
    "/portifolio/22.jpeg",
    "/portifolio/23.jpeg",
    "/portifolio/24.jpeg",
    "/portifolio/25.jpeg",
    "/portifolio/26.jpeg",
    "/portifolio/27.jpeg",
    "/portifolio/28.jpeg",
    "/portifolio/29.jpeg",
    "/portifolio/30.jpeg",
    "/portifolio/31.jpeg",
    "/portifolio/32.jpeg",
    "/portifolio/33.jpeg",
    "/portifolio/34.jpeg",
    "/portifolio/35.jpeg",
    "/portifolio/36.jpeg",
    "/portifolio/37.jpeg",
    "/portifolio/38.jpeg",
    "/portifolio/39.jpeg",
    "/portifolio/40.jpeg",
    "/portifolio/41.jpeg",
    "/portifolio/42.jpeg",
    "/portifolio/43.jpeg",
    "/portifolio/45.jpeg",
    "/portifolio/47.jpeg",
    "/portifolio/48.jpeg",
    "/portifolio/49.jpeg",
    "/portifolio/50.jpeg",
    "/portifolio/51.jpeg",
    "/portifolio/52.jpeg",
    "/portifolio/53.jpeg",
    "/portifolio/54.jpeg",
    "/portifolio/55.jpeg",
    "/portifolio/56.jpeg",
  ];

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div className="w-full space-y-10 mb-10 p-2 flex flex-col items-center h-auto">
      <div className="flex flex-col items-center space-y-2 w-full mt-6">
        <h1 className="text-2xl md:text-4xl font-semibold text-blue-800">
          Conheça nosso portifólio
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
