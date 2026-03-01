"use client";

import {
  subscribeToLaunchAction,
  type SubscribeActionState,
} from "@/actions/subscribe-to-launch.server";
import { useActionState, useEffect } from "react";

interface LeadFormProps {
  onSuccess?: () => void;
}

const initialState: SubscribeActionState = { success: false };

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
    if (!state.success || !onSuccess) return;
    const timer = setTimeout(onSuccess, 2000);
    return () => clearTimeout(timer);
  }, [onSuccess, state.success]);

  if (state.success) {
    return (
      <div className="flex flex-col gap-4 items-center py-4 text-center w-full">
        <div className="bg-green-100 flex items-center justify-center p-4 rounded-2xl">
          <svg
            aria-hidden="true"
            className="h-8 text-green-600 w-8"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
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
      {state.errors?.root && (
        <ul className="flex flex-col gap-1">
          {state.errors.root.map((message) => (
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
        {state.errors?.name && (
          <span className="text-red-500 text-xs">{state.errors.name[0]}</span>
        )}
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
        {state.errors?.email && (
          <span className="text-red-500 text-xs">{state.errors.email[0]}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium text-sm" htmlFor="phone">
          Telefone <span className="font-normal text-gray-400">(opcional)</span>
        </label>
        <input
          className="border border-gray-300 px-3 py-2 rounded-md text-sm"
          id="phone"
          name="phone"
          onChange={(e) => {
            e.target.value = maskPhone(e.target.value);
          }}
          placeholder="(11) 99999-9999"
          type="tel"
        />
        {state.errors?.phone && (
          <span className="text-red-500 text-xs">{state.errors.phone[0]}</span>
        )}
      </div>

      <button
        className="bg-primary disabled:cursor-not-allowed cursor-pointer disabled:opacity-60 font-medium px-4 py-2 rounded-md text-sm text-white"
        disabled={isPending}
        type="submit"
      >
        {isPending ? "Enviando..." : "Quero ser notificado"}
      </button>
    </form>
  );
}
