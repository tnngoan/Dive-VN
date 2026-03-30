import { NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  date: z.string().min(1),
  certLevel: z.string().min(1),
  depths: z.array(z.string()).min(1),
  requirements: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = bookingSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Resend/SendGrid) to send confirmation email to user and notification to staff
    // TODO: Store booking in database (Supabase/Planetscale)
    console.log("New booking inquiry:", result.data);

    return NextResponse.json({
      success: true,
      message:
        "Booking inquiry received. Our Master Divers will contact you within 4 hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
