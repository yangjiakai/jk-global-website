<template>
  <div>
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black white--text">会社情報</h2>
      </div>
    </div>
    <v-card max-width="1200" class="mx-auto ma-5">
      <v-container class="pa-4 text-center">
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12" md="6">
            <router-link to="/about">
              <div class="card card1">
                <div class="wapper">
                  <div class="title text-h3">会社概要</div>
                  <div class="subtitle text-subheader">
                    当社の基本情報ご案内
                  </div>
                </div>
              </div>
            </router-link>
          </v-col>
          <!-- <v-col cols="12" md="6">
            <router-link to="/about">
              <div class="card card2">
                <div class="wapper">
                  <div class="title text-h3">代表メッセージ</div>
                  <div class="subtitle text-subheader">
                    当社代表からのメッセージ
                  </div>
                </div>
              </div>
            </router-link>
          </v-col> -->
          <!-- <v-col cols="12" md="6">
            <router-link to="/about">
              <div class="card card3">
                <div class="wapper">
                  <div class="title text-h3">経営理念・方針</div>
                  <div class="subtitle text-subheader">
                    当社の基本方針・経営理念について
                  </div>
                </div>
              </div>
            </router-link>
          </v-col> -->
          <!-- <v-col cols="12" md="6">
            <router-link to="/about">
              <div class="card card4">
                <div class="wapper">
                  <div class="title text-h3">CSR・環境</div>
                  <div class="subtitle text-subheader">
                    当社のCSR・環境活動取り組みについてお伝えします。
                  </div>
                </div>
              </div>
            </router-link>
          </v-col> -->
          <v-col cols="12" md="6">
            <router-link to="/access">
              <div class="card card5">
                <div class="wapper">
                  <div class="title text-h3">アクセス</div>
                  <div class="subtitle text-subheader"></div>
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
  background-image: url("../assets/images/nav/company.png");
}

.card2 {
  background-image: url("../assets/images/nav/president.jpg");
}
.card3 {
  background-image: url("../assets/images/nav/principles.jpg");
}
.card4 {
  background-image: url("../assets/images/nav/kannkyou.jpg");
}
.card5 {
  background-image: url("../assets/images/nav/akusesu.jpg");
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
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.8));
  padding: 1rem;
}
</style>
