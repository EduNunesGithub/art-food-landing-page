"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { Mockup } from "@/components/mockup";
import { Button } from "@/components/ui/button";
import mobilePlaceholder from "#/png/mobile-placeholder.png";

export const AppComingSoon = () => (
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
            x: "1.5rem",
          },
          visible: {
            filter: "blur(0rem)",
            opacity: 1,
            x: "0rem",
          },
        }}
      >
        Em breve: App ArtFood
      </motion.h2>

      <motion.p
        className="text-white"
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
        Receitas organizadas, livros de receitas, menus personalizados e grupos
        de planejamento — tudo conectado ao seu assistente inteligente.
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
        <Button
          asLink
          className="bg-transparent border border-primary rounded-full text-primary"
          href="#"
        >
          Entrar na lista de espera!
        </Button>
      </motion.div>
    </div>

    <motion.div
      aria-hidden
      className={twMerge(
        "absolute flex h-fit items-center justify-center left-1/2 top-0 -translate-x-1/2 w-80 -z-10",
        "max-[1024px]:opacity-25",
        "sm:left-[73.0215%]",
      )}
      transition={{
        duration: 1,
        ease: "anticipate",
      }}
      variants={{
        hidden: {
          filter: "blur(0.5rem)",
          y: "100%",
        },
        visible: {
          filter: "blur(0rem)",
          y: "0%",
        },
      }}
    >
      <Mockup>
        <Image
          alt="Prévia do aplicativo ArtFood para organização de receitas e menus"
          className="h-full object-cover w-full"
          height={1024}
          loading="lazy"
          placeholder="blur"
          src={mobilePlaceholder}
          width={512}
        />
      </Mockup>
    </motion.div>
  </motion.article>
);
