<template>
  <div>
    <v-card max-width="1200" class="mx-auto ma-5">
      <v-container class="pa-4 text-center">
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12" md="6">
            <router-link to="/companyNav">
              <div class="card card1">
                <div class="wapper">
                  <div class="title text-h3">会社情報</div>
                  <div class="subtitle text-subheader">
                    会社概要及び経営理念・基本方針
                  </div>
                </div>
              </div>
            </router-link>
          </v-col>
          <v-col cols="12" md="6">
            <router-link to="/businessNav">
              <div class="card card2">
                <div class="wapper">
                  <div class="title text-h3">事業案内</div>
                  <div class="subtitle text-subheader">
                    事業内容・各事業所案内
                  </div>
                </div>
              </div>
            </router-link>
          </v-col>
          <v-col cols="12" md="6">
            <router-link to="/groupNav">
              <div class="card card3">
                <div class="wapper">
                  <div class="title text-h3">グループ事業</div>
                  <div class="subtitle text-subheader">
                    グループ事業の事業紹介
                  </div>
                </div>
              </div>
            </router-link>
          </v-col>
          <v-col cols="12" md="6">
            <router-link to="/contact">
              <div class="card card4">
                <div class="wapper">
                  <div class="title text-h3">お問い合わせフォーム</div>
                  <div class="subtitle text-subheader">
                    お問い合わせはこちらへ
                  </div>
                </div>
              </div>
            </router-link>
          </v-col>
          <v-col cols="12">
            <router-link to="/about">
              <div class="card card5">
                <div class="wapper">
                  <div class="title text-h3">投資関連</div>
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
  data: () => ({
    icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>
<style scoped>
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
  flex-direction: column;
}

.card1 {
  background-image: url("../assets/images/nav/companyMenu.png");
}

.card2 {
  background-image: url("../assets/images/nav/businessMenu.png");
}
.card3 {
  background-image: url("../assets/images/nav/groupMenu.png");
}
.card4 {
  background-image: url("../assets/images/nav/contactForm.png");
}
.card5 {
  height: 290px;
  width: 100%;
  background-image: url("../assets/images/nav/invest.png");
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

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.wapper {
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.8));
  padding: 1rem;
}
</style>