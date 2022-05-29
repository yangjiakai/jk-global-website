<template>
  <div>
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black white--text">グループ事業</h2>
      </div>
    </div>

    <v-card max-width="1200" class="mx-auto pa-10" outlined>
      <v-container grid-list-xs>
        <h1 class="main-title">グループ事業</h1>

        <h4 class="sub-title mt-10">環球貿易株式会社</h4>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td width="25%">住所</td>
                <td>千葉市緑区高田町1658</td>
              </tr>
              <tr>
                <td width="25%">TEL</td>
                <td>043－309－8666</td>
              </tr>
              <tr>
                <td width="25%">FAX</td>
                <td>043－309－8645</td>
              </tr>
              <tr>
                <td width="25%">設立年月</td>
                <td>2008年8月</td>
              </tr>
              <tr>
                <td width="25%">資本金</td>
                <td>800万円</td>
              </tr>
              <tr>
                <td width="25%">事業内容</td>
                <td>非鉄スクラップの分解、加工事業</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <h4 class="sub-title mt-10">環能金属株式会社</h4>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td width="25%">住所</td>
                <td>千葉県市原市潤井戸字坂ノ上2107－18</td>
              </tr>
              <tr>
                <td width="25%">TEL</td>
                <td>043－309－8666</td>
              </tr>
              <tr>
                <td width="25%">FAX</td>
                <td>043－309－8645</td>
              </tr>
              <tr>
                <td width="25%">設立年月</td>
                <td>2008年8月</td>
              </tr>
              <tr>
                <td width="25%">資本金</td>
                <td>6000万円</td>
              </tr>
              <tr>
                <td width="25%">事業内容</td>
                <td>銅、真鍮の溶錬事業</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <h4 class="sub-title mt-10">環球通商株式会社</h4>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td width="25%">住所</td>
                <td>千葉県千葉市緑区平山町1041－44</td>
              </tr>
              <tr>
                <td width="25%">TEL</td>
                <td>043－312－8547</td>
              </tr>
              <tr>
                <td width="25%">FAX</td>
                <td>043－312－8548</td>
              </tr>
              <tr>
                <td width="25%">設立年月</td>
                <td>2021年4月</td>
              </tr>
              <tr>
                <td width="25%">資本金</td>
                <td>900万円</td>
              </tr>
              <tr>
                <td width="25%">事業内容</td>
                <td>非鉄スクラップの分解、加工事業</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
      <!-- <div class="item">
        <h3 class="text-h5 my-8">環球貿易株式会社</h3>
        <p class="dark-grey-text">鉄、非鉄スクラップ買取、輸出入事業</p>
      </div>

      <div class="item">
        <h3 class="text-h5 my-8">環能金属株式会社</h3>
        <p class="dark-grey-text">銅、真鍮の溶錬事業</p>
      </div>
      <div class="item">
        <h3 class="text-h5 my-8">環球通商株式会社</h3>
        <p class="dark-grey-text">非鉄スクラップの分解、加工事業</p>
      </div> -->
    </v-card>
    <v-card max-width="1200" class="mx-auto ma-5">
      <v-container class="pa-4 text-center">
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12" md="6">
            <router-link
              :to="{ name: 'Business', params: { id: '#buy-area' } }"
            >
              <div class="card card1">
                <div class="wapper">
                  <div class="title text-h3">買取</div>
                  <!-- <div class="subtitle text-subheader">
                    鉄、非鉄スクラップ買取、輸出入事業
                  </div> -->
                </div>
              </div>
            </router-link>
          </v-col>
          <v-col cols="12" md="6">
            <router-link
              :to="{ name: 'Business', params: { id: '#export-area' } }"
            >
              <div class="card card2">
                <div class="wapper">
                  <div class="title text-h3">輸出</div>
                  <!-- <div class="subtitle text-subheader">銅、真鍮の溶錬事業</div> -->
                </div>
              </div>
            </router-link>
          </v-col>
          <v-col cols="12" md="6">
            <router-link
              :to="{ name: 'Business', params: { id: '#apart-area' } }"
            >
              <div class="card card3">
                <div class="wapper">
                  <div class="title text-h3">分解</div>
                  <!-- <div class="subtitle text-subheader">
                    非鉄スクラップの分解、加工事業
                  </div> -->
                </div>
              </div>
            </router-link>
          </v-col>
          <v-col cols="12" md="6">
            <router-link
              :to="{ name: 'Business', params: { id: '#recycle-area' } }"
            >
              <div class="card card4">
                <div class="wapper">
                  <div class="title text-h3">再生</div>
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
  height: 300px;
  background-size: 100%;
  background-position: center center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card1 {
  background-image: url("../assets/images/nav/buy.png");
}

.card2 {
  background-image: url("../assets/images/nav/export.png");
}
.card3 {
  background-image: url("../assets/images/nav/apart.png");
}
.card4 {
  background-image: url("../assets/images/nav/recycle.png");
}

.card:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -5px);
  background-size: 110%;
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

.item {
  border-bottom: 3px dashed rgb(0, 147, 217);
}

.dark-grey-text {
  color: #686868;
}
</style>
