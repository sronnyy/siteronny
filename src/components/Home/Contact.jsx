'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';



const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3000/send-email', formData);
      setSuccess(response.data);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        assunto: '',
        mensagem: '',
      });
    } catch (err) {
      setError('Ocorreu um erro ao enviar o e-mail.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let timer;
    if (success || error) {
      timer = setTimeout(() => {
        setSuccess('');
        setError('');
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [success, error]);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const FloatingLabelInput = ({ id, label, type = 'text', required = true }) => (
    <motion.div className="relative" whileHover={{ scale: 1.02 }}>
      <input
        id={id}
        name={id}
        type={type}
        value={formData[id]}
        onChange={handleChange}
        className="w-full bg-gray-800/30 backdrop-blur-sm border-2 border-slate-700 rounded-xl py-5 px-6 text-slate-200 focus:border-tgreen focus:ring-4 focus:ring-tgreen/10 transition-all duration-300 peer"
        placeholder=" "
        required={required}
      />
      <label
        htmlFor={id}
        className="absolute left-6 top-5 text-slate-400 pointer-events-none transition-all duration-300 
                   peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:text-sm
                   -translate-y-7 text-sm bg-gradient-to-b from-gray-900 via-gray-900 to-transparent px-2"
      >
        {label}
      </label>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#0a0e12] to-[#020304] overflow-hidden">
      {/* Efeito de partículas 3D */}
      {/* <div className="absolute inset-0 z-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          {[...Array(15)].map((_, i) => (
            <Sphere key={i} position={[
              Math.random() * 20 - 10,
              Math.random() * 20 - 10,
              Math.random() * 20 - 10
            ]}>
              <meshPhongMaterial
                color="#c8fe00"
                opacity={0.15}
                transparent
                emissive="#c8fe00"
                emissiveIntensity={0.3}
              />
            </Sphere>
          ))}
        </Canvas>
      </div> */}

      <div className="container relative z-10  px-4 py-32">
        <motion.div
          className="grid lg:grid-cols-2 gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Seção esquerda */}
          <motion.div
            className="space-y-12 relative"
          // style={{ y }}
          >
            <div className="glow absolute -top-20 -left-20 w-96 h-96 bg-radial-gradient(from_60%_60%_at_50%_50%,rgba(200,254,0,0.1),transparent)" />

            <motion.h1
              className="text-5xl md:text-6xl xl:text-7xl font-bold bg-gradient-to-r pt-10 from-slate-200 to-slate-400 bg-clip-text text-transparent uppercase"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              <span className="block mb-4">Inicie Sua</span>
              <span className="bg-gradient-to-r leading-tight from-tgreen to-teal-400 bg-clip-text text-transparent">Jornada Digital</span>
            </motion.h1>

            {/* <div className="space-y-8 pl-6 border-l-4 border-tgreen/30">
              <motion.div
                className="flex items-center gap-6 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-4 bg-tgreen/10 rounded-2xl group-hover:bg-tgreen/20 transition-colors">
                  <i className="fas fa-map-marker-alt text-2xl text-tgreen" />
                </div>
                
              </motion.div>

              <motion.div
                className="flex items-center gap-6 group"
                whileHover={{ x: 10 }}
              >
                <div className="p-4 bg-tgreen/10 rounded-2xl group-hover:bg-tgreen/20 transition-colors">
                  <i className="fas fa-clock text-2xl text-tgreen" />
                </div>
                <div>
                  <h3 className="text-slate-400 mb-2">Horário</h3>
                  <p className="text-slate-200 font-medium">Seg - Sex: 9h - 18h</p>
                </div>
              </motion.div>
            </div> */}
          </motion.div>



          {/* Formulário */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-900/40 backdrop-blur-xl p-12 rounded-3xl shadow-2xl border border-slate-800/60"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <FloatingLabelInput id="nome" label="Nome Completo" />
              <FloatingLabelInput id="telefone" label="Telefone" type="tel" />
              <FloatingLabelInput id="email" label="E-mail" type="email" />
              <FloatingLabelInput id="assunto" label="Assunto" />
            </div>

            <div className="relative mb-12">
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full bg-gray-800/30 backdrop-blur-sm border-2 border-slate-700 rounded-xl py-5 px-6 text-slate-200 focus:border-tgreen focus:ring-4 focus:ring-tgreen/10 transition-all duration-300 h-48 resize-none"
                placeholder=" "
                required
              />
              <label
                htmlFor="mensagem"
                className="absolute left-6 top-5 text-slate-400 pointer-events-none transition-all duration-300 
                          peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:text-sm
                          -translate-y-7 text-sm bg-gradient-to-b from-gray-900 via-gray-900 to-transparent px-2"
              >
                Mensagem
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                background: 'linear-gradient(135deg, #c8fe00 0%, #7dffaf 100%)'
              }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full bg-gradient-to-r from-tgreen to-teal-400 py-6 px-12 rounded-xl font-bold text-gray-900 flex items-center justify-center gap-4 
                         hover:shadow-2xl hover:shadow-tgreen/30 transition-all duration-300 relative overflow-hidden"
            >
              {loading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="h-6 w-6 border-4 border-tgreen/30 border-t-tgreen rounded-full"
                  />
                  Enviando...
                </>
              ) : success ? (
                <>
                  <i className="fas fa-check-circle text-xl" />
                  Mensagem Enviada!
                </>
              ) : error ? (
                <>
                  <i className="fas fa-exclamation-triangle text-xl" />
                  Erro ao Enviar
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane-top text-xl" />
                  Enviar Mensagem
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {(success || error) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`mt-6 p-4 rounded-xl border ${success
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <i className={`fas ${success ? 'fa-check-circle' : 'fa-exclamation-circle'}`} />
                    {success || error}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>

      {/* Efeito de brilho animado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-gradient(from_60%_60%_at_50%_50%,rgba(200,254,0,0.03),transparent) opacity-40 animate-pulse-slow" />
    </section>
  );
};

export default Contact;