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
            <v-card id="cooper-metals" class="my-5">
              <v-img src="../assets/images/products/scrap2.png"></v-img>
            </v-card>
            <h1 class="text-center main-title text-h5 font-weight-bold">
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
            <v-card height="100" id="none-metals" class="mt-5"> </v-card>
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
            <v-card height="100" id="iron-metals" class="mt-5"> </v-card>
            <h1 class="text-center main-title text-h5 font-weight-bold my-5">
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
          imgUrl: require("../assets/images/metal/copper_img1.jpg"),
          titleJp: "ピカ線・ピカ銅",
        },
        {
          imgUrl: require("../assets/images/metal/copper_img2.jpg"),
          titleJp: "並銅",
        },
        {
          imgUrl: require("../assets/images/metal/copper_img3.jpg"),
          titleJp: "上銅",
        },
        {
          imgUrl: require("../assets/images/metal/copper_img4.jpg"),
          titleJp: "込銅",
        },
        {
          imgUrl: require("../assets/images/metal/copper_img5.jpg"),
          titleJp: "砲金",
        },
        {
          imgUrl: require("../assets/images/metal/copper_img6.jpg"),
          titleJp: "込砲金（バルブ砲金）",
        },
        {
          imgUrl: require("../assets/images/metal/copper_img7.jpg"),
          titleJp: "真鍮",
        },
        {
          imgUrl: require("../assets/images/metal/copper_img8.jpg"),
          titleJp: "込真鍮",
        },
        {
          imgUrl: require("../assets/images/metal/copper_img9.jpg"),
          titleJp: "水道メーター",
        },
      ],
      nonMetals: [
        {
          imgUrl: require("../assets/images/metal/nonMetal1.jpg"),
          titleJp: "エアコン",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal2.jpg"),
          titleJp: "GHP工業エアコン",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal3.jpg"),
          titleJp: "給湯器",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal4.jpg"),
          titleJp: "ラジエター",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal5.jpg"),
          titleJp: "黒モーター",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal6.jpg"),
          titleJp: "モーター",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal7.jpg"),
          titleJp: "ステンレス(鉄なし）",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal8.jpg"),
          titleJp: "銅芯トランス",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal9.jpg"),
          titleJp: "配電盤",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal10.jpg"),
          titleJp: "工業雑品",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal11.jpg"),
          titleJp: "家電雑品",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal12.jpg"),
          titleJp: "アルミ",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal13.jpg"),
          titleJp: "一本線（銅率80%）",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal14.jpg"),
          titleJp: "三本線（銅率65%）",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal15.jpg"),
          titleJp: "車のハーネス",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal16.jpg"),
          titleJp: "雑線（VA)",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal17.jpg"),
          titleJp: "家電線（コード線）",
        },
        {
          imgUrl: require("../assets/images/metal/nonMetal18.jpg"),
          titleJp: "パイプ（皮付）",
        },
      ],

      ironMetals: [
        {
          imgUrl: require("../assets/images/metal/ironMetal1.png"),
          titleJp: "鉄スクラップ",
        },
        {
          imgUrl: require("../assets/images/metal/ironMetal2.png"),
          titleJp: "敷鉄板",
        },
      ],
    };
  },
  components: {},
  computed: {},
  mounted() {
    if (this.$route.params.id) {
      console.log(this.$route.params.id);
      this.anchorJump(this.$route.params.id);
    }
  },
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