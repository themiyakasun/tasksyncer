interface AuthCredentials {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  avatar: string;
}

interface Board {
  id?: string;
  title: string;
  owner?: string;
  collaborators?: string[];
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

interface Task {
  name: string;
  board: string;
  description: string;
  priority: string;
  startAt: Date;
  endAt: Date;
  timeLineColor: string;
  collaborators: string[];
}

interface BoardCollaborator {
  id: string;
  boardId: string;
  status: string | null;
}
