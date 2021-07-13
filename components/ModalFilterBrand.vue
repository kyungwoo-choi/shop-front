<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-card-title>
        <span class="title font-weight-bold title-filter">브랜드</span>
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
        name: "ModalFilterBrand",
        data() {
            return {
                brands: []
            }
        },
        methods: {
            async getBrand() {
                const response = await this.$axios.get(`/brands`, {
                    params: {
                        categories: []
                    }
                });

                this.brands = response.data.data;
            },
        }
    }
</script>

<style scoped>

</style>
