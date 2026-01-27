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
  { Icon: Brain, name: "Conversa como um chef ou nutricionista" },
  { Icon: Ban, name: "Respeita suas restrições alimentares" },
  { Icon: Calendar, name: "Cria cardápios personalizados para sua rotina" },
  { Icon: ShoppingCart, name: "Gera listas de compras automaticamente" },
  { Icon: History, name: "Lembra do seu histórico de receitas e preferências" },
  { Icon: Salad, name: "Sugere variações mais saudáveis para suas receitas" },
];

export const Benefits = () => (
  <motion.article
    className="flex flex-col gap-8 items-center w-full"
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
      className="text-center w-full"
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
      O que o ArtFood IA vai fazer por você no dia a dia
    </motion.h2>

    <motion.ul
      className={twMerge(
        "auto-rows-min gap-4 grid grid-cols-1 w-full",
        "min-[30rem]:grid-cols-2",
        "min-[60rem]:grid-cols-3",
      )}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      {benefits.map(({ Icon, name }, index) => (
        <motion.li
          key={index}
          className="flex gap-2 items-center text-black text-base w-full"
          transition={{
            duration: 0.75,
            ease: "anticipate",
          }}
          variants={{
            hidden: {
              filter: "blur(0.25rem)",
              opacity: 0,
              y: "0.5rem",
            },
            visible: {
              filter: "blur(0rem)",
              opacity: 1,
              y: "0rem",
            },
          }}
        >
          <Icon className="h-6 w-6 shrink-0 text-primary" />
          <span className="font-medium">{name}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.article>
);
