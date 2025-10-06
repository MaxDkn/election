"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Carousel from "@/components/carousel";
import Citation from "@/components/citation";

export default function Home() {
  const citations = [
    { text: "« Enfin un candidat qui tient ses promesses ! »", author: "– Pierre Marie Briec" },
    { text: "« Un candidat sérieux et motivé, parfait pour notre délégation (il a eu 17). »", author: "– Helena Blondel" },
    { text: "« Grâce à Max, j'ai confiance en l'avenir. »", author: "– Luka Hauvespre" },
    { text: "« Sa détermination est inspirante, votez Max ! »", author: "– Alice Domnesque" },
    { text: "« Un leader naturel qui sait rassembler. »", author: "– Paloma Burban" },
    { text: "« Jade est conquise : Max est vraiment à l’écoute de tous ! »", author: "– Jade Fédina" },
    { text: "« Max saura nous représenter avec sérieux et dynamisme. »", author: "– Valérie Buffet" },
    { text: "« M. Chagny apprécie sa rigueur et son engagement. »", author: "– Cyril Chagny" },
  ];

  const slides = [
    { 
      src: "/images/arabe.jpg", 
      caption: "Mixité !",
    },
    { 
      src: "/images/explorateur.jpg", 
      caption: "Prêt pour l'action.",
    },
    { 
      src: "/images/inoxtag.jpg", 
      caption: "Détermination.", 
    },
    { 
      src: "/images/marin.jpg", 
      caption: "Toujours en mouvement.",
    },
  ];

  const engagements = [
    { icon: "✈️", title: "Favoriser les voyages", text: "Je vais faire tout mon possible pour que les voyages soient repris. (DNL, Chine et autres...)" },
    { icon: "🤝", title: "Favoriser la bonne entente", text: "Créer un environnement harmonieux où chacun se sent respecté et valorisé." },
    { icon: "💎", title: "Être transparent avec vous", text: "Des informations claires et régulières sur toutes les décisions." },
  ];

  const [confetti, setConfetti] = useState([]);

  const triggerConfetti = () => {
    const id = Date.now(); // id unique
    setConfetti((prev) => [...prev, id]);

    // Supprime ce confetti après 10 secondes
    setTimeout(() => {
      setConfetti((prev) => prev.filter((c) => c !== id));
    }, 10000);
  };

  return (
    <div className="font-inter text-gray-800 overflow-x-hidden" style={{ backgroundColor: "#2c3284" }}>
      {/* --- Confettis au-dessus de tout --- */}
      {confetti.map((id) => (
        <Confetti
          key={id}
          width={window.innerWidth - 20}
          height={document.body.scrollHeight}
          numberOfPieces={300}
          recycle={false}
          className="fixed top-0 left-0 pointer-events-none z-[9999]"
        />
      ))}
      
     
      {/* --- Banderoles citations --- */}
      <Citation citations={citations} direction="left" speed={60} />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center mt-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 style={{ color: "#5e9577"}} className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Votez <span style={{ color: "#92cbab" }}>Max DECKMYN</span>
            </h1>
            <p style={{ color: "#5e9577"}} className="text-lg mb-8">
              Votre futur représentant au CVL, prêt à défendre vos idées avec énergie et sérieux.
              Ensemble, pour une vie meilleure.
            </p>
            <button
              onClick={triggerConfetti}
              className="relative bg-gradient-to-r from-red-600 to-red-500 text-white py-4 px-10 rounded-full text-lg font-bold shadow-xl hover:scale-105 transition"
            >
              Je vote pour Max et Tom !
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center"
          >
            <Carousel slides={slides} interval={4500} type="image" />
          </motion.div>
        </div>
      </section>

      {/* PROGRAMME */}
      <section id="program" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          style={{ color: "#5e9577"}}
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Mes Engagements
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {engagements.map((e, i) => (
            <motion.div
              key={i}
              style={{ borderColor: "#5e9577", backgroundColor: "#92cbab" }}
              className="bg-white p-8 rounded-2xl shadow-lg border-l-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-4">{e.icon}</div>
              <h3 className="font-semibold text-xl mb-3">{e.title}</h3>
              <p className="text-gray-600">{e.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="vote" className="bg-gray-900 text-white text-center py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-gray-900/30 to-red-600/10"></div>
        <motion.div
          className="relative max-w-2xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            Prêt à faire la différence ?
          </h2>
          <p className="text-lg mb-10 text-gray-300">
            Votre vote peut changer les choses. Ensemble, construisons un avenir
            meilleur.
          </p>          
        </motion.div>
      </section>
    </div>
  );
}