
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingDetails: BookingRequest = await req.json();
    const { name, email, phone, checkIn, checkOut, guests, message } = bookingDetails;

    // Email to business
    const emailToBusiness = resend.emails.send({
      from: "Ikaya Booking <onboarding@resend.dev>",
      to: ["ikayapsj2@gmail.com"],
      subject: `New Booking Inquiry from ${name}`,
      html: `
        <h1>New Booking Inquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional requests.'}</p>
      `,
    });

    // Confirmation email to user
    const emailToUser = resend.emails.send({
      from: "Ikaya Accommodation PSJ <onboarding@resend.dev>",
      to: [email],
      subject: "Your Booking Inquiry has been received!",
      html: `
        <h1>Thank you for your inquiry, ${name}!</h1>
        <p>We have received your booking request for Ikaya Accommodation PSJ and will get back to you as soon as possible to confirm availability.</p>
        <p>Here are the details you submitted:</p>
        <ul>
            <li><strong>Check-in:</strong> ${checkIn}</li>
            <li><strong>Check-out:</strong> ${checkOut}</li>
            <li><strong>Guests:</strong> ${guests}</li>
        </ul>
        <p>Best regards,<br>The Ikaya Accommodation PSJ Team</p>
      `,
    });

    await Promise.all([emailToBusiness, emailToUser]);

    return new Response(JSON.stringify({ message: "Emails sent successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
