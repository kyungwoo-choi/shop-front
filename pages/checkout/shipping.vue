<template>
  <v-card flat>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6" xl="6">
        <div class="body-1 font-weight-bold text-center">
          아래에서 배송지 주소를 선택하거나, 새로운 주소를 입력해주세요.
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="modal.address = true">
          찾기
        </v-btn>
        <ModalFindAddress :dialog="modal.address" :modalName="'address'" @hide="hideModal"></ModalFindAddress>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import ModalFindAddress from '@/components/ModalFindAddress';
  import ModalPage from '@/components/mixins/ModalPage';
    export default {
        mixins: [ModalPage],
        components: {
            ModalFindAddress
        },
        name: "shipping",
        head: {
            script: [
                {src: 'https://code.jquery.com/jquery-1.12.4.min.js'},
                {src: 'https://cdn.iamport.kr/js/iamport.payment-1.1.5.js'}
            ]
        },
        data() {
            return {
                name: '최경우',
                email: 'spgud@gra-fik.com',
                phone: '01048473848',
                postalCode: '08784',
                address: '서울 관악구 장군봉길7',
                addressDetail: '상세주소',

                modal: {
                    address: false
                }
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
