import React from "react";
import {
  ArrowLeft,
  BatteryMedium,
  EllipsisVertical,
  Signal,
  Wifi,
} from "lucide-react";
import { animate, motion, useAnimationControls, useInView } from "motion/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Mockup } from "@/components/mockup/index";
import artFoodIcon from "#/png/art-food-icon.png";
import whatsappBackground from "#/png/whatsapp-background.png";

type Message = {
  content: React.ReactNode;
  role: "assistant" | "user";
};

export type WhatsappMockupProps = {
  sectionRef: React.RefObject<HTMLElement | null>;
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
  { role: "user", content: <>Algo rápido. Sem forno.</> },
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
  { role: "user", content: <>Quero sim</> },
  {
    role: "assistant",
    content: (
      <>
        {" "}
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
  { role: "user", content: <>Salva essa 🍗</> },
  {
    role: "assistant",
    content: (
      <>
        Receita salva em “Favoritas” ⭐<br />
        Quer começar a preparar agora?
      </>
    ),
  },
  { role: "user", content: <>Bora</> },
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
  { role: "user", content: <>Pronto</> },
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
  { role: "user", content: <>Pode!</> },
];

export const WhatsappMockup: React.FC<WhatsappMockupProps> = ({
  sectionRef,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isRunningRef = React.useRef(false);
  const lastAnimationEndRef = React.useRef<number>(0);
  const queueRef = React.useRef<Array<() => Promise<void>>>([]);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const timeout = window.setTimeout(() => {
      requestAnimationFrame(() => {
        animate(el.scrollTop, el.scrollHeight - el.clientHeight, {
          duration: 30,
          ease: "linear",
          onUpdate: (latest) => (el.scrollTop = latest),
        });
      });
    }, 3000);
    return () => window.clearTimeout(timeout);
  }, []);

  const runQueue = async () => {
    if (isRunningRef.current) return;
    isRunningRef.current = true;
    while (queueRef.current.length > 0) {
      const next = queueRef.current.shift()!;
      await next();
    }
    isRunningRef.current = false;
  };

  const MessageBubble = ({
    content,
    index,
    role,
  }: {
    content: React.ReactNode;
    index: number;
    role: Message["role"];
  }) => {
    const ref = React.useRef<HTMLDivElement | null>(null);

    const controls = useAnimationControls();
    const inView = useInView(ref, {
      root: sectionRef,
      once: true,
    });

    React.useEffect(() => {
      if (!inView) return;
      queueRef.current.push(async () => {
        const now = performance.now();
        const minStart = lastAnimationEndRef.current + 1500;
        const delay = Math.max(0, minStart - now);

        await controls.start({
          opacity: 1,
          scale: 1,
          transition: {
            delay: delay / 1000,
            duration: 0.5,
            ease: "anticipate",
          },
          y: 0,
        });

        lastAnimationEndRef.current = performance.now();
      });
      runQueue();
    }, [inView]);

    return (
      <motion.div
        animate={controls}
        className={twMerge(
          "flex flex-col max-w-3/4 p-2 rounded-lg shadow text-xs w-fit",
          role === "user" && "bg-[#DCF7C5] ml-auto",
          role === "assistant" && "bg-white",
        )}
        initial={{ opacity: 0, y: 16, scale: 0.75 }}
        ref={ref}
      >
        {content}
      </motion.div>
    );
  };

  return (
    <Mockup>
      <motion.div
        className="flex flex-col h-full relative w-full z-0"
        role="article"
      >
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
          className="auto-rows-min gap-2 grid grid-cols-1 h-full overflow-y-auto p-4 w-full"
          ref={containerRef}
        >
          {messages.map((m, index) => (
            <MessageBubble
              key={index}
              index={index}
              role={m.role}
              content={m.content}
            />
          ))}
        </motion.div>
      </motion.div>
    </Mockup>
  );
};
