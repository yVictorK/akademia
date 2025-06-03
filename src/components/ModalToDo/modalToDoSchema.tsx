import { z } from 'zod';

export const ModalSchema = z.object({
    texto: z.string()
        .min(1, 'Preencha os campos')
        .max(60, 'Texto muto grande, por favor digite um texto menor.')
});

export type modal = z.infer<typeof ModalSchema>;
