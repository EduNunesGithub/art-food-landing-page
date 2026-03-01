"use server";

import { leadSchema } from "@/schemas/lead";
import type { LeadApiResponse } from "@/types/lead-api";

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  return `+55${digits}`;
}

export type SubscribeActionState = {
  errors?: Partial<Record<"email" | "name" | "phone" | "root", string[]>>;
  success: boolean;
};

export async function subscribeToLaunchAction(
  _prev: SubscribeActionState,
  formData: FormData,
): Promise<SubscribeActionState> {
  const parsed = leadSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    phone: formData.get("phone"),
  });

  if (!parsed.success) {
    const fields = parsed.error.flatten().fieldErrors;
    return {
      errors: {
        email: fields.email,
        name: fields.name,
        phone: fields.phone,
      },
      success: false,
    };
  }

  const apiUrl = process.env.API_BASE_URL;
  const token = process.env.API_INTEGRATION_TOKEN;

  if (!apiUrl || !token) {
    console.error("[subscribeToLaunchAction] Variáveis de ambiente ausentes");
    return {
      errors: { root: ["Erro interno. Tente novamente em instantes."] },
      success: false,
    };
  }

  let response: Response;

  try {
    response = await fetch(`${apiUrl}/integration/users/register`, {
      body: JSON.stringify({
        user: {
          email: parsed.data.email,
          name: parsed.data.name,
          phone: parsed.data.phone
            ? normalizePhone(parsed.data.phone)
            : undefined,
        },
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  } catch {
    console.error("[subscribeToLaunchAction] Falha de rede");
    return {
      errors: { root: ["Serviço indisponível. Tente novamente em instantes."] },
      success: false,
    };
  }

  const body: LeadApiResponse = await response.json();

  if (!body.success) {
    return {
      errors: { root: body.details },
      success: false,
    };
  }

  return { success: true };
}
