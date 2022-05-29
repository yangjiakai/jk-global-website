<template>
  <div>
    <v-container class="mx-auto" grid-list-xs>
      <v-row class="text-left" justify="center">
        <v-col cols="12" md="3">
          <div class="ml-15">
            <router-link to="businessNav" class="font-weight-bold my-3"
              >事業案内
            </router-link>
            <router-link to="business" class="my-1">事業内容 </router-link>
            <router-link to="factory" class="my-1">事業所案内 </router-link>
            <router-link to="recruit" class="my-1">採用情報 </router-link>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="ml-15">
            <router-link to="companyNav" class="font-weight-bold my-3"
              >会社情報
            </router-link>
            <router-link to="about" class="my-1">会社概要 </router-link>
            <router-link to="access" class="my-1">アクセス </router-link>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="ml-15">
            <router-link to="groupNav" class="font-weight-bold my-3"
              >グループ事業
            </router-link>
            <router-link to="business" class="my-1">買取 </router-link>
            <router-link to="business" class="my-1">輸出 </router-link>
            <router-link to="business" class="my-1">分解 </router-link>
            <router-link to="business" class="my-1">再生 </router-link>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="ml-15">
            <router-link to="productPrice" class="font-weight-bold my-3"
              >スクラップ買取
            </router-link>
            <router-link to="contact" class="font-weight-bold my-3"
              >お問い合わせ
            </router-link>
            <router-link to="invest" class="font-weight-bold my-3"
              >投資関連
            </router-link>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-6"></v-divider>
      <v-row justify="center" class="text-center">
        <v-col cols="12">
          <p class="text-button grey--text">
            COPYRIGHT © KANKYU TRADE CO.,LTD All rights reserved.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped >
a {
  display: block;
}
</style>
