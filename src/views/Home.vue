<template>
  <div>
    <v-card
      color="rgab(0,0,0,.7)"
      min-height="800"
      dark
      class="video-bg-warpper"
    >
      <CarousalHome />

      <div class="mask"></div>
      <v-container class="main-container">
        <v-row>
          <v-col cols="12" md="8" offset-md="2">
            <div>
              <h1
                class="
                  text-xl-h2 text-lg-h3 text-md-h4 text-h5
                  font-weight-medium
                "
                style="line-height: 150%"
              >
                {{ $t("home.title1") }}
              </h1>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8" offset-md="2">
            <div>
              <h1
                class="
                  text-xl-h2 text-lg-h3 text-md-h4 text-h5
                  font-weight-medium
                "
                style="line-height: 150%"
              >
                {{ $t("home.title2") }}
              </h1>

              <p class="text-md-body-1 text-body-2 mt-8">
                {{ $t("home.subTitle") }}
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <NavGroup />
    <v-row class="fixed-bg2" no-gutters>
      <v-col>
        <v-card
          height="400"
          color="rgba(255,255,255,1)"
          class="d-flex flex-column align-center justify-center"
        >
          <h1 class="text-h3 font-weight-bold">買取対応</h1>
          <p class="text-center mt-8">{{ $t("home.buy.subTitle") }}</p>
        </v-card>
      </v-col>
    </v-row>

    <v-container class="py-4 py-lg-8">
      <v-col cols="12" sm="6"> </v-col>
      <v-card max-width="1200" class="mx-auto text-center" flat>
        <v-row>
          <v-col cols="12" md="4">
            <v-hover v-slot="{ hover }" open-delay="200">
              <router-link
                :to="{ name: 'ProductPrice', params: { id: '#cooper-metals' } }"
              >
                <v-card
                  :elevation="hover ? 16 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <h3 class="card-title py-5">銅スクラップ</h3>
                  <v-img
                    src="../assets/images/metal/copper_img2.jpg"
                    height="400"
                  >
                  </v-img>
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="rgba(44,55,83,.8)">
                      <v-btn
                        :to="{
                          name: 'ProductPrice',
                          params: { id: '#cooper-metals' },
                        }"
                        >詳しく</v-btn
                      >
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </router-link>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4">
            <v-hover v-slot="{ hover }" open-delay="200">
              <router-link
                :to="{ name: 'ProductPrice', params: { id: '#none-metals' } }"
              >
                <v-card
                  :elevation="hover ? 16 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <h3 class="card-title py-5">非鉄スクラップ</h3>
                  <v-img
                    src="../assets/images/metal/nonMetal17.jpg"
                    height="400"
                  >
                  </v-img>
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="rgba(44,55,83,.8)">
                      <v-btn
                        :to="{
                          name: 'ProductPrice',
                          params: { id: '#none-metals' },
                        }"
                        >詳しく</v-btn
                      >
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </router-link>
            </v-hover>
          </v-col>
          <v-col cols="12" md="4">
            <v-hover v-slot="{ hover }" open-delay="200">
              <router-link
                :to="{ name: 'ProductPrice', params: { id: '#iron-metals' } }"
              >
                <v-card
                  :elevation="hover ? 16 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <h3 class="card-title py-5">鉄スクラップ</h3>
                  <v-img src="../assets/images/nav/iron.png" height="400">
                  </v-img>
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="rgba(44,55,83,.8)">
                      <v-btn
                        :to="{
                          name: 'ProductPrice',
                          params: { id: '#iron-metals' },
                        }"
                        >詳しく</v-btn
                      >
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </router-link>
            </v-hover>
          </v-col>
        </v-row>
      </v-card>
    </v-container>

    <!-- <v-row class="fixed-bg2 mt-5" no-gutters>
      <v-col>
        <v-card
          height="400"
          color="rgba(44,55,83,.5)"
          dark
          class="d-flex flex-column align-center justify-center"
        >
          <h1 class="text-h3 font-weight-bold">事業内容</h1>
        </v-card>
      </v-col>
    </v-row>

    <v-container grid-list-xs>


      <v-row>
        <v-col>
          <h1 class="title-h2 text-center">{{ $t("business.buy.title") }}</h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{ $t("business.buy.content") }}</p>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/買取1.jpg"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/買取2.jpg"
                    position="bottom left"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/買取3.jpg"
                    position="top right"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/買取4.jpg"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col>
          <h1 class="title-h2 text-center">
            {{ $t("business.export.title") }}
          </h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{ $t("business.export.content") }}</p>
            <v-card>
              <v-img src="../assets/images/mapnew.png"></v-img>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col>
          <h1 class="title-h2 text-center">
            {{ $t("business.takeApart.title") }}
          </h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{ $t("business.takeApart.content") }}</p>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/分解1.jpg"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/分解2.jpg"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/分解3.jpg"
                    position="top right"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/分解4.jpg"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col>
          <h1 class="title-h2 text-center">
            {{ $t("business.recycle.title") }}
          </h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{ $t("business.recycle.content") }}</p>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/再生1.jpg"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/再生2.jpg"
                    position="bottom left"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/再生3.jpg"
                    position="top right"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img src="../assets/images/環球/再生4.jpg" height="400">
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
import CarousalHome from "../components/CarouselHome.vue";
import NavGroup from "../components/NavGroup.vue";

export default {
  name: "home",

  components: {
    CarousalHome,
    NavGroup,
  },
  created() {},
};
</script>

<style scoped>
.video-bg-warpper {
  position: relative;
  display: flex;
  align-items: center;
}

.video-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mask {
  z-index: 2;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
}

.main-container {
  z-index: 3;
  background-color: rgba(0, 0, 0, 0);
  filter: drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.8));
}

.title-h2 {
  position: relative;
  width: 260px;
  margin: 50px auto;
  text-align: center;
}

.title-h2::before,
.title-h2::after {
  position: absolute;
  content: "";
  width: 100px;
  height: 1px;
  background: #000;
  top: 30px;
}

.title-h2::before {
  left: -60px;
}

.title-h2::after {
  right: -60px;
}

.fixed-bg2 {
  height: 400px;
  background: url("../assets/images/環球/company_img4.jpg");
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>