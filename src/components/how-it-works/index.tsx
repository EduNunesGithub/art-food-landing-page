"use client";

import {
  Brain,
  ChevronRight,
  ClipboardList,
  MessageCircleMore,
} from "lucide-react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { Item, ItemProps } from "@/components/how-it-works/item";
import { useLeadDialog } from "@/providers/lead-dialog-provider";

const items: Omit<ItemProps, "baseDelay">[] = [
  {
    Icon: MessageCircleMore,
    heading: "Você conversa no WhatsApp",
    paragraph:
      "Diga o que você quer cozinhar, suas restrições alimentares ou seus objetivos diretamente pelo WhatsApp.",
  },
  {
    Icon: Brain,
    heading: "A IA entende seu perfil alimentar",
    paragraph:
      "A inteligência artificial registra suas preferências, alergias, metas e limitações para personalizar as recomendações.",
  },
  {
    Icon: ClipboardList,
    heading: "Receitas e organização prontas",
    paragraph:
      "Receba receitas personalizadas, cardápios organizados e listas de compras prontas para o dia a dia.",
  },
];

export const HowItWorks = () => {
  const { openLeadDialog } = useLeadDialog();

  return (
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
        transition={{ duration: 1, ease: "anticipate" }}
        variants={{
          hidden: { filter: "blur(0.25rem)", opacity: 0, y: "0.5rem" },
          visible: { filter: "blur(0rem)", opacity: 1, y: "0rem" },
        }}
      >
        Como irá funcionar o app de receitas
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
            className="flex items-center max-w-64 w-full"
            key={index}
            transition={{ duration: 1, ease: "anticipate" }}
            variants={{
              hidden: { filter: "blur(0.25rem)", opacity: 0, y: "1rem" },
              visible: { filter: "blur(0rem)", opacity: 1, y: "0rem" },
            }}
          >
            <Item {...rest} />
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        transition={{ duration: 0.75, ease: "anticipate" }}
        variants={{
          hidden: { filter: "blur(0.25rem)", opacity: 0, y: "0.5rem" },
          visible: { filter: "blur(0rem)", opacity: 1, y: "0rem" },
        }}
      >
        <button
          className={twMerge(
            "duration-200 ease-standard flex font-bold gap-1 group items-center max-w-full text-primary text-base transition-all w-fit",
            "hover:brightness-125",
          )}
          onClick={openLeadDialog}
          type="button"
        >
          <span>Seja notificado quando lançar</span>
          <ChevronRight
            className={twMerge(
              "duration-200 ease-standard shrink-0 transition-all",
              "group-hover:translate-x-2",
            )}
          />
        </button>
      </motion.div>
    </motion.article>
  );
};
