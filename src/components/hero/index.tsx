"use client";

import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { WhatsappMockup } from "@/components/hero/whatsapp-mockup";
import { Button } from "@/components/ui/button";

export const Hero = () => (
  <motion.article
    className="flex flex-row items-end text-black relative w-full z-0"
    initial="hidden"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.25,
        },
      },
    }}
    viewport={{ once: true }}
    whileInView="visible"
  >
    <div className="flex flex-col gap-4 max-w-128 w-full z-0">
      <motion.h1
        transition={{
          duration: 1,
          ease: "anticipate",
        }}
        variants={{
          hidden: {
            filter: "blur(0.25rem)",
            opacity: 0,
            x: "1.5rem",
          },
          visible: {
            filter: "blur(0rem)",
            opacity: 1,
            x: "0rem",
          },
        }}
      >
        O app de receitas inteligente que conversa com você no WhatsApp
      </motion.h1>

      <motion.p
        transition={{
          duration: 0.75,
          ease: "anticipate",
        }}
        variants={{
          hidden: {
            filter: "blur(0.25rem)",
            opacity: 0,
            x: "1.5rem",
          },
          visible: {
            filter: "blur(0rem)",
            opacity: 1,
            x: "0rem",
          },
        }}
      >
        Crie, registre e organize suas receitas em um só lugar. Em breve, você
        poderá conversar no WhatsApp com uma inteligência artificial integrada
        para montar cardápios, listas de compras e adaptar receitas às suas
        restrições e objetivos.
      </motion.p>

      <motion.div
        transition={{
          duration: 0.5,
          ease: "anticipate",
        }}
        variants={{
          hidden: {
            filter: "blur(0.25rem)",
            opacity: 0,
            x: "1.5rem",
          },
          visible: {
            filter: "blur(0rem)",
            opacity: 1,
            x: "0rem",
          },
        }}
      >
        <Button asLink className="rounded-full" href="#">
          Entrar na lista de espera!
        </Button>
      </motion.div>
    </div>

    <motion.div
      animate={{
        filter: "blur(0rem)",
        y: "0%",
      }}
      aria-hidden
      className={twMerge(
        "absolute flex h-fit items-center justify-center left-1/2 top-0 -translate-x-1/2 w-80 -z-10",
        "max-[1024px]:opacity-25",
        "sm:left-[73.0215%]",
      )}
      initial={{
        filter: "blur(0.5rem)",
        y: "100%",
      }}
      transition={{
        duration: 1,
        ease: "anticipate",
      }}
    >
      <WhatsappMockup />
    </motion.div>
  </motion.article>
);
