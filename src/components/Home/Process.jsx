'use client'

import React from 'react';
import Accordion from './Accordion';

const StagesSection = () => {
  return (
    <section className="w-full flex flex-col relative bg-gradient-to-tr from-gray-900 via-slate-950 to-[#0a0e12] overflow-hidden">
      {/* Efeitos de fundo */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-purple-500/5" /> */}
      <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] bg-radial-gradient(from_70%_70%_at_50%_50%,rgba(16,185,129,0.15),transparent)" />

      <div className="flex flex-col gap-16 container relative z-10 py-14 overflow-hidden">
        <div className="flex flex-col gap-4 max-w-2xl">

          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-teal-500 to-tgreen" />
            <span className="text-teal-400 font-medium tracking-wide">FLUXO DE TRABALHO</span>
          </div>

          <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent uppercase tracking-tight">
            Processo Criativo
          </h3>
          
          <p className="text-slate-400 text-lg leading-relaxed">
            Cada etapa é meticulosamente planejada para transformar sua visão em realidade digital com excelência.
          </p>

        </div>

        <div className="flex flex-col gap-2 h-[35rem]">
          <Accordion
            number="1"
            title="Briefing Estratégico"
            paragraph="Imersão completa na essência da sua marca. Mapeamos objetivos, valores e público-alvo através de workshops colaborativos, garantindo alinhamento perfeito com sua visão."
            gradient="from-teal-500/20 to-teal-500/5"
          />

          <Accordion
            number="2"
            title="Desenvolvimento Iterativo"
            paragraph="Prototipação avançada com tecnologias de ponta. Cada versão é otimizada através de sprints criativos, mantendo transparência total e agilidade na execução."
            gradient="from-purple-500/20 to-purple-500/5"
          />

          <Accordion
            number="3"
            title="Refinamento Perfeito"
            paragraph="Processo colaborativo de aprimoramento contínuo. Utilizamos feedbacks em tempo real para polir cada detalhe até a excelência absoluta."
            gradient="from-blue-500/20 to-blue-500/5"
          />

          <Accordion
            number="4"
            title="Entrega Executiva"
            paragraph="Implementação estratégica acompanhada de documentação completa e suporte especializado para máxima performance pós-lançamento."
            gradient="from-pink-500/20 to-pink-500/5"
          />
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950/90 to-transparent z-20" />
    </section>
  );
};

export default StagesSection;