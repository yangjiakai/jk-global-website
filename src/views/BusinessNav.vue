<template>
  <div>
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black white--text">事業案内</h2>
      </div>
    </div>
    <v-card max-width="1200" class="mx-auto ma-5">
      <v-container class="pa-4 text-center">
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12" md="6">
            <router-link to="/business">
              <div class="card card1">
                <div class="wapper">
                  <div class="title text-h3">事業内容</div>
                  <div class="subtitle text-subheader">
                    製鋼原料加工、鉄鋼資材販売
                  </div>
                </div>
              </div>
            </router-link>
          </v-col>
          <v-col cols="12" md="6">
            <router-link to="/factory">
              <div class="card card2">
                <div class="wapper">
                  <div class="title text-h3">事業所案内</div>
                  <div class="subtitle text-subheader">
                    各事業所拠点のご案内
                  </div>
                </div>
              </div>
            </router-link>
          </v-col>
          <!-- <v-col cols="12" md="6">
            <router-link to="/qa">
              <div class="card card3">
                <div class="wapper">
                  <div class="title text-h3">よくある質問</div>
                  <div class="subtitle text-subheader">
                    買取手順、Q＆Aを詳しく記載します。
                  </div>
                </div>
              </div>
            </router-link>
          </v-col> -->
          <v-col cols="12" md="6">
            <router-link to="/recruit">
              <div class="card card4">
                <div class="wapper">
                  <div class="title text-h3">採用情報</div>
                  <div class="subtitle text-subheader">
                    採用情報および募集要項について
                  </div>
                </div>
              </div>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
.card {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  height: 290px;
  background-size: 110%;
  background-position: center center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card1 {
  background-image: url("../assets/images/nav/business.png");
}

.card2 {
  background-image: url("../assets/images/nav/office.png");
}
.card3 {
  background-image: url("../assets/images/nav/qa.jpg");
}
.card4 {
  background-image: url("../assets/images/nav/employment.png");
}

.card:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -5px);
  background-size: 100%;
  background-position: center center;
  transition: all 0.3s ease-in-out;
}

.title {
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;
}

.card:hover .title {
  margin-bottom: 2.5rem;
  transition: all 0.3s ease-in-out;
}

.wapper {
  /* background-color: rgba(0, 0, 0, 0.3); */
  padding: 1rem;
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.8));
}
</style>
