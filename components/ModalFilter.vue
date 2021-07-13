<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-card-title>
        <span class="title font-weight-bold title-filter">필터</span>
        <v-spacer></v-spacer>
        <v-btn icon right @click.stop="hide">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="filter-list">
        <v-list-item class="pa-0" @click="showModal('categories')">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">카테고리</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="pa-0" @click="showModal('brands')">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">브랜드</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="pa-0" @click="showModal('colors')">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">색상</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="pa-0" @click="showModal('price')">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">가격</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-text>
      <v-footer fixed bottom class="white footer-filter pt-6 pb-6">
        <v-btn block tile fab text outlined @click="applyFilter">
          적용하기
        </v-btn>
      </v-footer>
    </v-card>
    <ModalFilterCategory :dialog="modal.categories" :modalName="'categories'"  @hide="hideModal" @apply="applyFilterData"></ModalFilterCategory>
    <ModalFilterBrand :dialog="modal.brands" :modalName="'brands'" @hide="hideModal" @apply="applyFilterData"></ModalFilterBrand>
    <ModalFilterColor :dialog="modal.colors" :modalName="'colors'" @hide="hideModal" @apply="applyFilterData"></ModalFilterColor>
    <ModalFilterPrice :dialog="modal.price" :modalName="'price'" @hide="hideModal" @apply="applyFilterData"></ModalFilterPrice>
  </v-dialog>
</template>

<script>
    import Modal from '@/components/mixins/Modal';
    import ModalPage from '@/components/mixins/ModalPage';

    import ModalFilterCategory from "@/components/ModalFilterCategory";
    import ModalFilterBrand from "@/components/ModalFilterBrand";
    import ModalFilterColor from "@/components/ModalFilterColor";
    import ModalFilterPrice from "@/components/ModalFilterPrice";

    export default {
        mixins: [Modal, ModalPage],
        components: {
            ModalFilterCategory,
            ModalFilterBrand,
            ModalFilterColor,
            ModalFilterPrice
        },
        name: "ModalFilter",
        props: ['filters'],
        data() {
            return {
                modal: {
                    categories: false,
                    brands: false,
                    colors: false,
                    price: false
                }
            }
        },
        methods: {
            applyFilterData(filter) {
                this.filters[filter.type] = filter.params;
                this.modal[filter.type] = false;
            },
            applyFilter() {
                this.$emit('applyFilter', this.filters);
            }
        }
    }
</script>

<style scoped>
  .title-filter {
    border-bottom: 1px solid black;
  }

  .v-application--is-ltr .v-treeview-node__toggle {
    display: none !important;
  }

  .filter-list {
    padding-bottom: 5.5rem;
  }
</style>
