import { z } from "zod";

export const leadSchema = z.object({
  email: z.string().email("E-mail inválido"),
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres").max(100),
  phone: z
    .string()
    .regex(/^\(?\d{2}\)?[\s-]?9?\d{4}[-\s]?\d{4}$/, "Telefone inválido")
    .optional()
    .or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
