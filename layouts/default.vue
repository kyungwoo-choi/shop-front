<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-slide-x-reverse-transition>
        <v-list
          v-show="hidden"
          flat
          nav
          dense
        >
          <template v-if="parentCategory.category_id">
            <v-list-item @click="backCategory">
              <v-list-item-content>
                <v-list-item-title>뒤로가기</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="`/shopping/men/categories/${parentCategory.category_id}`">
              <v-list-item-content>
                <v-list-item-title>{{parentCategory.name}} 전체보기</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-list-item
            v-for="(item, i) in currentCategory"
            :key="i"
            @click="changeCategory(item)"
            :to="!item.children.length ? `/shopping/men/categories/${item.category_id}` : null"
          >
            <v-list-item-content>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon v-if="item.children && item.children.length">
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-slide-x-reverse-transition>
      <!-- 로그인했을때 -->
      <v-divider class="ml-4 mr-4"></v-divider>
      <v-card class="pa-4" flat v-if="!flag">
        <v-btn class="mt-4 mb-2" block text outlined @click="showModal('signin')">
          로그인
        </v-btn>
        <v-btn block text outlined @click="showModal('signin')">
          회원가입
        </v-btn>
        <!-- 로그인 안 했을때 -->
      </v-card>
      <v-card class="pa-4" flat v-else>
        <v-btn block text outlined @click="signout">
          로그아웃
        </v-btn>
      </v-card>

    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      justify-space-between
      elevation="0"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <v-btn :to="'/wishlist'" icon>
        <v-icon>mdi-star-outline</v-icon>
      </v-btn>
      <v-btn :to="'/basket'" icon>
        <v-icon>mdi-basket-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt/>
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <ModalSignin :dialog="modal.signin" :modalName="'signin'" @hide="hideModal"></ModalSignin>
  </v-app>
</template>

<script>
    import ModalSignin from "@/components/ModalSignin";
    import ModalPage from '@/components/mixins/ModalPage';

    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'Main',
        mixins: [
            ModalPage
        ],
        components: {
            ModalSignin
        },
        async created() {
            this.categories = await this.$store.dispatch('Products/fetchCategories');
            this.currentCategory = this.categories;
        },
        data() {
            return {
                categories: {},
                parentCategory: {},
                currentCategory: {},
                selectedCategories: [],
                hidden: true,
                clipped: false,
                drawer: false,
                fixed: false,
                rightDrawer: false,
                title: 'MAYJINI',
                modal: {
                    signin: false
                }
            }
        },
        computed: {
            ...mapState('User', [
                'flag',
                'basket',
                'wishes'
            ])
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

                this.hidden = false;
                setTimeout(() => {
                    this.hidden = true;
                }, 100)
            },
            ...mapActions('User', [
                'signout'
            ]),
            ...mapActions('Products', [
                'fetchCategories'
            ])
        }
    }
</script>

<style>
  .v-application a {
    color: inherit;
  }

  .nuxt-link, .nuxt-link a {
    text-decoration: none;
  }
</style>
