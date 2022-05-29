<template>
  <div>
    <!-- <v-img src="../assets/images/bg1.jpg" max-height="800" cover></v-img> -->
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black white--text">事業所</h2>
      </div>
    </div>
    <v-divider></v-divider>
    <v-card max-width="1200" class="mx-auto py-5">
      <v-container>
        <h1 class="main-title mb-5">事業所一覧</h1>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="ml-md-3">
              <v-card-title primary-title>
                <p class="text-h5">
                  平山ヤード
                  <span class="text-body-1 grey--text">平山町1041－44</span>
                </p>
              </v-card-title>
              <v-img
                height="400"
                src="../assets/images/環球/hirayama.png"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="mr-md-3">
              <v-card-title primary-title>
                <p class="text-h5">
                  木更津ヤード
                  <span class="text-body-1 grey--text">伊豆島田高作</span>
                </p>
              </v-card-title>
              <v-img
                src="../assets/images/環球/business1.jpg"
                height="400"
                cover
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped >
a {
  text-decoration: none;
}
.main-title {
  padding: 25px 10px;
  margin-bottom: 10px;
  font-size: 17px;
  background: #f0f0f0;
  border-left: 5px solid #3971cc;
  color: #3971cc;
}
</style>