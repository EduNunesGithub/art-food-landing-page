"use client";

import React from "react";
import {
  Brain,
  Ban,
  Calendar,
  ShoppingCart,
  History,
  Salad,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

type Benefit = {
  Icon: LucideIcon;
  name: React.ReactNode;
};

const benefits: Benefit[] = [
  {
    Icon: Brain,
    name: "Conversa como um chef/nutricionista",
  },
  {
    Icon: Ban,
    name: "Respeita restrições alimentares",
  },
  {
    Icon: Calendar,
    name: "Cria cardápios personalizados",
  },
  {
    Icon: ShoppingCart,
    name: "Gera lista de compras automaticamente",
  },
  {
    Icon: History,
    name: "Lembra do seu histórico",
  },
  {
    Icon: Salad,
    name: "Sugere variações saudáveis",
  },
];

export const Benefits = () => (
  <motion.article
    className="flex flex-col gap-8 items-center w-full"
    initial="hidden"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.25 } },
    }}
    viewport={{ once: true }}
    whileInView="visible"
  >
    <motion.h2
      className="text-left w-full"
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
      O que o Artfood AI faz por você
    </motion.h2>

    <motion.ul
      className={twMerge(
        "auto-rows-min gap-6 grid grid-cols-1 items-start justify-items-center w-full",
        "min-[30rem]:grid-cols-2",
        "min-[60rem]:grid-cols-3",
      )}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      {benefits.map(({ Icon, name }, index) => (
        <motion.li
          className="flex gap-2 items-center justify-start text-black text-base w-full"
          key={index}
          variants={{
            hidden: { filter: "blur(0.25rem)", opacity: 0, y: 24 },
            visible: {
              filter: "blur(0rem)",
              opacity: 1,
              transition: { duration: 1, ease: "anticipate" },
              y: 0,
            },
          }}
        >
          <Icon className="h-6 shrink-0 text-primary w-6" />
          <span className="font-medium">{name}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.article>
);
