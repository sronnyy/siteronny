'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const SwiperSection = ({ images, delay, reverseDirection = false }) => (
  <Swiper
    direction={'vertical'}
    slidesPerView={2}
    spaceBetween={20}
    autoplay={{
      delay,
      disableOnInteraction: false,
      reverseDirection,
    }}
    loop={true}
    speed={6000}
    modules={[Autoplay]}
    className="swiper-no-overflow"
  >
    {images.map((image, index) => (
      <SwiperSlide key={index}>
        <div className="relative group w-80 h-80 overflow-hidden bg-gradient-to-tr from-gray-800 via-slate-900 to-[#0a0e12] rounded-3xl border-2 border-white/10 hover:border-[#C8FE00]/30 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-950 to-[#0a0e12] z-10" />
          {/* <img
            src={image}
            className="w-80 h-80 object-cover transform transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1"
            alt=""
            loading="lazy"
          /> */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-light text-sm text-[#C8FE00]">Project 0{index + 1}</span>
            <span className="text-white/80 text-xs">↗</span>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default function About() {
  const imageSets = [
    {
      images: [
        '/images/sites/garoupas.png',
        '/images/sites/garoupas.png',
        '/images/sites/garoupas.png'
      ],
      delay: 2000,
      reverseDirection: true
    },
    {
      images: [
        '/images/sites/garoupas.png',
        '/images/sites/garoupas.png',
        '/images/sites/garoupas.png'
      ],
      delay: 1000,
      reverseDirection: true
    },
    {
      images: [
        '/images/sites/garoupas.png',
        '/images/sites/garoupas.png',
        '/images/sites/garoupas.png'
      ],
      delay: 3000,
      reverseDirection: false
    },
    // ... outros imageSets
  ];

  return (
    <section className="min-h-screen py-32 bg-gradient-to-tr from-gray-900 via-slate-950 to-[#0a0e12] relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-slate-950/0 to-[#0a0e12]/0 z-20" ></div>



      {/* Animated Grid */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div className="h-full w-full pattern-dots pattern-[#C8FE00] pattern-opacity-10 pattern-size-6" />
      </div>

      {/* Swiper Background */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <div className="h-full w-full flex px-20 justify-center blur-[4px] gap-24 opacity-30">
          {imageSets.map((set, i) => (
            <div key={i} className="flex">
              <SwiperSection {...set} />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Developer Section */}
          <div className="space-y-16 lg:px-20">
            <div className="space-y-10">
              <h1 className="text-[#C8FE00] font-medium text-5xl md:text-6xl leading-tight tracking-tight">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent uppercase tracking-tight">
                  Desenvolvedor
                </span>
              </h1>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl border-l-4 border-[#C8FE00]/30 pl-6 ml-2">
                Ao criar aplicativos e websites, estou equipado com as ferramentas certas
                e posso funcionar de forma totalmente independente para fornecer
                soluções rápidas e resilientes, otimizadas para escala - desempenho e
                escalabilidade são prioridades em meu radar.
              </p>
            </div>
            <div className="h-32 flex items-center">
              <div className="w-full border-t border-[#C8FE00]/20 relative">
                <div className="absolute -top-[5px] left-0 right-0 h-[2px] bg-[#C8FE00] animate-line-expand" />
                <div className="flex justify-end space-x-4 mt-4">
                  <span className="text-[#C8FE00]/50 text-sm">React</span>
                  <span className="text-[#C8FE00]/50 text-sm">Next.js</span>
                  <span className="text-[#C8FE00]/50 text-sm">Node.js</span>
                </div>
              </div>
            </div>
          </div>

          {/* Design Section */}
          <div className="space-y-16 lg:px-20">
            <div className="h-32 hidden md:flex items-center">
              <div className="w-full flex space-x-8 opacity-50">
                <div className="h-1 w-24 bg-[#C8FE00] animate-width-pulse" />
                <div className="h-1 w-16 bg-[#C8FE00] animate-width-pulse delay-100" />
                <div className="h-1 w-32 bg-[#C8FE00] animate-width-pulse delay-200" />
              </div>
            </div>

            <div className="space-y-10">
              <h1 className="text-[#C8FE00] font-medium text-5xl md:text-6xl leading-tight tracking-tight">
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent uppercase tracking-tight">
                  Design
                </span>
              </h1>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl border-l-4 border-[#C8FE00]/30 pl-6 ml-2">
                Provavelmente não sou o típico designer posicionado atrás de uma prancheta do Illustrator
                ajustando pixels, mas eu desenho. Mergulhado em folhas de estilo, ajustando
                tamanhos de fontes e contemplando layouts é onde você me encontrará (~_^). Estou
                empenhado em criar experiências de usuário fluentes e, ao mesmo tempo, manter-me na moda.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <div className="animate-bounce-slow">
          <div className="h-8 w-8 border-2 border-[#C8FE00]/30 rounded-full" />
        </div>
      </div>
    </section>
  );
}