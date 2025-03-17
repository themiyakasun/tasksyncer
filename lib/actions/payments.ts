import Stripe from "stripe";
import { eq } from "drizzle-orm";

import { db } from "@/database/drizzle";
import { payments, users } from "@/database/schema";

export const handleCheckoutSessionCompleted = async ({
  session,
  stripe,
}: {
  session: Stripe.Checkout.Session;
  stripe: Stripe;
}) => {
  const customerId = session.customer as string;
  const customer = await stripe.customers.retrieve(customerId);
  const priceId = session.line_items?.data[0]?.price?.id;

  if ("email" in customer && priceId) {
    const { email } = customer;

    await updateUserPaymentDetails({
      email: email as string,
      customerId,
      priceId: priceId as string,
      status: "active",
    });

    await createPayment({
      session,
      priceId: priceId as string,
      userEmail: email as string,
    });
  }
};

export const updateUserPaymentDetails = async ({
  email,
  customerId,
  priceId,
  status,
}: {
  email: string;
  customerId: string;
  priceId: string;
  status: string;
}) => {
  try {
    await db
      .update(users)
      .set({ customerId, priceId, status: "active" })
      .where(eq(users.email, email));
  } catch (error) {
    console.log(error);
  }
};

export const createPayment = async ({
  session,
  priceId,
  userEmail,
}: {
  session: Stripe.Checkout.Session;
  priceId: string;
  userEmail: string;
}) => {
  try {
    const { amount_total, id, customer_email, status } = session;

    await db.insert(payments).values({
      amount: amount_total!,
      status,
      stripe_payment_id: id,
      price_id: priceId,
      user_email: userEmail,
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleSubscriptionCancel = async ({
  subscriptionId,
  stripe,
}: {
  subscriptionId: string;
  stripe: Stripe;
}) => {
  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    await db
      .update(users)
      .set({ status: "cancelled" })
      .where(eq(users.customerId, subscription.customer as string));

    console.log("payment cancelled successfully", subscription);
  } catch (error) {
    console.log(error);
  }
};
