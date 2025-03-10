import { create } from "zustand";

interface States {
  addTaskModalVisible: boolean;
  meetingScheduleModalVisible: boolean;
}

interface Actions {
  showAddTaskModal: () => void;
  hideAddTaskModal: () => void;

  showMeetingScheduleModal: () => void;
  hideMeetingScheduleModal: () => void;
}

export const useModalsStore = create<States & Actions>((set) => ({
  addTaskModalVisible: false,
  meetingScheduleModalVisible: true,

  showAddTaskModal: () => set((state) => ({ addTaskModalVisible: true })),
  hideAddTaskModal: () => set((state) => ({ addTaskModalVisible: false })),
  showMeetingScheduleModal: () =>
    set((state) => ({ meetingScheduleModalVisible: true })),
  hideMeetingScheduleModal: () =>
    set((state) => ({ meetingScheduleModalVisible: false })),
}));
