<template>
  <v-card flat>
    <v-row>
      <v-col md="12">
        <div class="mb-2 headline font-weight-medium text-center">쇼핑백 상품</div>
        <div class="ml-4 mr-4 subheading font-weight-regular text-center">
          쇼핑백에 담아둔 상품을 간편하게 확인해보세요. [로그인 또는 회원 가입] 후 원하는 상품을 쇼핑백에 저장할 수 있습니다.
        </div>
      </v-col>
    </v-row>
    <v-row class="d-sm-none d-md-none d-lg-none">
      <v-col md="12">
        <v-btn block elevation="0" color="black" class="white--text">
          쇼핑백 상품 주문하기
        </v-btn>
      </v-col>
    </v-row>
    <v-divider color="black"></v-divider>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="8">
        <v-card flat>
          <v-btn absolute right text x-small>
            <v-icon small>mdi-close</v-icon>
          </v-btn>
          <v-row>
            <v-col class="pb-0" cols="4" sm="4" md="4" lg="4">
              <v-img
                src="https://s3.ap-northeast-2.amazonaws.com/dev.gecnode.com/images/products/11ea68cf3ec63ec0854e5ff1f93dc1c8/11ea68cf3edcacf0854e5ff1f93dc1c8.jpg"></v-img>
            </v-col>
            <v-col class="pb-0" cols="8" sm="8" md="8" lg="8">
              <div class="mt-2 font-weight-bold">
                MAX MARA
              </div>
              <div class="body-2 font-weight-medium">
                Reverl 리버서블 레더 캐시미어 토트
              </div>
              <div class="mt-1 caption font-weight-light">
                옵션: BLACK / L
              </div>
              <div class="mt-1 caption font-weight-light">
                수량: 2
              </div>
            </v-col>
            <v-col class="pt-0" cols="12" sm="12" md="12" lg="12">
              <div class="font-weight-medium text-right">
                3,075,000원
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="12" md="12" lg="4">
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12">
            <v-card outlined>
              <v-card-title>
                <div class="body-2 font-weight-bold">최종 주문금액</div>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-card class="d-flex justify-space-between" flat>
                  <div>총 상품 금액</div>
                  <div>3,075,000원</div>
                </v-card>
                <v-card class="d-flex justify-space-between mt-2" flat>
                  <div>캐치할인 금액</div>
                  <div>-703,000원</div>
                </v-card>
                <v-card class="d-flex justify-space-between mt-2" flat>
                  <div>배송비</div>
                  <div>0원</div>
                </v-card>
                <v-divider class="mt-2 mb-2" color="black"></v-divider>
                <v-card class="font-weight-bold d-flex justify-space-between" flat>
                  <div>최종 결제 금액</div>
                  <div>2,372,000원</div>
                </v-card>

                <v-btn block elevation="0" color="black" class="mt-4 white--text">
                  쇼핑백 상품 주문하기
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
    export default {
        name: "basket"
    }
</script>

<style scoped>

</style>
