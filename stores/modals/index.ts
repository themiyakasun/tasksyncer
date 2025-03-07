import { create } from "zustand";

interface States {
  addTaskModalVisible: boolean;
}

interface Actions {
  showAddTaskModal: () => void;
  hideAddTaskModal: () => void;
}

export const useModalsStore = create<States & Actions>((set) => ({
  addTaskModalVisible: false,

  showAddTaskModal: () => set((state) => ({ addTaskModalVisible: true })),
  hideAddTaskModal: () => set((state) => ({ addTaskModalVisible: false })),
}));
