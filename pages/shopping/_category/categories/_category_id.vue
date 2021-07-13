<template>
  <v-card flat>
    <v-row>
      <v-col md="6">
        <v-btn block text outlined @click="showModal('filter')">
          필터
        </v-btn>
        <modal-filter :filters="filters" :dialog="modal.filter" :modalName="'filter'" @hide="hideModal" @applyFilter="applyFilter"></modal-filter>
      </v-col>
      <v-col md="6">
        <v-btn block text outlined>
          정렬
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        <div class="mb-2 display-1 font-weight-medium text-center">MEN'S SWIMWEAR & BEACHWEAR</div>
        <div class="ml-4 mr-4 subheading font-weight-regular text-center text-truncate">편안하고 심플한 스타일부터 과감한 독창성이 돋보이는
          디자인까지 다양한 연출이 가능한 스윔웨어 & 비치웨어를 파페치에서 제안합니다. 클래식한 실루엣에 여러가지 색상을 유니크하게 배치한 트렌디한 수영복을 살펴보세요. 지치지 않는 활력을 담아낸 스포티한
          스윔 쇼츠부터 역동적인 패턴이 형용색색 펼쳐지는 화려한 비치 팬츠까지 스타일리시한 매력을 강조하여 시선을 단번에 흡수하는 아이템을 만나볼 수 있습니다.
        </div>
      </v-col>
    </v-row>

    <v-container grid-list-md class="pa-0">
      <v-layout row wrap>
        <v-flex xs6 sm4 md4 lg3 xl3 class="nuxt-link pl-2 pr-2" v-for="(product, index) of products"
                :key="product.product_id">
          <nuxt-link :to="{path: `/products/${product.product_id}`}">
            <v-img class="mb-2"
                   :src="product.images[0].path"></v-img>
            <div class="font-weight-bold text-center subheading">
              {{product.brand_name}}
            </div>
            <div class="mb-1 text-center subheading">
              {{product.name}}
            </div>
            <div class="mb-1 text-center subheading">
              ₩{{product.cost}}
            </div>
          </nuxt-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
    import ModalFilter from "@/components/ModalFilter";
    import ModalPage from '@/components/mixins/ModalPage';

    export default {
        mixins: [ModalPage],
        components: {
            ModalFilter
        },
        name: "ProductList",
        watchQuery: true,
        async asyncData({$axios, query, params}) {
            const queryParams = {
                category_id: params.category_id
            };

            if(query.category_id) {
                queryParams.category_id = query.category_id;
            }

            const response = await $axios.get('/products', {
                params: {
                    ...queryParams
                }
            });

            return {
                products: response.data.data,
                filters: {
                    categories: query.category_id ? query.category_id.split('|') : [],
                    brands: query.brands ? query.brands.split('|') : [],
                    colors: query.colors ? query.colors.split('|') : [],
                    price: query.price ? query.price.split('|') : []
                }
            }
        },
        data() {
            return {
                modal: {
                    filter: false
                },
                // filters: {
                //     categories: '',
                //     brands: '',
                //     colors: '',
                //     price: '',
                // }
            }
        },
        async created() {
        },
        methods: {
            async initFilter() {
                await Promise.all([])
            },
            applyFilter(filters) {
                this.$router.push({
                    path: this.$route.path,
                    query: {
                        category_id: filters.categories.join('|')
                    }
                });
                this.modal.filter = false;
            },
            async fetch() {

            }
        }
    }
</script>

<style scoped>
</style>
