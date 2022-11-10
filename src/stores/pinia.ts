import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    user: {} as User,
    counter: 0,
  }),
  actions: {
    updateCounter() {
      this.counter++;
    },
    // updateConversation(conversation: Conversation) {
    //   this.conversation = conversation;
    // },
  },
  // persist: {
  //   enabled: true,
  // },
});
