import React from "react";
import { IconBase } from "react-icons";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";
import logoArtFood from "#/png/logo-art-food.png";

type Institutional = {
  href: LinkProps["href"];
  name: React.ReactNode;
};

type SocialMedia = {
  ariaLabel: React.AnchorHTMLAttributes<HTMLAnchorElement>["aria-label"];
  Icon: typeof IconBase;
  href: LinkProps["href"];
};

const institutional: Institutional[] = [
  { href: "#", name: "Termos" },
  { href: "#", name: "Política" },
  { href: "#", name: "Contato" },
];

const social: SocialMedia[] = [
  { href: "#", Icon: FaFacebook, ariaLabel: "Facebook" },
  { href: "#", Icon: FaInstagram, ariaLabel: "Instagram" },
  { href: "#", Icon: FaTwitter, ariaLabel: "Twitter" },
];

export const Footer = () => (
  <footer className="bg-gray flex items-center justify-center px-6 py-6 w-full">
    <div className="auto-rows-min gap-4 grid grid-cols-[auto_1fr] items-center max-w-278 w-full">
      <Link
        aria-label="Voltar para o inicio."
        className="flex h-fit items-center justify-center w-fit"
        href="#"
      >
        <Image
          alt="Artfood"
          className="h-10 object-contain w-auto"
          height={56}
          loading="lazy"
          placeholder="blur"
          src={logoArtFood}
          width={256}
        />
      </Link>

      <ul className="flex flex-wrap gap-2 items-center justify-end max-w-full w-full">
        {social.map(({ ariaLabel, Icon, href }, index) => (
          <li className="flex h-fit w-fit" key={index}>
            <Link
              aria-label={ariaLabel}
              className={twMerge(
                "duration-200 ease-standard flex h-fit text-white transition-all w-fit",
                "hover:scale-110 hover:brightness-75",
              )}
              href={href}
            >
              <Icon className="h-6 w-6" />
            </Link>
          </li>
        ))}
      </ul>

      <nav className="col-span-2 flex flex-wrap gap-2 items-center justify-start w-full">
        {institutional.map(({ href, name }, index) => (
          <Link
            className={twMerge(
              "duration-200 ease-standard font-medium text-sm text-white transition-all",
              "hover:scale-110 hover:brightness-75",
            )}
            href={href}
            key={index}
          >
            {name}
          </Link>
        ))}
      </nav>

      <div className="border-b border-b-white/25 col-span-2 flex w-full" />

      <span className="col-span-2 font-normal text-center text-white/75 text-xs w-full">
        © 2026 Artfood. Onde a gastronomia vira arte. Todos os direitos
        reservados.
      </span>
    </div>
  </footer>
);
