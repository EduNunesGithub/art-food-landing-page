import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

export type ItemProps = {
  baseDelay: number;
  Icon: LucideIcon;
  heading: React.ReactNode;
  paragraph: React.ReactNode;
};

export const Item: React.FC<ItemProps> = ({
  baseDelay,
  Icon,
  heading,
  paragraph,
}) => (
  <article className="flex flex-col gap-2 items-center text-center w-full">
    <div className="bg-primary flex h-16 items-center justify-center rounded-full text-white w-16">
      <Icon className="h-8 stroke-1 w-8" />
    </div>

    <motion.h3
      className="text-base"
      variants={{
        hidden: { filter: "blur(0.25rem)", opacity: 0, x: 24 },
        visible: {
          filter: "blur(0rem)",
          opacity: 1,
          transition: { duration: 1, ease: "anticipate" },
          x: 0,
        },
      }}
    >
      {heading}
    </motion.h3>

    <motion.p
      variants={{
        hidden: { filter: "blur(0.25rem)", opacity: 0, x: -24 },
        visible: {
          filter: "blur(0rem)",
          opacity: 1,
          transition: { duration: 1, ease: "anticipate" },
          x: 0,
        },
      }}
    >
      {paragraph}
    </motion.p>
  </article>
);
