<template>
  <div class="about">
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black white--text">会社マップ</h2>
      </div>
    </div>
    <v-sheet
      class="d-flex justify-center align-center pa-10 mx-auto"
      max-width="1000"
    >
      <v-container>
        <h1 class="main-title">本社マップ</h1>

        <v-simple-table class="my-5">
          <template v-slot:default>
            <tbody>
              <tr>
                <td width="25%">本社</td>
                <td>〒266-0003 <br />千葉県千葉市緑区高田町1658</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-card>
          <GmapMap
            :center="{ lat: 35.5720459, lng: 140.2234384 }"
            :zoom="16"
            :options="{ streetViewControl: false }"
            map-type-id="roadmap"
            style="width: 100%; height: 700px"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              @click="center = m.position"
            />
          </GmapMap>
          <!-- <v-img src="../assets/images/map.png" width="100%"></v-img> -->
        </v-card>
        <v-card flat class="text-center pa-5">
          <v-btn large color="#3971CC" dark class="mx-auto" to="/factory"
            >事業所一覧こちらへ</v-btn
          >
        </v-card>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "videoBg",
  data() {
    return { markers: [{ position: { lat: 35.5720459, lng: 140.2234384 } }] };
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