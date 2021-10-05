<template>
  <div class="about">
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black white--text">
          {{ $t("routes.about") }}
        </h2>
      </div>
    </div>
    <v-sheet
      class="d-flex justify-center align-center pa-10 mx-auto"
      max-width="1000"
    >
      <v-container grid-list-xs>
        <h1 class="main-title">企業情報</h1>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td width="25%">社名</td>
                <td>環球貿易株式会社</td>
              </tr>
              <tr>
                <td>設立</td>
                <td>平成21年8月</td>
              </tr>
              <tr>
                <td>売上高</td>
                <td>100億円(令和2年)</td>
              </tr>
              <tr>
                <td>本社所在地</td>
                <td class="py-2">
                  〒〒266-0003
                  <br />千葉県千葉市緑区高田町1658
                  <br />TEL:043-309-8666<br />FAX:043-309-8645
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <h4 class="sub-title mt-10">役員構成</h4>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td width="25%">代表取締役会長兼社長</td>
                <td>常田 瑛仁</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <h4 class="sub-title mt-10">事業者</h4>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td width="25%">東京営業所</td>
                <td class="py-2">
                  〒141-0022<br />東京都品川区東五反田3-1-6-6F<br />TEL:03-6277-4588<br />FAX:03-6277-4686
                </td>
              </tr>
              <tr>
                <td>平山町ヤード</td>
                <td class="py-2">
                  〒266-0002<br />千葉県千葉市緑区平山町1041-44<br />TEL:043-312-8547<br />FAX:043-312-8548
                </td>
              </tr>
              <tr>
                <td>分解センター</td>
                <td class="py-2">
                  〒292-0812<br />千葉県木更津市矢那1064<br />TEL:043-309-8666
                  <br />FAX:043-309-8645
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <h4 class="sub-title mt-10">主要取引先銀行</h4>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td width="25%">取引先銀行</td>
                <td class="py-2">
                  三井住友銀行
                  <br />千葉銀行 <br />京葉銀行 <br />千葉興業銀行
                  <br />千葉信用金庫
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <h1 class="main-title mt-15">事業所マップ</h1>
        <v-card>
          <v-img src="../assets/images/map.png" width="100%"></v-img>
        </v-card>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "videoBg",
  data() {
    return {};
  },

  components: {},
  created() {},
};
</script>
<style>
.main-title {
  padding: 25px 10px;
  margin-bottom: 10px;
  font-size: 17px;
  background: #f0f0f0;
  border-left: 5px solid #3971cc;
  color: #3971cc;
}

.sub-title {
  margin-bottom: 10px;
  padding: 10px;
  color: #0d3387;
  font-size: 14px;
  background: #e4ecf9;
}

.head-bg {
  background-color: rgb(0, 147, 217);
  height: 30px;
}

tr:nth-child(odd) {
  background: #f4f4f4;
}
</style>