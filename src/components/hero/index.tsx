"use client";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { WhatsappMockup } from "@/components/hero/whatsapp-mockup";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <article className="flex flex-row items-end text-black relative w-full z-0">
    <motion.div
      className="flex flex-col gap-6 max-w-128 w-full z-0"
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
        Seu especialista em culinária, em breve direto no WhatsApp.
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
        <Button asLink className="rounded-full" href="#">
          Entrar na lista de espera
        </Button>
      </motion.div>
    </motion.div>

    <div
      aria-hidden
      className={twMerge(
        "absolute duration-200 ease-standard flex h-fit items-center justify-center left-1/2 top-0 -translate-x-1/2 transition-all w-80 -z-10",
        "max-[1024px]:opacity-25",
        "sm:left-[73.0215%]",
      )}
    >
      <WhatsappMockup />
    </div>
  </article>
);
