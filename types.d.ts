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
  createdAt?: Date | null;
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
  collaborator?: string;
}

interface TaskGet {
  id: string;
  name: string;
  boardId: string;
  description: string | null;
  priority: string;
  startAt: Date | null;
  endAt: Date | null;
  timelineColor: string;
  createdAt: Date | null;
}

interface BoardCollaborators {
  board_collaborators: {
    id: string;
    boardId: string;
    collaborator: string;
    status: string | null;
  };
  boards: {
    id: string;
    title: string;
    owner: string;
    createdAt: Date | null;
  };
}

interface TasksCollaborator {
  tasks: {
    id: string;
    name: string;
    boardId: string;
    description: string | null;
    priority: string;
    startAt: Date | null;
    endAt: Date | null;
    timelineColor: string;
    createdAt: Date | null;
  };
  task_collaborators: {
    taskId: string;
    collaborator: string;
  };
}

interface TaskUser {
  users: {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
    avatar: string;
    customerId: string | null;
    priceId: string | null;
    status: string | null;
    createdAt: Date | null;
  };
  board_collaborators: BoardCollaborator[];
}
