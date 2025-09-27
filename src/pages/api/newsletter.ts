import type { APIRoute } from 'astro';

// Do not prerender this API route and avoid any side effects at module load time
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get('email') as string;

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Read API key at runtime only (avoid build-time inlining and failures)
    const apiKey = (process as any)?.env?.RESEND_API_KEY as string | undefined;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'RESEND_API_KEY not set' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Lazy import to avoid touching the library during build
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    // Send email using Resend
    await resend.emails.send({
      from: 'newsletter@scienceonchain.com',
      to: ['newsletter@scienceonchain.com'], // Replace with your notification email
      subject: 'Nueva suscripción al newsletter',
      html: `
        <h2>Nueva suscripción al newsletter</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Fecha:</strong> ${new Date().toISOString()}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: 'Successfully subscribed to newsletter' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to subscribe to newsletter' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
