'use server';

import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("El correo no es válido"),
});

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  const validatedFields = schema.safeParse({ name, email });

  if (!validatedFields.success) {
    return { success: false, message: 'Datos inválidos. Revisa tu correo.' };
  }

  const webhookUrl = process.env.NEXT_PUBLIC_N8N_NEWSLETTER_WEBHOOK;

  if (!webhookUrl) {
    console.error("Missing NEXT_PUBLIC_N8N_NEWSLETTER_WEBHOOK");
    return { success: false, message: 'Error de configuración del servidor.' };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name, 
        email, 
        source: 'footer_newsletter_server_action',
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook failed with status: ${response.status}`);
    }

    return { success: true, message: '¡Suscripción exitosa!' };
  } catch (error) {
    console.error("Newsletter Server Action Error:", error);
    return { success: false, message: 'Error al conectar con el servidor.' };
  }
}
