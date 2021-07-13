export default {
  name: "Modal",
  props: ['dialog', 'modalName'],
  methods: {
    show() {
      this.$emit('show');
    },
    hide() {
      this.$emit('hide', this.modalName);
    }
  }
}
