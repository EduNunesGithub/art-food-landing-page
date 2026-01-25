"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export const ContactCta = () => (
  <motion.article
    className="flex flex-col gap-4 items-center text-center w-full"
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
    <motion.h2
      className="text-white"
      transition={{
        duration: 1,
        ease: "anticipate",
      }}
      variants={{
        hidden: {
          filter: "blur(0.25rem)",
          opacity: 0,
          y: "1.5rem",
        },
        visible: {
          filter: "blur(0rem)",
          opacity: 1,
          y: "0rem",
        },
      }}
    >
      Comece a comer melhor, com ajuda de quem entende de comida.
    </motion.h2>

    <motion.div
      transition={{
        duration: 0.5,
        ease: "anticipate",
      }}
      variants={{
        hidden: {
          filter: "blur(0.25rem)",
          opacity: 0,
          y: "1.5rem",
        },
        visible: {
          filter: "blur(0rem)",
          opacity: 1,
          y: "0rem",
        },
      }}
    >
      <Button asLink className="bg-white rounded-full text-primary" href="#">
        Entre na lista de espera!
      </Button>
    </motion.div>
  </motion.article>
);
