import { Button } from "@/components/ui/button";

export const Hero = () => (
  <article className="flex flex-col py-20 text-black w-full">
    <div className="flex flex-col gap-4 max-w-128 w-full">
      <h1>Seu especialista em culinária, direto no WhatsApp.</h1>

      <p>
        Receitas, cardápios e listas de compras criados por uma IA que entende
        suas restrições e seus objetivos.
      </p>

      <Button asLink className="capitalize rounded-full" href="#">
        Falar com o Artfood no WhatsApp
      </Button>
    </div>
  </article>
);
