import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = forwardRef(({ number, title, paragraph, gradient }, ref) => {
  const itemVariants = {
    closed: { 
      opacity: 0.8,
      scale: 0.98,
      transition: { duration: 0.3 }
    },
    open: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.4,
        type: 'spring',
        bounce: 0.1
      }
    }
  };

  const contentVariants = {
    closed: { 
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 }
    },
    open: { 
      height: 'auto',
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div 
      className={`group relative p-[1px] rounded-2xl overflow-hidden ${gradient} backdrop-blur-lg`}
      variants={itemVariants}
      initial="closed"
      whileHover="open"
      ref={ref}
    >
      <div className="bg-slate-950/80 hover:bg-slate-950/60 transition-all duration-300 rounded-xl backdrop-blur-xl">
        <div className="flex items-start gap-4 p-6 cursor-pointer">
          {/* Número com gradiente animado */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-tgreen rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-tgreen relative z-10">
              <span className="text-xl font-bold text-slate-100">{number}</span>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex-1">
            {/* Título com gradiente interativo */}
            <motion.h4 
              className="text-2xl font-semibold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent"
              whileHover={{ 
                backgroundImage: 'linear-gradient(to right, #7dd3fc, #c084fc)',
                transition: { duration: 0.3 }
              }}
            >
              {title}
            </motion.h4>

            {/* Conteúdo expandido com animação */}
            <AnimatePresence>
              <motion.div
                className="overflow-hidden"
                variants={contentVariants}
              >
                <p className="pt-4 text-slate-400 leading-relaxed">
                  {paragraph}
                </p>
                
                {/* Elementos decorativos */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px w-20 bg-gradient-to-r from-teal-500/30 to-tgreen/30" />
                  <span className="text-xs font-mono text-teal-400/80">Explore mais</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Ícone animado */}
          <motion.div
            className="pt-1 pl-4"
            animate={{ rotate: 0 }}
            whileHover={{ rotate: 90 }}
          >
            <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-tgreen mask mask-arrow transform -rotate-45 group-hover:rotate-0 transition-transform" />
          </motion.div>
        </div>
      </div>

      {/* Efeito de brilho dinâmico */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none">
        <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/30 to-purple-500/30 blur-xl animate-pulse-slow" />
      </div>
    </motion.div>
  );
});

Accordion.displayName = 'Accordion';

export default Accordion;