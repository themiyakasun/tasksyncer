import { create } from "zustand";

interface States {
  addTaskModalVisible: boolean;
  meetingScheduleModalVisible: boolean;
  pricingModalVisible: boolean;
  boardModalVisible: boolean;
}

interface Actions {
  showAddTaskModal: () => void;
  hideAddTaskModal: () => void;

  showMeetingScheduleModal: () => void;
  hideMeetingScheduleModal: () => void;

  showPricingModal: () => void;
  hidePricingModal: () => void;

  showBoardModal: () => void;
  hideBoardModal: () => void;
}

export const useModalsStore = create<States & Actions>((set) => ({
  addTaskModalVisible: false,
  meetingScheduleModalVisible: false,
  pricingModalVisible: false,
  boardModalVisible: false,

  showAddTaskModal: () => set((state) => ({ addTaskModalVisible: true })),
  hideAddTaskModal: () => set((state) => ({ addTaskModalVisible: false })),
  showMeetingScheduleModal: () =>
    set((state) => ({ meetingScheduleModalVisible: true })),
  hideMeetingScheduleModal: () =>
    set((state) => ({ meetingScheduleModalVisible: false })),
  showPricingModal: () => set((state) => ({ pricingModalVisible: true })),
  hidePricingModal: () => set((state) => ({ pricingModalVisible: false })),
  showBoardModal: () => set((state) => ({ boardModalVisible: true })),
  hideBoardModal: () => set((state) => ({ boardModalVisible: false })),
}));
