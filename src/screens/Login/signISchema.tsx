import { z } from 'zod';

export const userSchema = z.object({
    email: z.string()
        .min(1, 'Preencha os campos')
        .email("Por favor digite um email válido"),
    password: z.string()
        .min(1, 'Preencha os campos')
        .min(8, 'A senha possui no mínimo 8 caracteres'),
});

export type user = z.infer<typeof userSchema>;
