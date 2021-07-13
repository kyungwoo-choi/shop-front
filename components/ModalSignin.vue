<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon right @click="hide">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-layout class="align-content-center" d-flex>
          <v-flex>
            <v-tabs class="border-bottom" active-class="tab-active" v-model="tab" hide-slider>
              <v-tab class="tab pa-0 mr-4" key="signin">로그인</v-tab>
              <v-tab class="tab pa-0" key="join">회원가입</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item key="signin">
                <v-card class="pt-4" flat>
                  <v-form @submit.prevent="submitSignin">
                    <v-text-field
                      name="email"
                      v-model="signin.email"
                      label="이메일 주소"
                      hide-details="auto"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      name="password"
                      v-model="signin.password"
                      :append-icon="signin.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="signin.showPassword ? 'text' : 'password'"
                      @click:append="signin.showPassword = !signin.showPassword"
                      label="비밀번호"
                      hide-details="auto"
                      outlined
                      dense
                    ></v-text-field>

                    <nuxt-link to="/member/forgot">
                      비밀번호를 잊으셨나요?
                    </nuxt-link>

                    <v-btn type="submit" class="mt-4" block text outlined>
                      로그인
                    </v-btn>
                    <v-btn class="mt-6" block text outlined>
                      카카오톡 로그인
                    </v-btn>
                    <v-btn class="mt-2" block text outlined>
                      페이스북 로그인
                    </v-btn>

                    <v-btn class="mt-3 text-decoration-underline" block text>
                      회원가입
                    </v-btn>
                  </v-form>
                </v-card>
              </v-tab-item>
              <v-tab-item key="join">

                <v-card class="pt-4" flat>
                  <v-form @submit.prevent="submitSignup">
                    <v-text-field
                      name="name"
                      v-model="signup.name"
                      label="이름"
                      hide-details="auto"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      name="email"
                      v-model="signup.email"
                      label="이메일 주소"
                      hide-details="auto"
                      outlined
                      dense
                    ></v-text-field>
                    <v-text-field
                      name="password"
                      v-model="signup.password"
                      :append-icon="signup.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="signup.showPassword ? 'text' : 'password'"
                      @click:append="signup.showPassword = !signup.showPassword"
                      label="비밀번호"
                      hide-details="auto"
                      outlined
                      dense
                    ></v-text-field>

                    <v-text-field
                      name="password"
                      v-model="signup.confirmPassword"
                      :append-icon="signup.showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="signup.showConfirmPassword ? 'text' : 'password'"
                      @click:append="signup.showConfirmPassword = !signup.showConfirmPassword"
                      label="비밀번호 확인"
                      hide-details="auto"
                      outlined
                      dense
                    ></v-text-field>

                    <v-checkbox
                      v-model="signup.agreeTermsAndConditions"
                      name="agreeTermsAndCondition"
                      dense
                      hide-details
                    >
                      <template v-slot:label>
                        <div>
                          <nuxt-link to="">이용 약관</nuxt-link>
                          동의하고 회원가입 하겠습니다.
                        </div>
                      </template>
                    </v-checkbox>
                    <v-checkbox
                      v-model="signup.agreePrivacyPolicy"
                      name="agreePrivacyPolicy"
                      dense
                      hide-details
                    >
                      <template v-slot:label>
                        <div>
                          <nuxt-link to="">개인 정보 보호 및 쿠키정책</nuxt-link>
                          동의하고 회원가입 하겠습니다.
                        </div>
                      </template>
                    </v-checkbox>

                    <v-btn type="submit" class="mt-4" block text outlined>
                      회원가입
                    </v-btn>
                    <v-btn class="mt-6" block text outlined>
                      카카오톡 로그인
                    </v-btn>
                    <v-btn class="mt-2" block text outlined>
                      페이스북 로그인
                    </v-btn>
                  </v-form>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
    import Modal from '@/components/mixins/Modal';

    export default {
        mixins: [
            Modal
        ],
        name: "ModalSignin",
        data() {
            return {
                tab: null,
                signin: {
                    email: '',
                    password: '',
                    showPassword: false
                },
                signup: {
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    showPassword: false,
                    showConfirmPassword: false,
                    agreeTermsAndConditions: false,
                    agreePrivacyPolicy: false
                }
            }
        },
        methods: {
            async submitSignup() {
                await this.$store.dispatch('User/signup', {
                    name: this.signup.name,
                    email: this.signup.email,
                    password: this.signup.password,
                    confirmPassword: this.signup.confirmPassword,
                    agreeTermsAndConditions: this.signup.agreeTermsAndConditions,
                    agreePrivacyPolicy: this.signup.agreePrivacyPolicy,
                });
            },
            async submitSignin() {
                await this.$store.dispatch('User/signin', {
                    email: this.signin.email,
                    password: this.signin.password
                });


                this.hide();
                this.signin = {
                    email: '',
                    password: '',
                    showPassword: false
                }
                this.signup = {
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    showPassword: false,
                    showConfirmPassword: false,
                    agreeTermsAndConditions: false,
                    agreePrivacyPolicy: false
                }
            },

        }
    }
</script>

<style scoped>
  .border-bottom {
    border-bottom: 1px solid black;
  }

  .tab {
    border-bottom: 2px solid white;
  }

  .tab-active {
    border-bottom: 2px solid black;
  }
</style>
