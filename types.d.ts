interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  avatar: string;
}

interface Board {
  title: string;
}

interface User {
  id: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  avatar: string;
  customerId: string | null;
  priceId: string | null;
  status: string | null;
  createdAt: Date | null;
}
