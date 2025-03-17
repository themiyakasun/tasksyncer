export const FIELD_NAMES = {
  fullName: "Full Name",
  email: "Email",
  phoneNumber: "Phone Number",
  password: "Password",
  avatar: "Avatar",
};

export const FIELD_TYPES = {
  fullName: "text",
  email: "email",
  phoneNumber: "text",
  password: "password",
};

export const prices = [
  {
    packageName: "Standard",
    id: "standard",
    description: "For individuals and teams looking to get more done",
    price: 5,
    items: ["Collaborators 10", "Boards 10", "File attachments 10mb"],
    paymentLink: "https://buy.stripe.com/test_00g8zk3BX7469zO4gh",
    priceId: "price_1R269SFZSJCBgTIKx238BWwg",
  },
  {
    packageName: "Premium",
    id: "premium",
    description:
      "For teams and companies that need to visualize their work in a variety of ways while tracking multiple projects.",
    price: 10,
    items: [
      "Collaborators unlimited",
      "Boards unlimited",
      "File attachments 250mb",
    ],
    paymentLink: "https://buy.stripe.com/test_5kA3f08Whagi4fu28a",
    priceId: "price_1R26ALFZSJCBgTIKqSUVP6gG",
  },
];
