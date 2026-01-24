"use client";

import Link from "next/link";
import {
  Brain,
  ChevronRight,
  ClipboardList,
  MessageCircleMore,
} from "lucide-react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { Item, ItemProps } from "@/components/how-it-works/item";

const items: Omit<ItemProps, "baseDelay">[] = [
  {
    Icon: MessageCircleMore,
    heading: "Você conversa",
    paragraph: "Diga o que você quer cozinhar, suas restrições ou objetivos.",
  },
  {
    Icon: Brain,
    heading: "A IA entende seu perfil",
    paragraph: "Ela grava suas preferências, alergias, metas e limitações.",
  },
  {
    Icon: ClipboardList,
    heading: "Você recebe tudo pronto",
    paragraph: "Receitas, cardápios e lista de compras.",
  },
];

export const HowItWorks = () => (
  <motion.article
    className="flex flex-col gap-6 items-center text-black w-full"
    initial="hidden"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.5,
        },
      },
    }}
    viewport={{ once: true }}
    whileInView="visible"
  >
    <motion.h2
      className="text-center"
      transition={{
        duration: 1,
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
      Como Funciona
    </motion.h2>

    <motion.ul
      className="flex flex-wrap gap-4 items-center justify-center w-full"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.75,
          },
        },
      }}
    >
      {items.map((rest, index) => (
        <motion.li
          key={index}
          className="flex items-center max-w-64 w-full"
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
          variants={{
            hidden: {
              filter: "blur(0.25rem)",
              opacity: 0,
              y: "1rem",
            },
            visible: {
              filter: "blur(0rem)",
              opacity: 1,
              y: "0rem",
            },
          }}
        >
          <Item {...rest} />
        </motion.li>
      ))}
    </motion.ul>

    <motion.div
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
          opacity: 1,
          filter: "blur(0rem)",
          y: "0rem",
        },
      }}
    >
      <Link
        className={twMerge(
          "duration-200 ease-standard flex font-bold gap-1 group items-center max-w-full text-primary text-base transition-all w-fit",
          "hover:brightness-125",
        )}
        href="#"
      >
        <span>Seja notificado quando lançar</span>
        <ChevronRight
          className={twMerge(
            "duration-200 ease-standard shrink-0 transition-all",
            "group-hover:translate-x-2",
          )}
        />
      </Link>
    </motion.div>
  </motion.article>
);
