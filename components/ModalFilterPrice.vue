<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-card-title>
        <span class="title font-weight-bold title-filter">가격</span>
        <v-spacer></v-spacer>
        <v-btn icon right @click.stop="hide">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>

      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
    import Modal from '@/components/mixins/Modal';
    export default {
        mixins: [Modal],
        name: "ModalFilterPrice"
    }
</script>

<style scoped>

</style>
