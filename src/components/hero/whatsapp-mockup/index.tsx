import React from "react";
import {
  ArrowLeft,
  BatteryMedium,
  EllipsisVertical,
  Signal,
  Wifi,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Mockup } from "@/components/mockup/index";
import artFoodIcon from "#/png/art-food-icon.png";
import whatsappBackground from "#/png/whatsapp-background.png";

type Message = {
  content: React.ReactNode;
  role: "assistant" | "user";
};

const messages: Message[] = [
  {
    role: "user",
    content: <>Oi! Tenho frango e batata em casa. Alguma ideia de jantar?</>,
  },
  {
    role: "assistant",
    content: (
      <>
        Claro 😋
        <br />
        Que tal frango assado com batata rústica ou algo mais rápido na
        frigideira?
      </>
    ),
  },
  {
    role: "user",
    content: <>Algo rápido. Sem forno.</>,
  },
  {
    role: "assistant",
    content: (
      <>
        Perfeito!
        <br />
        👉 Frango acebolado com batata dourada
        <br />
        ⏱️ Pronto em 25 minutos
        <br />
        Quer ver a receita?
      </>
    ),
  },
  {
    role: "user",
    content: <>Quero sim</>,
  },
  {
    role: "assistant",
    content: (
      <>
        <strong>Ingredientes:</strong>
        <br />• Frango em cubos
        <br />• Batata
        <br />• Cebola
        <br />• Alho
        <br />• Sal e páprica
        <br />
        <br />
        Quer o passo a passo ou prefere salvar primeiro?
      </>
    ),
  },
  {
    role: "user",
    content: <>Salva essa 🍗</>,
  },
  {
    role: "assistant",
    content: (
      <>
        Receita salva em “Favoritas” ⭐
        <br />
        Quer começar a preparar agora?
      </>
    ),
  },
  {
    role: "user",
    content: <>Bora</>,
  },
  {
    role: "assistant",
    content: (
      <>
        🔥 <strong>Passo 1</strong>
        <br />
        Doure o frango com alho e sal por 5 minutos.
        <br />
        Me avisa quando terminar 😉
      </>
    ),
  },
  {
    role: "user",
    content: <>Pronto</>,
  },
  {
    role: "assistant",
    content: (
      <>
        🔥 <strong>Passo 2</strong>
        <br />
        Na mesma panela, coloque a batata e deixe dourar.
        <br />
        Posso te lembrar do próximo passo?
      </>
    ),
  },
  {
    role: "user",
    content: <>Pode!</>,
  },
];

export const WhatsappMockup = () => (
  <Mockup>
    <div className="flex flex-col h-full relative w-full z-0" role="article">
      <Image
        alt=""
        aria-hidden
        className="absolute h-full object-cover w-full -z-10"
        height={512}
        loading="lazy"
        src={whatsappBackground}
        width={256}
      />

      <header className="bg-white flex flex-col shrink-0 text-black w-full">
        <div className="flex items-center justify-between py-2.5 px-4 w-full">
          <span className="font-bold font-roboto text-xs">09:21</span>

          <div className="flex gap-0.5 items-center w-fit">
            <Signal className="h-4 stroke-2 w-4" />
            <Wifi className="h-4 stroke-2 w-4" />
            <BatteryMedium className="h-4 stroke-2 w-4" />
          </div>
        </div>

        <div className="flex gap-2 items-center justify-between pb-2.5 px-4 w-full">
          <ArrowLeft className="h-4 stroke-2 w-4" />

          <div className="flex gap-1 items-center">
            <div className="bg-black/5 flex h-6 items-center justify-center rounded-full w-6">
              <Image
                aria-hidden
                alt=""
                className="h-4 object-contain w-4"
                height={24}
                loading="lazy"
                placeholder="blur"
                src={artFoodIcon}
                width={24}
              />
            </div>

            <div>
              <span className="font-bold text-xs text-black uppercase">
                Artfood
              </span>
            </div>
          </div>

          <EllipsisVertical className="h-4 stroke-2 w-4" />
        </div>
      </header>

      <motion.div
        className="auto-rows-min gap-2 grid grid-cols-1 h-full overflow-hidden p-4 w-full"
        initial="hidden"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.25,
              staggerChildren: 0.75,
            },
          },
        }}
        viewport={{ once: true }}
        whileInView="visible"
      >
        {messages.map(({ content, role }, index) => (
          <motion.div
            className={twMerge(
              "flex flex-col max-w-3/4 p-2 rounded-lg shadow text-xs w-fit",
              role === "user" && "bg-[#DCF7C5] ml-auto",
              role === "assistant" && "bg-white",
            )}
            key={index}
            transition={{
              duration: 0.75,
              ease: "anticipate",
            }}
            variants={{
              hidden: {
                filter: "blur(0.25rem)",
                opacity: 0,
                y: "0.25rem",
              },
              visible: {
                filter: "blur(0rem)",
                opacity: 1,
                y: "0rem",
              },
            }}
          >
            {content}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </Mockup>
);
