'use client'


import { useState, useEffect } from "react";

function Navigation() {
  const [activeSection, setActiveSection] = useState(""); // Estado para rastrear a seção ativa

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let active = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          active = section.id;
        }
      });

      if (active !== activeSection) {
        setActiveSection(active);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Condições para aplicar bg-branco e border-branco quando as seções 'about' ou 'sites' estiverem ativas
  const bgClass = (activeSection === "about") || (activeSection === "sites") ? "border border-white" : "bg-gray-950"; // Define bg branco para as seções 'about' e 'sites'
  const borderClass = (activeSection === "about") || (activeSection === "sites")  ? "border-gray-950" : "border-gray-950"; // Define a borda branca para as seções 'about' e 'sites'

  return (
    <div className="fixed -right-2 top-80 mt-10 z-50 p-10 hidden md:block">
      <ul className="flex items-center flex-col ">
        <li>
          <a
            href="#home"
            className={`inline-block transition-all rounded-sm w-2 h-2 ${activeSection === "home" ? `font-bold border bg-gray-950 ${borderClass} scale-[2]` : `text-black  ${bgClass} rotate-45`}`}
          />
        </li>
        <li>
          <a
            href="#about"
            className={`inline-block rounded-sm w-2 h-2 transition-all ${activeSection === "about" ? `font-bold bg-white scale-[2]` : `text-black  rotate-45 border  border-white`}`}
          />
        </li>
        <li>
          <a
            href="#sites"
            className={`inline-block rounded-sm w-2 h-2 transition-all ${activeSection === "sites" ? `font-bold bg-white scale-[2]` : `text-black  rotate-45 border  border-white`}`}
          />
        </li>
        <li>
          <a
            href="#process"
            className={`inline-block rounded-sm w-2 h-2 transition-all ${activeSection === "process" ? "font-bold bg-white scale-[2]" : `text-black   rotate-45 border  border-white`}`}
          />
        </li>

        <li>
          <a
            href="#contact"
            className={`inline-block rounded-sm w-2 h-2 transition-all ${activeSection === "contact" ? "font-bold bg-white scale-[2]" : `text-black    rotate-45 border  border-white`}`}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navigation;