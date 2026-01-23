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

const BLOCK_DELAY = 0.25;

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
    className="flex flex-col gap-8 items-center text-black w-full"
    initial="hidden"
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.25 } },
    }}
    viewport={{ once: true }}
    whileInView="visible"
  >
    <motion.h2
      className="text-center"
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
      Como Funciona (em 3 Passos)
    </motion.h2>

    <motion.ul
      className="flex flex-wrap gap-6 items-center justify-center w-full"
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
      {items.map((rest, index) => (
        <motion.li
          className="flex items-center max-w-64 w-full"
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
          <Item {...rest} baseDelay={index * 0.25} />
        </motion.li>
      ))}
    </motion.ul>

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
      <Link
        className={twMerge(
          "duration-200 ease-standard flex font-bold gap-1 group items-center max-w-full text-primary text-base transition-all w-fit",
          "hover:brightness-125",
        )}
        href="#"
      >
        <span>Começar agora no WhatsApp</span>
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
