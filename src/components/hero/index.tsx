"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <article className="flex flex-col py-20 text-black w-full">
    <motion.div
      className="flex flex-col gap-4 max-w-128 w-full"
      initial={{ opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <motion.h1
        initial={{ filter: "blur(0.25rem)", opacity: 0, x: 24 }}
        whileInView={{ filter: "blur(0rem)", opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "anticipate" }}
        viewport={{ once: true }}
      >
        Seu especialista em culinária, direto no WhatsApp.
      </motion.h1>

      <motion.p
        initial={{ filter: "blur(0.25rem)", opacity: 0, x: 24 }}
        whileInView={{ filter: "blur(0rem)", opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 1, ease: "anticipate" }}
        viewport={{ once: true }}
      >
        Receitas, cardápios e listas de compras criados por uma IA que entende
        suas restrições e seus objetivos.
      </motion.p>

      <motion.div
        initial={{ filter: "blur(0.25rem)", opacity: 0, x: 24 }}
        whileInView={{ filter: "blur(0rem)", opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "anticipate" }}
        viewport={{ once: true }}
      >
        <Button asLink className="capitalize rounded-full" href="#">
          Falar com o Artfood no WhatsApp
        </Button>
      </motion.div>
    </motion.div>
  </article>
);
