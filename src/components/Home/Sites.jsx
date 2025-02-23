'use client'

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SiteCard = ({ img, title, onClick, isSelected, link }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`relative cursor-pointer group overflow-hidden rounded-3xl border-2 ${isSelected
        ? 'border-tgreen/50 bg-gradient-to-br from-tgreen/10 to-teal-500/5 shadow-2xl shadow-tgreen/30'
        : 'border-transparent bg-gradient-to-br from-gray-900/50 to-slate-900/30 hover:from-gray-800/50 hover:to-slate-900/40'
        } transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      whileHover={{ y: -12, scale: 1.02 }}
    >
      <div className="relative aspect-[4/3]">
        <motion.img
          src={img}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          animate={{
            opacity: isSelected ? 1 : 0.92,
            scale: isSelected ? 1 : 1.05,
            filter: isSelected ? 'saturate(1.2)' : 'saturate(0.9)'
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${isSelected
          ? 'from-tgreen/10 via-tgreen/5 to-transparent'
          : 'from-black/20 via-transparent to-transparent'
          }`} />
      </div>

      <div className="p-7 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className={`text-2xl font-bold bg-gradient-to-r ${isSelected
            ? 'from-tgreen to-teal-400'
            : 'from-slate-300 to-slate-500'
            } bg-clip-text text-transparent uppercase`}>
            {title}
          </h3>
          <motion.div
            className={`h-px flex-1 mx-4 ${isSelected
              ? 'bg-gradient-to-r from-teal-500 to-tgreen'
              : 'bg-slate-700'
              }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
        {link && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className=""
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-medium ${isSelected
                ? 'text-tgreen hover:text-teal-400'
                : 'text-slate-500 hover:text-slate-400'
                } transition-colors`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              Acessar projeto
            </a>
          </motion.div>
        )}
      </div>

    </motion.div>
  );
};

const Sites = () => {
  const [selectedSite, setSelectedSite] = useState(null);

  const sites = useMemo(() => [

    {
      img: 'images/sites/initium.png',
      title: 'Initium',
      link: 'http',
      content: (
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px w-16 bg-gradient-to-r from-teal-400 to-tgreen"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-light bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent"
              >
                <span className="font-bold tracking-wide uppercase">Initium</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 leading-relaxed text-lg max-w-2xl"
            >
              Initium oferece serviços de marketing digital, com um visual moderno e profissional.
              O layout utiliza cores escuras com toques de roxo e botões chamativos.
            </motion.p>

            <div className="grid gap-4">
              {['Estratégia Digital', 'Experiência do Usuário', 'Tecnologia Adaptativa', 'Análise de Dados'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.8 }}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-slate-100 p-1 shadow-md"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" /> */}

                  <div className="relative flex items-center space-x-6 bg-gray-4200 p-4 rounded-lg transition-all duration-300 ">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-teal-400/10 animate-pulse rounded-full" />
                      <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-tgreen rounded-full" />
                    </div>
                    <span className="text-slate-600 text-lg font-medium">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )
    },

    {
      img: 'images/sites/ilha.png',
      title: 'Ilha grande',
      link: 'http',
      content: (
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px w-16 bg-gradient-to-r from-teal-400 to-tgreen"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-light bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent"
              >
                <span className="font-bold tracking-wide uppercase">Initium</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 leading-relaxed text-lg max-w-2xl"
            >
              Site responsivo voltado para o turismo de aventura na Ilha Grande, com foco em expedições de canoa. Apresenta um design limpo e ícones intuitivos, facilitando a navegação.
            </motion.p>

            <div className="grid gap-4">
              {['Estratégia Digital', 'Experiência do Usuário', 'Tecnologia Adaptativa', 'Análise de Dados'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.8 }}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-slate-100 p-1 shadow-md"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" /> */}

                  <div className="relative flex items-center space-x-6 bg-gray-4200 p-4 rounded-lg transition-all duration-300 ">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-teal-400/10 animate-pulse rounded-full" />
                      <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-tgreen rounded-full" />
                    </div>
                    <span className="text-slate-600 text-lg font-medium">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )
    },

    {
      img: 'images/sites/garoupas.png',
      title: 'Garoupas',
      link: 'http',
      content: (
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px w-16 bg-gradient-to-r from-teal-400 to-tgreen"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-light bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent"
              >
                <span className="font-bold tracking-wide uppercase">Initium</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 leading-relaxed text-lg max-w-2xl"
            >
              Site responsivo voltado para o restaurante Garoupas, com ênfase em uma experiência gastronômica premium. Apresenta um design elegante e minimalista.
            </motion.p>

            <div className="grid gap-4">
              {['Estratégia Digital', 'Experiência do Usuário', 'Tecnologia Adaptativa', 'Análise de Dados'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.8 }}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-slate-100 p-1 shadow-md"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" /> */}

                  <div className="relative flex items-center space-x-6 bg-gray-4200 p-4 rounded-lg transition-all duration-300 ">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-teal-400/10 animate-pulse rounded-full" />
                      <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-tgreen rounded-full" />
                    </div>
                    <span className="text-slate-600 text-lg font-medium">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )
    },

    {
      img: 'images/sites/sodiesel.png',
      title: 'Só diesel',
      link: 'http',
      content: (
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px w-16 bg-gradient-to-r from-teal-400 to-tgreen"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-light bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent"
              >
                <span className="font-bold tracking-wide uppercase">Initium</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 leading-relaxed text-lg max-w-2xl"
            >
              Site responsivo focado em serviços de manutenção de veículos a diesel, oferecendo uma interface clara e funcional. O design destaca a confiabilidade e a qualidade dos serviços, com fácil navegação e ênfase em agendamentos e atendimento especializado.
            </motion.p>

            <div className="grid gap-4">
              {['Estratégia Digital', 'Experiência do Usuário', 'Tecnologia Adaptativa', 'Análise de Dados'].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.8 }}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-slate-100 p-1 shadow-md"
                >
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" /> */}

                  <div className="relative flex items-center space-x-6 bg-gray-4200 p-4 rounded-lg transition-all duration-300 ">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-teal-400/10 animate-pulse rounded-full" />
                      <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-tgreen rounded-full" />
                    </div>
                    <span className="text-slate-600 text-lg font-medium">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )
    },




  ], []);

  return (
    <section className="w-full flex flex-col min-h-screen relative bg-gradient-to-br lg:overflow-visible from-gray-900 via-slate-950 to-[#0a0e12] py-20">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-purple-500/5" />
      {/* <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] bg-radial-gradient(from_70%_70%_at_50%_50%,rgba(16,185,129,0.15),transparent)" /> */}

      <div className="container relative z-30 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-center gap-4">
              <motion.div
                className="h-px w-16 bg-gradient-to-r from-teal-500 to-tgreen"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2 }}
              />
              <span className="text-teal-400 font-medium tracking-wide text-lg">
                PORTFÓLIO SELECIONADO
              </span>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent uppercase tracking-tighter">
              Realizações Digitais
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Experiências imersivas desenvolvidas através de processos criativos meticulosos e tecnologias de ponta.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sites.map((site, index) => (
              <SiteCard
                key={index}
                {...site}
                onClick={() => setSelectedSite(index)}
                isSelected={selectedSite === index}
              />
            ))}
          </div>

          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedSite ?? 'empty'}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-gradient-to-br from-gray-900 to-slate-900 p-10 rounded-3xl border border-slate-800/50 shadow-2xl shadow-black/40 backdrop-blur-xl h-fit sticky top-24"
            >
              {selectedSite !== null ? (
                sites[selectedSite].content
              ) : (
                <motion.div
                  className="h-[480px] flex items-center justify-center text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="space-y-6">
                    <div className="text-6xl text-tgreen/20 animate-pulse-slow">
                      ⌘
                    </div>
                    <p className="text-slate-500 font-light text-xl leading-relaxed">
                      Selecione um projeto para explorar<br />detalhes da implementação
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Efeito de partículas */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950/90 to-transparent z-20" />
    </section>
  );
};

export default Sites;