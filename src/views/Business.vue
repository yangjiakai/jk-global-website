<template>
  <div>
    <v-row class="fixed-bg2 mt-5" no-gutters>
      <v-col>
        <v-card
          height="400"
          color="rgba(44,55,83,.5)"
          dark
          class="d-flex flex-column align-center justify-center"
        >
          <h1 class="text-h2 font-weight-bold">事業内容</h1>
        </v-card>
      </v-col>
    </v-row>

    <v-container grid-list-xs>
      <!-- <v-card max-width="1200" class="mx-auto pa-10" outlined>
        <div class="item">
          <h3 class="text-h5 my-8">銅</h3>
          <p class="dark-grey-text">ピカ銅、一号銅、二号銅、真鍮、砲金</p>
        </div>

        <div class="item">
          <h3 class="text-h5 my-8">電線</h3>
          <p class="dark-grey-text">本線、三本線、Ｆ線、雑線、家電線</p>
        </div>
        <div class="item">
          <h3 class="text-h5 my-8">雑品</h3>
          <p class="dark-grey-text">上雑品、中雑品、下雑品、アルミ雑品</p>
        </div>
        <div class="item">
          <h3 class="text-h5 my-8">モーター</h3>
          <p class="dark-grey-text">
            工業モーター、コンプレッサー、電車モーター、小モーター
          </p>
        </div>
        <div class="item">
          <h3 class="text-h5 my-8">鉄</h3>
          <p class="dark-grey-text">ＨＳ、Ｈ２、新断、ギロ材、敷鉄板</p>
        </div>
      </v-card> -->

      <v-row>
        <v-col>
          <h1 class="title-h2 text-center">事業内容</h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <v-row justify="center">
              <v-col cols="12" md="4">
                <v-card class="menu-card">
                  <v-img
                    src="../assets/images/metal/copper_img3.jpg"
                    height="400"
                  >
                    <div class="card">
                      <div class="text-h3 mb-5">銅</div>
                      <div class="text-h6 menu-detail">
                        ピカ銅、一号銅、二号銅、真鍮、砲金
                      </div>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="menu-card">
                  <v-img
                    src="../assets/images/metal/nonMetal17.jpg"
                    height="400"
                  >
                    <div class="card">
                      <div class="text-h3 mb-5">電線</div>
                      <div class="text-h6 menu-detail">
                        本線、三本線、Ｆ線、雑線、家電線
                      </div>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="menu-card">
                  <v-img
                    src="../assets/images/metal/nonMetal10.jpg"
                    height="400"
                  >
                    <div class="card">
                      <div class="text-h3 mb-5">雑品</div>
                      <div class="text-h6 menu-detail">
                        上雑品、中雑品、下雑品、アルミ雑品
                      </div>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="menu-card">
                  <v-img
                    src="../assets/images/metal/nonMetal6.jpg"
                    height="400"
                  >
                    <div class="card">
                      <div class="text-h3 mb-5">モーター</div>
                      <div class="text-h6 menu-detail">
                        工業モーター、コンプレッサー、電車モーター、小モーター
                      </div>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card class="menu-card">
                  <v-img src="../assets/images/nav/iron.png" height="400">
                    <div class="card">
                      <div class="text-h3 mb-5">鉄</div>
                      <div class="text-h6 menu-detail">
                        ＨＳ、Ｈ２、新断、ギロ材、敷鉄板
                      </div>
                    </div>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col>
          <h1 id="buy-area" class="title-h2 text-center">
            {{ $t("business.buy.title") }}
          </h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{ $t("business.buy.content") }}</p>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/buy_img1.jpg"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/buy_img2.jpg"
                    position="bottom left"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/buy_img3.jpg"
                    position="top right"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/buy_img4.jpg"
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
          <h1 id="export-area" class="title-h2 text-center">
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
          <h1 id="apart-area" class="title-h2 text-center">
            {{ $t("business.takeApart.title") }}
          </h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{ $t("business.takeApart.content") }}</p>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/img_apart1.jpg"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/img_apart2.jpg"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/img_apart3.jpg"
                    position="top right"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/img_apart4.jpg"
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
          <h1 id="recycle-area" class="title-h2 text-center">
            {{ $t("business.recycle.title") }}
          </h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{ $t("business.recycle.content") }}</p>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/img_recycle1.jpg"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/img_recycle2.jpg"
                    position="bottom left"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/img_recycle3.jpg"
                    position="top right"
                    height="400"
                  ></v-img>
                </v-card>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-card>
                  <v-img
                    src="../assets/images/環球/img_recycle4.jpg"
                    height="400"
                  >
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "home",

  components: {},
  created() {},
  mounted() {
    if (this.$route.params.id) {
      console.log(this.$route.params.id);
      this.anchorJump(this.$route.params.id);
    }
  },
  methods: {
    anchorJump(id) {
      const anchorEle = document.querySelector(id);

      if (anchorEle) {
        let top =
          anchorEle.getBoundingClientRect().top + window.pageYOffset - 150;
        window.scrollTo({ top: top, behavior: "smooth" });
        // anchorEle.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    // jump(id) {},
  },
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
  background-color: rgba(0, 0, 0, 0.5);
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

.card {
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;
}

.item {
  border-bottom: 3px dashed rgb(0, 147, 217);
}

.dark-grey-text {
  color: #686868;
}

.menu-card {
  cursor: pointer;
  transition: all 0.5s;
}

.menu-detail {
  opacity: 0;
  transition: all 0.5s;
}

.menu-card:hover {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
    0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12) !important;
  transition: all 0.5s;
}

.menu-card:hover .menu-detail {
  opacity: 1;
  transition: all 0.5s;
}
</style>