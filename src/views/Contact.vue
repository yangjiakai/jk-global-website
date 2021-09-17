<template>
  <div>
    <!-- <v-img src="../assets/images/bg1.jpg" max-height="800" cover></v-img> -->
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black  white--text">{{ $t('routes.contactUs') }}
        </h2>
      </div>
    </div>
    <v-divider></v-divider>
    <v-container>

      <v-row>
        <v-col cols="12" md="6">
          <v-form ref="form" v-model="valid" lazy-validation class="pa-5">
            <v-text-field label="名前"></v-text-field>
            <v-text-field label="法人名"></v-text-field>
            <v-text-field label="部署"></v-text-field>
            <v-text-field label="役職"></v-text-field>
            <v-text-field label="郵便番号"></v-text-field>
            <v-select v-model="select" :items="items" label="都道府県" required>
            </v-select>
            <v-text-field label="ご住所"></v-text-field>
            <v-text-field label="お電話番号"></v-text-field>
            <v-text-field label="e-mail"></v-text-field>
            <v-textarea label="お問い合わせ内容" value="" hint=""></v-textarea>
            <div>
              <v-btn text :disabled="!valid" color="grey" @click="validate">
                送信
              </v-btn>
            </div>

          </v-form>
        </v-col>
        <v-col cols="12" md="6">
          <v-card height="100%"> 
            <v-img src="../assets/images/map.png" height="100%"></v-img>
          </v-card>
        </v-col>
      </v-row>



    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        '東京都',
        '大阪府',
        '北海道',
        '神奈川県'
      ],
      checkbox: false
    }),

    methods: {
      validate() {
        this.$refs.form.validate()
      },
      reset() {
        this.$refs.form.reset()
      },
      resetValidation() {
        this.$refs.form.resetValidation()
      }
    }
  }
</script>

<style scoped lang="stylus">
</style>