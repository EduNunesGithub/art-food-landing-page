"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Mockup } from "@/components/mockup";
import { Button } from "@/components/ui/button";
import mobilePlaceholder from "#/png/mobile-placeholder.png";

export const AppComingSoon = () => (
  <article className="flex flex-row items-end text-black relative w-full z-0">
    <div className="flex flex-col gap-4 max-w-128 w-full z-0">
      <h2 className="text-white">Em breve: App ArtFood</h2>

      <p className="text-white">
        Receitas, livros de receitas, menus personalizados e grupos — tudo
        conectado ao seu assistente.
      </p>

      <Button
        asLink
        className="bg-transparent border border-primary rounded-full text-primary"
        href="#"
      >
        Entrar na lista de espera!
      </Button>
    </div>

    <div
      aria-hidden
      className={twMerge(
        "absolute duration-200 ease-standard flex h-fit items-center justify-center left-1/2 top-0 -translate-x-1/2 transition-all w-80 -z-10",
        "max-[1024px]:opacity-25",
        "sm:left-[73.0215%]",
      )}
    >
      <Mockup aria-hidden>
        <Image
          alt=""
          className="h-full object-cover w-full"
          height={1024}
          loading="lazy"
          placeholder="blur"
          src={mobilePlaceholder}
          width={512}
        />
      </Mockup>
    </div>
  </article>
);
