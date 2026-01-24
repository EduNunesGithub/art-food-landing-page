"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export const ContactCta = () => (
  <motion.article
    className="flex flex-col gap-6 items-center text-center w-full"
    initial="hidden"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.25 } },
    }}
    viewport={{ once: true }}
    whileInView="visible"
  >
    <motion.h2
      className="text-white"
      variants={{
        hidden: {
          filter: "blur(0.25rem)",
          opacity: 0,
          x: -24,
        },
        visible: {
          filter: "blur(0rem)",
          opacity: 1,
          transition: {
            duration: 1,
            ease: "anticipate",
          },
          x: 0,
        },
      }}
    >
      Comece a comer melhor, com ajuda de quem entende de comida.
    </motion.h2>

    <motion.div
      variants={{
        hidden: {
          filter: "blur(0.25rem)",
          opacity: 0,
          x: 24,
        },
        visible: {
          filter: "blur(0rem)",
          opacity: 1,
          transition: {
            duration: 1,
            ease: "anticipate",
          },
          x: 0,
        },
      }}
    >
      <Button
        asLink
        className="bg-white capitalize rounded-full text-primary"
        href="#"
      >
        Entre na lista de espera!
      </Button>
    </motion.div>
  </motion.article>
);
