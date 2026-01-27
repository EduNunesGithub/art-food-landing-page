"use client";

import { motion } from "motion/react";
import { Price, PriceProps } from "@/components/pricing/price";

const prices: PriceProps[] = [
  {
    anchor: { href: "#", name: "Quero testar" },
    items: [
      "Acesso a mais de 1.000 receitas",
      "Crie e salve suas próprias receitas",
      "Crie menus semanais personalizados",
      "Gere listas de compras automaticamente",
      "Busque receitas pelo WhatsApp de forma simples e rápida",
    ],
    name: "Plano Básico",
    trial: "(ou grátis por 7 dias)",
    value: { monthly: 21.9, annual: 210.9 },
  },
  {
    anchor: { href: "#", name: "Quero testar" },
    items: [
      "Acesso ilimitado a receitas, incluindo novidades e receitas para datas comemorativas",
      "Crie, organize e edite suas próprias receitas",
      "Crie menus personalizados para qualquer ocasião",
      "Crie grupos de planejamento de receitas para viagens, eventos e momentos especiais",
      "Gere listas de compras completas a partir de receitas, menus e grupos",
      "Use o WhatsApp com um assistente inteligente para registrar refeições, receber dicas, criar menus personalizados e analisar calorias por foto",
    ],
    name: "Plano Chef",
    trial: "(ou grátis por 7 dias)",
    value: { monthly: 29.9, annual: 299.9 },
  },
];

export const Pricing = () => (
  <motion.article
    className="flex flex-col gap-6 items-center text-center w-full"
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
      Quais serão os planos do ArtFood IA?
    </motion.h2>

    <motion.ul
      className="flex flex-wrap gap-4 items-stretch justify-center w-full"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
    >
      {prices.map((price, index) => (
        <motion.li
          className="flex h-fit max-w-80 w-full"
          key={index}
          transition={{
            duration: 0.75,
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
          <Price {...price} />
        </motion.li>
      ))}
    </motion.ul>
  </motion.article>
);
