import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

export type ItemProps = {
  Icon: LucideIcon;
  heading: React.ReactNode;
  paragraph: React.ReactNode;
};

export const Item: React.FC<ItemProps> = ({ Icon, heading, paragraph }) => (
  <article className="flex flex-col gap-2 items-center text-center w-full">
    <motion.div
      className="bg-primary flex h-16 items-center justify-center rounded-full text-white w-16"
      transition={{
        duration: 0.75,
        ease: "anticipate",
      }}
      variants={{
        hidden: {
          filter: "blur(0.25rem)",
          opacity: 0,
          scale: 0.75,
        },
        visible: {
          filter: "blur(0rem)",
          opacity: 1,
          scale: 1,
        },
      }}
    >
      <Icon className="h-8 stroke-1 w-8" />
    </motion.div>

    <motion.h3
      className="text-base"
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
      {heading}
    </motion.h3>

    <motion.p
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
      {paragraph}
    </motion.p>
  </article>
);
