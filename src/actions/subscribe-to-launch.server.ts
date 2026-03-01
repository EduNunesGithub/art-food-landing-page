"use server";

import { leadSchema } from "@/schemas/lead";
import type { LeadApiResponse } from "@/types/lead-api";

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `+55${digits}`;
}

export type SubscribeActionState = LeadApiResponse | null;

export async function subscribeToLaunchAction(
  _prev: SubscribeActionState,
  formData: FormData,
): Promise<SubscribeActionState> {
  const parsed = leadSchema.parse({
    email: formData.get("email"),
    name: formData.get("name"),
    phone: formData.get("phone"),
  });

  const apiUrl = process.env.API_BASE_URL;
  const token = process.env.API_INTEGRATION_TOKEN;

  if (!apiUrl || !token) {
    throw new Error("[subscribeToLaunchAction] Variáveis de ambiente ausentes");
  }

  const response = await fetch(`${apiUrl}/integration/users/register`, {
    body: JSON.stringify({
      user: {
        email: parsed.email,
        name: parsed.name,
        phone: parsed.phone ? normalizePhone(parsed.phone) : undefined,
      },
    }),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  const text = await response.text();

  if (!response.ok || text.trimStart().startsWith("<")) {
    throw new Error(
      `[subscribeToLaunchAction] Resposta inesperada — status: ${response.status} — body: ${text.slice(0, 300)}`,
    );
  }

  return JSON.parse(text) as LeadApiResponse;
}
