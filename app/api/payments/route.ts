import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { handleCheckoutSessionCompleted } from "@/lib/actions/payments";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export const POST = async (req: NextRequest) => {
  const payload = await req.text();

  const sig = req.headers.get("stripe-signature");

  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig!, endpointSecret);

    switch (event.type) {
      case "checkout.session.completed":
        console.log("Checkout session completed");
        const sessionId = event.data.object.id;
        const session = await stripe.checkout.sessions.retrieve(sessionId, {
          expand: ["line_items"],
        });

        await handleCheckoutSessionCompleted({ session, stripe });

        break;
      case "customer.subscription.deleted":
        console.log("Customer subscription deleted");
        const subscription = event.data.object;
        console.log("subscription", subscription);
        break;

      default:
        console.log(`Unhandle event ${event.type}`);
    }
  } catch (error) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    message: "Payment was successfully",
  });
};
