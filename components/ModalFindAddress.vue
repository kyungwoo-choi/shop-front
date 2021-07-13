<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card flat>
      <v-card-title>
        <span class="title font-weight-bold title-filter">우편번호 찾기</span>
        <v-spacer></v-spacer>
        <v-btn icon right @click.stop="hide">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <div id="wrap" style="border:1px solid;height:300px;max-height: 500px;margin:5px 0;position:relative"></div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
    import Modal from '@/components/mixins/Modal';

    export default {
        mixins: [Modal],
        name: "ModalFindAddress",
        head: {
            script: [
                {src: 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'}
            ]
        },
        updated() {
            const zipcode = window.daum;
            const _this = this;
            const $wrap = document.getElementById('wrap');

            new zipcode.Postcode({
                oncomplete: function (data) {
                    _this.postalCode = data.zonecode;
                    _this.address = data.address;
                    // data.zonecode
                    // data.jibunAddress
                    // data.AddressEnglish
                    // data.roadAddress
                    // data.roadAddressEnglish
                    // data.postcode
                    _this.hide();
                },
                onresize: function (size) {
                    $wrap.style.height = size.height + 'px';
                },
                width: '100%',
                height: '100%'
            }).embed($wrap)
        }
    }
</script>

<style scoped>

</style>
