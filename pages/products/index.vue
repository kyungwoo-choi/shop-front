<template>
  <v-card flat>
    <v-row>
      <v-col md="6">
        <v-btn block text outlined @click="showModal('filter')">
          필터
        </v-btn>
        <modal-filter :dialog="modal.filter" :modalName="'filter'" @hide="hide"></modal-filter>
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
        <v-flex xs6 sm4 md4 lg3 xl3 class="nuxt-link pl-2 pr-2">
          <nuxt-link :to="{path: 'products/bbbbb'}">
            <v-img class="mb-2"
                   src="https://cdn-images.farfetch-contents.com/15/32/98/52/15329852_28605765_300.jpg"></v-img>
            <div class="font-weight-bold text-center subheading">
              Bottega Veneta
            </div>
            <div class="mb-1 text-center subheading">
              집업 보머 재킷
            </div>
            <div class="mb-1 text-center subheading">
              ₩2,650,000
            </div>
          </nuxt-link>
        </v-flex>
        <v-flex xs6 sm4 md4 lg3 xl3 class="nuxt-link pl-2 pr-2">
          <nuxt-link :to="{path: 'products/bbbbb'}">
            <v-img class="mb-2"
                   src="https://cdn-images.farfetch-contents.com/15/32/98/52/15329852_28605765_300.jpg"></v-img>
            <div class="font-weight-bold text-center subheading">
              Bottega Veneta
            </div>
            <div class="mb-1 text-center subheading">
              집업 보머 재킷
            </div>
            <div class="mb-1 text-center subheading">
              ₩2,650,000
            </div>
          </nuxt-link>
        </v-flex>
        <v-flex xs6 sm4 md4 lg3 xl3 class="nuxt-link pl-2 pr-2">
          <nuxt-link :to="{path: 'products/bbbbb'}">
            <v-img class="mb-2"
                   src="https://cdn-images.farfetch-contents.com/15/32/98/52/15329852_28605765_300.jpg"></v-img>
            <div class="font-weight-bold text-center subheading">
              Bottega Veneta
            </div>
            <div class="mb-1 text-center subheading">
              집업 보머 재킷
            </div>
            <div class="mb-1 text-center subheading">
              ₩2,650,000
            </div>
          </nuxt-link>
        </v-flex>
        <v-flex xs6 sm4 md4 lg3 xl3 class="nuxt-link pl-2 pr-2">
          <nuxt-link :to="{path: 'products/bbbbb'}">
            <v-img class="mb-2"
                   src="https://cdn-images.farfetch-contents.com/15/32/98/52/15329852_28605765_300.jpg"></v-img>
            <div class="font-weight-bold text-center subheading">
              Bottega Veneta
            </div>
            <div class="mb-1 text-center subheading">
              집업 보머 재킷
            </div>
            <div class="mb-1 text-center subheading">
              ₩2,650,000
            </div>
          </nuxt-link>
        </v-flex>
        <v-flex xs6 sm4 md4 lg3 xl3 class="nuxt-link pl-2 pr-2">
          <nuxt-link :to="{path: 'products/bbbbb'}">
            <v-img class="mb-2"
                   src="https://cdn-images.farfetch-contents.com/15/32/98/52/15329852_28605765_300.jpg"></v-img>
            <div class="font-weight-bold text-center subheading">
              Bottega Veneta
            </div>
            <div class="mb-1 text-center subheading">
              집업 보머 재킷
            </div>
            <div class="mb-1 text-center subheading">
              ₩2,650,000
            </div>
          </nuxt-link>
        </v-flex>
        <v-flex xs6 sm4 md4 lg3 xl3 class="nuxt-link pl-2 pr-2">
          <nuxt-link :to="{path: 'products/bbbbb'}">
            <v-img class="mb-2"
                   src="https://cdn-images.farfetch-contents.com/15/32/98/52/15329852_28605765_300.jpg"></v-img>
            <div class="font-weight-bold text-center subheading">
              Bottega Veneta
            </div>
            <div class="mb-1 text-center subheading">
              집업 보머 재킷
            </div>
            <div class="mb-1 text-center subheading">
              ₩2,650,000
            </div>
          </nuxt-link>
        </v-flex>
        <v-flex xs6 sm4 md4 lg3 xl3 class="nuxt-link pl-2 pr-2">
          <nuxt-link :to="{path: 'products/bbbbb'}">
            <v-img class="mb-2"
                   src="https://cdn-images.farfetch-contents.com/15/32/98/52/15329852_28605765_300.jpg"></v-img>
            <div class="font-weight-bold text-center subheading">
              Bottega Veneta
            </div>
            <div class="mb-1 text-center subheading">
              집업 보머 재킷
            </div>
            <div class="mb-1 text-center subheading">
              ₩2,650,000
            </div>
          </nuxt-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
    import ModalFilter from "@/components/ModalFilter";

    export default {
        components: {
            ModalFilter
        },
        name: "ProductListIndex",
        watchQuery: true,
        async asyncData({$axios, query}) {
            console.log(query);
            const response = await $axios.get('/products');
            return {
                products: response.data.data
            }
        },
        data() {
            return {
                modal: {
                    filter: false
                }
            }
        },
        methods: {
            showModal(modal) {
                if(!modal) return;
                if(!this.modal[modal] === undefined) return;

                this.modal[modal] = true;
            },
            hide(modal) {
                if(!modal) return;
                if(!this.modal[modal]) return;

                this.modal[modal] = false;
            }
        }
    }
</script>

<style scoped>
</style>
