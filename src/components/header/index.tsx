import Image from "next/image";
import Link from "next/link";
import logoArtFood from "#/png/logo-art-food.png";

export const Header = () => (
  <header className="backdrop-blur-2xl bg-white flex items-center justify-center px-6 py-4 shadow sticky top-0 w-full z-50">
    <div className="flex items-center max-w-278 w-full">
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
    </div>
  </header>
);
