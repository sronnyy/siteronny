'use client'

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNav, setIsNav] = useState(false)
  const [scrollingDown, setScrollingDown] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const prevScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setScrollingDown(window.scrollY > prevScrollY.current && scrollPercentage > 10)
      setIsTop(window.scrollY <= document.documentElement.scrollHeight * 0.03)

      const sections = document.querySelectorAll("section[id]")
      let active = ""
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          active = section.id
        }
      })
      setActiveSection(active)
      prevScrollY.current = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "My Work", href: "#sites" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      className={`fixed z-50 w-full py-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrollingDown ? "-translate-y-full" : "translate-y-0"
        }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* O conteúdo do header aqui */}
      <div className="container">
        <div className={`flex items-center containr  justify-between rounded-xl backdrop-blur-lg transition-all duration-500 ${isTop ? "bg-transparent px-8 py-4 lg:w-[50rem]" : "bg-gray-900/80 shadow-2xl w-full shadow-black/30 px-10 py-4"
          } ${isMenuOpen ? 'bg-gray-900' : ''}`}>
          <a href="/" className="group">
            {/* <img
              className="w-14 transition-transform duration-300 group-hover:scale-105"
              src="/images/logo.png"
              alt="Logo"
            /> */}

            <p className="text-2xl md:text-4xl uppercase font-bold bg-gradient-to-r from-teal-400 to-tgreen bg-clip-text text-transparent">eloy</p>
          </a>

          <div className="flex items-center gap-8">
            <AnimatePresence>
              {isNav && (
                <motion.nav
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  className={`hidden md:block right-32 absolute z-40 px-6 py-5 rounded-xl  ${isTop ? "bg-gray-900/60 backdrop-blur-lg" : "bg-transparent "}`}
                >
                  <ul className="flex gap-6">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ delay: index * 0.12 }}
                      >
                        <a
                          href={item.href}
                          className={`relative text-lg font-medium transition-all ${activeSection === item.href.slice(1)
                              ? "text-tgreen"
                              : "text-gray-300 hover:text-tgreen/80"
                            }`}
                        >
                          {item.name}
                          {activeSection === item.href.slice(1) && (
                            <motion.div
                              className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-teal-400 to-tgreen"
                              layoutId="activeSection"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.nav>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex z-20 md:hidden h-12 w-12 items-center justify-center rounded-full bg-gray-800/90 backdrop-blur-sm transition-all hover:bg-gray-700/60"
            >
              <div className="space-y-2">
                <motion.span
                  className="block h-0.5 w-6 bg-gray-100"
                  animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-gray-100"
                  animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>

            <button
              onClick={() => setIsNav(!isNav)}
              className="relative hidden md:flex z-50 h-12 w-12 items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-sm transition-all hover:bg-gray-700/60"
            >
              <div className="space-y-2">
                <motion.span
                  className="block h-0.5 w-6 bg-gray-100"
                  animate={isNav ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-gray-100"
                  animate={isNav ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 -z-20 flex items-center justify-center bg-gray-900/50 backdrop-blur-2xl md:hidden"
            >
              <ul className="space-y-8 text-center">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="text-3xl font-medium text-gray-100 transition-colors hover:text-tgreen"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Nav