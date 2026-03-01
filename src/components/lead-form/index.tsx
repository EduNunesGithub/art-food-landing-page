"use client";

import {
  subscribeToLaunchAction,
  type SubscribeActionState,
} from "@/actions/subscribe-to-launch.server";
import { SquareCheck } from "lucide-react";
import { useActionState, useEffect } from "react";

interface LeadFormProps {
  onSuccess?: () => void;
}

const initialState: SubscribeActionState = null;

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function LeadForm({ onSuccess }: LeadFormProps) {
  const [state, action, isPending] = useActionState(
    subscribeToLaunchAction,
    initialState,
  );

  useEffect(() => {
    if (!state?.success || !onSuccess) return;
    const timer = setTimeout(onSuccess, 2000);
    return () => clearTimeout(timer);
  }, [onSuccess, state?.success]);

  if (state?.success) {
    return (
      <div className="flex flex-col gap-4 items-center py-4 text-center w-full">
        <div className="bg-green-100 flex items-center justify-center p-4 rounded-2xl">
          <SquareCheck className="h-8 text-green-600 w-8" strokeWidth={1.5} />
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold text-gray-900 text-lg">
            Você está na lista!
          </p>
          <p className="text-gray-500 text-sm">
            Avisaremos assim que o ArtFood estiver disponível.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-4 w-full">
      {state && !state.success && (
        <ul className="flex flex-col gap-1">
          {state.details.map((message) => (
            <li className="text-red-500 text-sm" key={message}>
              {message}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col gap-1">
        <label className="font-medium text-sm" htmlFor="name">
          Nome
        </label>
        <input
          className="border border-gray-300 px-3 py-2 rounded-md text-sm"
          id="name"
          name="name"
          placeholder="Seu nome completo"
          required
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium text-sm" htmlFor="email">
          E-mail
        </label>
        <input
          className="border border-gray-300 px-3 py-2 rounded-md text-sm"
          id="email"
          name="email"
          placeholder="seu@email.com"
          required
          type="email"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium text-sm" htmlFor="phone">
          Telefone <span className="font-normal text-gray-400">(opcional)</span>
        </label>
        <input
          className="border border-gray-300 px-3 py-2 rounded-md text-sm"
          id="phone"
          maxLength={16}
          name="phone"
          onChange={(e) => {
            e.target.value = maskPhone(e.target.value);
          }}
          placeholder="(11) 99999-9999"
          type="tel"
        />
      </div>

      <button
        className="bg-primary cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 font-medium px-4 py-2 rounded-md text-sm text-white"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "Enviando..." : "Quero ser notificado"}
      </button>
    </form>
  );
}
