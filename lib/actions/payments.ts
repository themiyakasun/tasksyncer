import Stripe from "stripe";

export const handleCheckoutSessionCompleted = async ({
  session,
  stripe,
}: {
  session: Stripe.Checkout.Session;
  stripe: Stripe;
}) => {
  console.log("Checkout Session Completed", session);
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
}) => {};
