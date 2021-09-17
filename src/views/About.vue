<template>
  <div class="about">
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black  white--text">{{ $t('routes.about') }}
        </h2>
      </div>
    </div>
    <v-sheet class="d-flex justify-center align-center pa-10 mx-auto" max-width="1000">

      <v-container grid-list-md>
        <v-row>
          <v-col>
            <h2 class="text-h4">{{ $t('greetings.title') }}</h2>
            <v-divider class="mt-3" ></v-divider>
            <h4 class="text-h6 my-5 grey--text">{{ $t('greetings.subTitle') }}</h4>
            <p>{{ $t('greetings.content') }}</p>
            <v-divider class="my-10"></v-divider>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 class="text-h4">{{ $t('companyProfile.title') }}</h2>
            <v-divider class="my-3"></v-divider>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="font-weight-bold">{{ $t('companyProfile.label.name') }}</v-col>
          <v-col cols="8">{{ $t('companyProfile.content.name') }}</v-col>
        </v-row>
        <v-divider class="my-3"></v-divider>
        <v-row>
          <v-col cols="4" class="font-weight-bold">{{ $t('companyProfile.label.represenative') }}</v-col>
          <v-col cols="8">{{ $t('companyProfile.content.represenative') }}</v-col>
        </v-row>
        <v-divider class="my-3"></v-divider>
        <v-row>
          <v-col cols="4" class="font-weight-bold">{{ $t('companyProfile.label.founded') }}</v-col>
          <v-col cols="8">{{ $t('companyProfile.content.founded') }}</v-col>
        </v-row>
        <v-divider class="my-3"></v-divider>
        <v-row>
          <v-col cols="4" class="font-weight-bold">{{ $t('companyProfile.label.location') }}</v-col>
          <v-col cols="8">{{ $t('companyProfile.content.location') }}</v-col>
        </v-row>
        <v-divider class="my-3"></v-divider>
        <v-row>
          <v-col cols="4" class="font-weight-bold">{{ $t('companyProfile.label.contact') }}</v-col>
          <v-col cols="8">{{ $t('companyProfile.content.contact') }}</v-col>
        </v-row>
        <v-divider class="my-3"></v-divider>
        <v-row>
          <v-col cols="4" class="font-weight-bold">{{ $t('companyProfile.label.business') }}</v-col>
          <v-col cols="8">{{ $t('companyProfile.content.business') }}</v-col>
        </v-row>
        <v-divider class="my-3"></v-divider>
        <v-row>
          <v-col cols="4" class="font-weight-bold">{{ $t('companyProfile.label.banks') }}</v-col>
          <v-col cols="8">{{ $t('companyProfile.content.banks') }}</v-col>
        </v-row>
        <v-divider class="my-3"></v-divider>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
  export default {
    name: 'videoBg',
    data() {
      return {
        companyInfo: [{
          label: '会社名',
          content: '環球貿易株式会社'
        }, {
          label: '所在地',
          content: '千葉県千葉市緑区高田町1658'
        }, {
          label: '電話番号',
          content: '043-309-8666'
        }, {
          label: 'FAX',
          content: '043-309-8645'
        }, {
          label: '事業開始',
          content: '平成21年8月'
        }, {
          label: '事業内容',
          content: '再生資源卸売業（製鋼原料・非鉄金属・再生プラスチック等） 産業廃棄物の収集運搬 日常生活用品の輸出'
        }, {
          label: '代表者',
          content: '代表取締役社長　常田　瑛仁'
        }, {
          label: '主要取引銀行',
          content: '千葉銀行 京葉銀行 三井住友銀行 郵貯銀行'
        }, ]
      }
    },

    components: {

    },
    created() {

    }
  }
</script>