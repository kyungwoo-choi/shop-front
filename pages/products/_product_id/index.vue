<template>
  <v-card flat>
    <v-row>
      <v-col cols="12" xs="12" sm="6" md="6" lg="8">
        <v-img class="mb-2"
               :lazy-src="product.images[0].path"></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="6" lg="4">
        <v-row class="mb-3">
          <v-col cols="12" xs="12" class="text-center">
            <div class="font-weight-bold subtitle-1">
              {{product.brand_name}}
            </div>
            <div class="mb-4">
              {{product.name}}
            </div>
            <div class="body-1">
              <span>
                ₩{{product.cost}}
              </span>
              <span class="body-2">
                (관부가세 포함)
              </span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pb-2 pt-0" cols="12" xs="12" sm="12" md="6" lg="8" v-for="(optionKey, index) of product.option.keys" :key="optionKey.sequence">
            <v-select hide-details
                      :no-data-text="'상위 옵션을 선택하세요.'"
                      :error-count="0"
                      dense
                      outlined
                      :placeholder="`${optionKey.name}`" :items="optionSet[optionKey.sequence - 1]"
                      @change="optionChange(optionKey.sequence, index)"
                      v-model="selectedOptions[index]"></v-select>
          </v-col>

          <v-col class="pb-0 pt-0" cols="12" xs="12" sm="12" md="6" lg="4">
            <v-btn block outlined elevation="0" height="40" @click="addBasketItem">
              쇼핑백에 담기
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" xs="12" sm="12">
        <v-list>
          <v-list-group
            v-for="item in listItems"
            :key="item.title"
            v-model="item.active"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{item.title}}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-content>
                qwdqwd
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
    export default {
        name: "ProductDetail",
        async asyncData({$axios, params}) {
            const response = await $axios.get(`/products/${params.product_id}`);

            let option_1 = [];

            for (const option of response.data.data.option.options) {
                option_1.push(option.option_1);
            }

            return {
                product: response.data.data,
                optionSet: [option_1, [], [], [], [], []]
            }
        },
        data() {
            return {
                listItems: [{
                    title: '상품상세',
                    contents: '상품 상세 설명'
                }, {
                    title: '배송정보',
                }, {
                    title: '반품 및 교환',
                }],


                selectedOptions: [],
                optionValidation: false,
                selected: {
                    product_id: this.$route.params.product_id,
                    option_id: null
                },
                reviews: [],
                inquiries: []
            }
        },
        methods: {
            optionChange(seq, index) {
                const nextSeq = seq + 1;
                const nextIndex = index + 1;

                for (const idx in this.optionSet) {
                    if (idx > index) {
                        this.optionSet[idx] = [];
                        this.selectedOptions[idx] = '';
                    }
                }

                for (const option of this.product.option.options) {
                    if (option[`option_${seq}`] === this.selectedOptions[index]) {
                        this.optionSet[nextIndex].push(option[`option_${nextSeq}`]);
                    }
                }

                if (seq === this.product.option.keys.length) {
                    this.validateOption();
                } else {
                    this.selected = {
                        product_id: this.$route.params.product_id,
                        option_id: null
                    };
                    this.optionValidation = false;
                }
            },
            validateOption() {
                this.optionValidation = true;
                let option_id = null;

                for (const option of this.product.option.options) {
                    let flag = false;
                    for (const index in this.selectedOptions) {
                        if (!this.selectedOptions[index]) continue;
                        const seq = +index + 1;

                        if (option[`option_${seq}`] !== this.selectedOptions[index]) {
                            flag = true;
                        }
                    }

                    if (!flag) {
                        option_id = option.option_id;
                    }
                }

                this.selected.option_id = option_id;
            },
            buy() {
                if (!this.optionValidation) {
                    alert('옵션을 확인해주세요');
                    return;
                }

            },
            addBasketItem() {
                if (!this.optionValidation) {
                    alert('옵션을 확인해주세요');
                    return;
                }

                this.$store.dispatch('User/addBasketItem', {
                    product_id: this.selected.product_id,
                    option_id: this.selected.option_id
                })
            },
            addWish() {

            }
        }
    }
</script>

<style scoped>

</style>
