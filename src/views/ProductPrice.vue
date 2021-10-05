<template>
  <div>
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black white--text">
          {{ $t("routes.productPrice") }}
        </h2>
      </div>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" lg="3">
          <v-sheet rounded="lg" width="100%" style="z-index: 999">
            <v-list shaped>
              <v-subheader>商品種類</v-subheader>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item @click="anchorJump('#copper-metals')">
                  <v-list-item-icon>
                    <v-icon>mdi-flag</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>銅スクラップ</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="anchorJump('#none-metals')">
                  <v-list-item-icon>
                    <v-icon>mdi-flag</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>非鉄スクラップ</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item @click="anchorJump('#iron-metals')">
                  <v-list-item-icon>
                    <v-icon>mdi-flag</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>鉄スクラップ</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="9" lg="9">
          <v-sheet rounded="lg" class="pa-5" elevation="3" max-width="1200">
            <h1
              id="cooper-metals"
              class="text-center main-title text-h5 font-weight-bold"
            >
              銅スクラップ
            </h1>
            <v-row>
              <v-col
                v-for="item in copperMetals"
                :key="item.index"
                cols="12"
                md="6"
                lg="4"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-fade-transition>
                      <v-card class="pa-5" :elevation="hover ? 12 : 1">
                        <img
                          :src="item.imgUrl"
                          alt=""
                          width="100%"
                          max-height="300"
                          elevation-10
                        />
                        <v-card-title primary-title>
                          {{ item.titleJp }}
                        </v-card-title>

                        <v-card-subtitle>
                          {{ item.price }}
                        </v-card-subtitle>
                      </v-card>
                    </v-fade-transition>
                  </template>
                </v-hover>
              </v-col>
            </v-row>

            <v-divider id="none-metals" class="my-divider"></v-divider>
            <h1 class="text-center main-title text-h5 font-weight-bold my-5">
              非鉄スクラップ
            </h1>
            <v-row>
              <v-col
                v-for="item in nonMetals"
                :key="item.index"
                cols="12"
                md="6"
                lg="4"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-fade-transition>
                      <v-card class="pa-5" :elevation="hover ? 12 : 1">
                        <img
                          :src="item.imgUrl"
                          alt=""
                          width="100%"
                          max-height="300"
                          elevation-10
                        />
                        <v-card-title primary-title>
                          {{ item.titleJp }}
                        </v-card-title>

                        <v-card-subtitle>
                          {{ item.price }}
                        </v-card-subtitle>
                      </v-card>
                    </v-fade-transition>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
            <v-divider id="none-metals" class="my-divider"></v-divider>
            <h1
              id="iron-metals"
              class="text-center main-title text-h5 font-weight-bold my-5"
            >
              鉄スクラップ
            </h1>
            <v-row>
              <v-col
                v-for="item in ironMetals"
                :key="item.index"
                cols="12"
                md="6"
                lg="4"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-fade-transition>
                      <v-card class="pa-5" :elevation="hover ? 12 : 1">
                        <img
                          :src="item.imgUrl"
                          alt=""
                          width="100%"
                          max-height="300"
                          elevation-10
                        />
                        <v-card-title primary-title>
                          {{ item.titleJp }}
                        </v-card-title>

                        <v-card-subtitle>
                          {{ item.price }}
                        </v-card-subtitle>
                      </v-card>
                    </v-fade-transition>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
            <template>
              <div class="text-center mx-auto ma-5">
                <v-pagination
                  v-model="page"
                  :length="1"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
                >
                </v-pagination>
              </div>
            </template>
            <!--  -->
            <!-- <router-view>

            </router-view> -->
            <v-btn x-large block color="#3971cc" dark to="/">ホームへ</v-btn>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      class="mx-2 back-to-top"
      fab
      dark
      color="#3971cc"
      large
      @click="
        $vuetify.goTo(0, {
          duration: 300,
          offset: 0,
          easing: 'easeInOutCubic',
        })
      "
    >
      <v-icon dark> mdi-arrow-up-bold </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      duration: 300,
      offset: 0,
      easing: "easeInOutCubic",
      page: 1,
      overlay: false,
      selectedItem: 0,

      copperMetals: [
        {
          imgUrl: require("../assets/images/metal/ピカ線.jpg"),
          titleJp: "ピカ線・ピカ銅",
        },
        {
          imgUrl: require("../assets/images/metal/並銅.jpg"),
          titleJp: "並銅",
        },
        {
          imgUrl: require("../assets/images/metal/上銅.jpg"),
          titleJp: "上銅",
        },
        {
          imgUrl: require("../assets/images/metal/込銅.jpg"),
          titleJp: "込銅",
        },
        {
          imgUrl: require("../assets/images/metal/砲金.jpg"),
          titleJp: "砲金",
        },
        {
          imgUrl: require("../assets/images/metal/込砲金.jpg"),
          titleJp: "込砲金（バルブ砲金）",
        },
        {
          imgUrl: require("../assets/images/metal/真鍮ラジエーター.jpg"),
          titleJp: "真鍮",
        },
        {
          imgUrl: require("../assets/images/metal/込真鍮.jpg"),
          titleJp: "込真鍮",
        },
        {
          imgUrl: require("../assets/images/metal/水道メーター.jpg"),
          titleJp: "水道メーター",
        },
      ],
      nonMetals: [
        {
          imgUrl: require("../assets/images/metal/エアコン.jpg"),
          titleJp: "エアコン",
        },
        {
          imgUrl: require("../assets/images/metal/GHP工業エアコン.jpg"),
          titleJp: "GHP工業エアコン",
        },
        {
          imgUrl: require("../assets/images/metal/給湯器.jpg"),
          titleJp: "給湯器",
        },
        {
          imgUrl: require("../assets/images/metal/ラジエーター.jpg"),
          titleJp: "ラジエター",
        },
        {
          imgUrl: require("../assets/images/metal/黒モーター.jpg"),
          titleJp: "黒モーター",
        },
        {
          imgUrl: require("../assets/images/metal/電車モーター.jpg"),
          titleJp: "モーター",
        },
        {
          imgUrl: require("../assets/images/metal/並銅.jpg"),
          titleJp: "並銅",
        },
        {
          imgUrl: require("../assets/images/metal/銅芯トランス.jpg"),
          titleJp: "銅芯トランス",
        },
        {
          imgUrl: require("../assets/images/metal/配電盤.jpg"),
          titleJp: "配電盤",
        },
        {
          imgUrl: require("../assets/images/metal/工業雑品.jpg"),
          titleJp: "工業雑品",
        },
        {
          imgUrl: require("../assets/images/metal/家電雑品.jpg"),
          titleJp: "家電雑品",
        },
        {
          imgUrl: require("../assets/images/metal/アルミ.jpg"),
          titleJp: "アルミ",
        },
        {
          imgUrl: require("../assets/images/metal/一本線.jpg"),
          titleJp: "一本線（銅率80%）",
        },
        {
          imgUrl: require("../assets/images/metal/三本線.jpg"),
          titleJp: "三本線（銅率65%）",
        },
        {
          imgUrl: require("../assets/images/metal/車のハーネス.jpg"),
          titleJp: "車のハーネス",
        },
        {
          imgUrl: require("../assets/images/metal/雑線（VA）.jpg"),
          titleJp: "雑線（VA)",
        },
        {
          imgUrl: require("../assets/images/metal/家電線.jpg"),
          titleJp: "家電線（コード線）",
        },
        {
          imgUrl: require("../assets/images/metal/パイプ（皮付）.jpg"),
          titleJp: "パイプ（皮付）",
        },
      ],

      ironMetals: [
        {
          imgUrl: require("../assets/images/metal/鉄スクラップ.jpg"),
          titleJp: "鉄スクラップ",
        },
        {
          imgUrl: require("../assets/images/metal/板.jpg"),
          titleJp: "敷鉄板",
        },
      ],
    };
  },
  components: {},
  computed: {},

  created() {},
  methods: {
    anchorJump(id) {
      const anchorEle = document.querySelector(id);
      if (anchorEle) {
        anchorEle.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
};
</script>

<style scoped>
img {
  height: 300px;
}

.sticky-position {
  position: -webkit-sticky;
  position: sticky !important;
  top: 200px;
}

.back-to-top {
  position: fixed;
  bottom: 10%;
  left: 20%;
  z-index: 999;
}

.main-title {
  padding: 25px 10px;
  margin-bottom: 10px;
  font-size: 17px;
  background: #f0f0f0;

  border-left: 5px solid #3971cc;
  color: #3971cc;
}

.my-divider {
  margin: 110px 0;
}
</style>