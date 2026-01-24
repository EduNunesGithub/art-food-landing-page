import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import iphoneMockup from "#/png/iphone-mockup.png";

export type MockupProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  size?: MockupSize;
};

type MockupSize = "1/3" | "2/3" | "normal";

const BASE = {
  mockupHeight: 512,
  content: {
    heightPercent: 95.75,
    widthPercent: 90.5,
    borderRadius: 32,
  },
};

const HEIGHTS: Record<MockupSize, number> = {
  "1/3": 192,
  "2/3": 320,
  normal: 512,
};

export const Mockup: React.FC<MockupProps> = ({
  size = "normal",
  ...props
}) => {
  const mockupHeight = HEIGHTS[size];
  const scale = mockupHeight / BASE.mockupHeight;

  const contentStyle: React.CSSProperties = {
    borderRadius: BASE.content.borderRadius * scale,
    height: `${BASE.content.heightPercent}%`,
    width: `${BASE.content.widthPercent}%`,
  };

  return (
    <div className="flex h-fit items-center justify-center pointer-events-none relative shrink-0 w-fit z-0">
      <Image
        alt=""
        aria-hidden
        className="object-contain shrink-0 w-auto z-10"
        height={512}
        loading="lazy"
        placeholder="blur"
        quality={100}
        src={iphoneMockup}
        style={{ height: mockupHeight }}
        width={256}
      />

      <div
        {...props}
        className={twMerge(
          "absolute auto-rows-min grid grid-cols-1 grid-rows-1 overflow-hidden -z-20",
          props.className,
        )}
        style={{ ...contentStyle, ...props.style }}
      />
    </div>
  );
};
