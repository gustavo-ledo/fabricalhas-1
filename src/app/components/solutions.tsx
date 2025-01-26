'use client';

import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image";

export function CarrouselHero() {
  return (
    <div className="h-[80vh]p-10 bg-amber-500">
      <Swiper
        spaceBetween={16} // Espaçamento entre os slides
        slidesPerView={1} // Mostrar 1 slide por vez
        pagination={{ clickable: true }} // Ativar paginação clicável
        modules={[Pagination]} // Adicionar o módulo de paginação
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Image 
            src='/exaustor.png' 
            className=" w-full lg:h-screen" 
            alt='exaustor' 
            height={1850} 
            width={1850} 
          />
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <Image 
            src='/calhas.png' 
            className=" w-full lg:h-screen" 
            alt='exaustor' 
            height={1850} 
            width={1850} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src='/coifas.png' 
            className=" w-full lg:h-screen" 
            alt='exaustor' 
            height={1850} 
            width={1850} 
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src='/chapa.png' 
            className=" w-full lg:h-screen" 
            alt='exaustor' 
            height={1850} 
            width={1850} 
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
