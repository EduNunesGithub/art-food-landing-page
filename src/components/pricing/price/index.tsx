"use client";

import React from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import { Check } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { UrlObject } from "url";
import { Button } from "@/components/ui/button";
import blurryGradient from "#/svg/blurry-gradient.svg";

export type PriceProps = {
  anchor: {
    href: string | (UrlObject & string);
    name: React.ReactNode;
  };
  items: React.ReactNode[];
  name: React.ReactNode;
  trial?: React.ReactNode;
  value: {
    annual: number;
    monthly: number;
  };
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

export const Price: React.FC<PriceProps> = ({
  anchor,
  items,
  name,
  value,
  trial,
}) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <article className="bg-white flex flex-col gap-4 overflow-hidden relative rounded-lg shadow-xl w-full z-0">
      <Image
        aria-hidden
        alt=""
        className={twMerge(
          "absolute duration-200 ease-standard h-full left-0 object-cover opacity-0 top-0 transition-all w-full -z-10",
          checked && "opacity-5",
        )}
        src={blurryGradient}
      />

      <div className="border-b-8 border-primary flex w-full" />

      <div className="flex gap-4 items-center justify-center w-full">
        <span
          className={twMerge(
            "duration-200 ease-standard font-bold text-sm text-black transition-all",
            !checked && "underline",
          )}
        >
          Mensal
        </span>

        <Switch
          checked={checked}
          className="bg-gray/20 cursor-pointer duration-200 ease-standard group h-6 inline-flex items-center rounded-full transition-all data-checked:bg-primary/75 w-14"
          onChange={setChecked}
        >
          <span className="bg-white duration-200 ease-standard rounded-full size-4 transition-all translate-x-1 group-data-checked:translate-x-9" />
        </Switch>

        <span
          className={twMerge(
            "duration-200 ease-standard font-bold text-sm text-black transition-all",
            checked && "underline",
          )}
        >
          Anual
        </span>
      </div>

      <h3 className="font-bold text-xl">{name}</h3>

      <ul className="flex flex-col gap-1 items-start px-4 text-left w-full">
        {items.map((item, index) => (
          <li
            className="flex font-medium gap-1 items-start text-base text-gray"
            key={index}
          >
            <Check className="h-6 shrink-0 text-primary w-6" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <span className="inline-block justify-center mt-auto px-6 text-primary w-full">
        <span className="font-bold mr-2 text-xl">R$</span>
        <strong className="font-bold text-4xl">
          {checked
            ? formatCurrency(value.annual)
            : formatCurrency(value.monthly)}
        </strong>
        <span className="font-bold text-xl">
          {checked ? <>/ano</> : <>/mês</>}
        </span>
      </span>

      {trial && (
        <span className="flex font-medium items-center justify-center -mt-4 px-4 pb-4 text-center text-gray text-sm">
          {trial}
        </span>
      )}

      <div className="hidden items-center justify-center px-4 pb-4 w-full">
        <Button asLink className="rounded-full w-full" href={anchor.href}>
          {anchor.name}
        </Button>
      </div>
    </article>
  );
};
