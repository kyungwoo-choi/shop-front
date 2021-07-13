export default {
  name: "ModalPage",
  methods: {
    showModal(modal) {
      if (!modal) return;
      if (!this.modal[modal] === undefined) return;

      this.modal[modal] = true;
    },
    hideModal(modal) {
      if (!modal) return;
      if (!this.modal[modal]) return;

      this.modal[modal] = false;
    }
  }
}
