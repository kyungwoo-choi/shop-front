<template>
  <v-card flat>
    <v-card-text class="filter-list pr-0 pl-0">
      <v-slide-x-reverse-transition>
        <v-list
          v-show="hidden"
          flat
          nav
          dense
          class="pa-0"
        >
          <template v-if="parentCategory.category_id">
            <v-list-item @click="backCategory">
              <v-list-item-content>
                <v-list-item-title>뒤로가기</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-action>
                <v-checkbox
                  color="primary"
                  v-model="checkedCategories"
                  :value="parentCategory.category_id"
                  @change="checkCategory('parent')"
                ></v-checkbox>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{parentCategory.name}} 전체보기</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-list-item
            v-for="(item, i) in currentCategory"
            :key="i"
            @click="changeCategory(item)"
          >
            <v-list-item-action v-if="!item.children || !item.children.length">
              <v-checkbox
                color="primary"
                v-model="checkedCategories"
                :value="item.category_id"
                @change="checkCategory('child')"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon v-if="item.children && item.children.length">
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-slide-x-reverse-transition>
    </v-card-text>
    <v-footer fixed bottom class="white footer-filter pt-6 pb-6">
      <v-btn block tile fab text outlined @click="applyCategory">
        적용하기
      </v-btn>
    </v-footer>
  </v-card>
</template>

<script>
    export default {
        name: "ListCategoryFilter",
        props: ['categories'],
        data() {
            return {
                parentCategory: {}, // 현재 카테고리 목록의 상위 카테고리
                currentCategory: {}, // 현재 카테고리
                selectedCategories: [], // 선택된 카테고리 전체
                hidden: true,
                checkedCategories: []
            }
        },
        created() {
            this.currentCategory = this.categories;
        },
        watch: {
            checkedCategories(_new, _old) {

            }
        },
        methods: {
            backCategory() {
                if (this.selectedCategories.length - 1 === 0) {
                    this.currentCategory = this.categories;
                    this.parentCategory = {};
                    this.selectedCategories.pop();
                } else {
                    this.selectedCategories.pop();
                    this.currentCategory = this.selectedCategories[this.selectedCategories.length - 1].children;
                    this.parentCategory = this.selectedCategories[this.selectedCategories.length - 1];
                }

                this.checkedCategories = [];

                this.hidden = false;
                setTimeout(() => {
                    this.hidden = true;
                }, 100)
            },
            changeCategory(item) {
                if (!item.children || !item.children.length) return;
                this.parentCategory = item;
                this.currentCategory = item.children;

                this.selectedCategories.push(item);
                this.checkedCategories = [];
                if (this.parentCategory && this.parentCategory.category_id) this.checkedCategories.push(this.parentCategory.category_id)

                this.hidden = false;
                setTimeout(() => {
                    this.hidden = true;
                }, 100)
            },
            checkCategory(type = 'child') {
                if (type === 'parent') this.checkedCategories = this.checkedCategories.filter(e => e === this.parentCategory.category_id);
                if (type === 'child' && this.checkedCategories.length && this.parentCategory && this.parentCategory.category_id) this.checkedCategories = this.checkedCategories.filter(e => e !== this.parentCategory.category_id)
            },
            applyCategory() {

                this.$emit('apply', this.checkedCategories);
            }
        }
    }
</script>

<style scoped>

  .filter-list {
    padding-bottom: 5.5rem;
  }
</style>
