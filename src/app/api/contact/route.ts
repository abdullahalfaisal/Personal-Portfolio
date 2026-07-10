import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { personalData } from '@/lib/data';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Server misconfiguration. Missing API key.' },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input data', details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    const data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'foysalislam60@gmail.com',
      subject: `New message from ${name} via Portfolio`,
      replyTo: email,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    console.error("Resend Error:", error);
    return NextResponse.json(
      { error: error.message || 'An unexpected error occurred while sending the email.' },
      { status: 500 }
    );
  }
}
