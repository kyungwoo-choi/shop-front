<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-card-title>
        <span class="title font-weight-bold title-filter">카테고리</span>
        <v-spacer></v-spacer>
        <v-btn icon right @click.stop="hide">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <ListCategoryFilter :categories="categories" @apply="apply"></ListCategoryFilter>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
    import ListCategoryFilter from '@/components/ListCategoryFilter';
    import Modal from '@/components/mixins/Modal';
    export default {
        mixins: [Modal],
        components: {
            ListCategoryFilter
        },
        name: "ModalFilterCategory",
        props: ['filter'],
        data() {
            return {
                categories: [],
                selection: [],
                checkedCategories: []
            }
        },
        created() {
            this.getChildCategories();
        },
        methods: {
            async getChildCategories() {
                const response = await this.$axios.get(`/categories/${this.$route.params.category_id}`);

                this.categories = response.data.data[0].children;
            },
            apply(checkedCategories) {
                this.checkedCategories = checkedCategories;
                this.$emit('apply', {
                    type: 'categories',
                    params: this.checkedCategories
                });
            }
        }
    }
</script>

<style scoped>
.v-treeview-node__toggle{display: none}
</style>
