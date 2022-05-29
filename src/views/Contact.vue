<template>
  <div>
    <!-- <v-img src="../assets/images/bg1.jpg" max-height="800" cover></v-img> -->
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black white--text">
          {{ $t("routes.contactUs") }}
        </h2>
      </div>
    </div>
    <v-divider></v-divider>
    <v-card max-width="1200" class="mx-auto mt-5">
      <v-container>
        <h1 class="main-title mt-5">お問い合わせ</h1>
        <v-row>
          <v-col cols="12">
            <v-form
              ref="form"
              action=""
              v-model="valid"
              lazy-validation
              class="pa-5"
            >
              <v-text-field
                label="名前(必須)"
                v-model="name"
                required
                :rules="nameRules"
              ></v-text-field>
              <v-text-field label="法人名" v-model="corporationName"
                >></v-text-field
              >
              <v-text-field label="部署" v-model="deployment"></v-text-field>
              <v-text-field label="役職" v-model="position"></v-text-field>
              <v-text-field
                label="郵便番号"
                v-model="postNumber"
              ></v-text-field>

              <v-text-field label="ご住所" v-model="address"></v-text-field>
              <v-text-field label="お電話番号" v-model="phone"></v-text-field>
              <v-text-field
                label="e-mail(必須)"
                v-model="email"
                required
                :rules="emailRules"
              ></v-text-field>
              <v-textarea
                label="お問い合わせ内容(必須)"
                v-model="content"
                value=""
                hint=""
                required
                :rules="contentRules"
                class="mb-5"
              ></v-textarea>

              <a :href="mailUrl" @click="createMail">
                <v-btn xLarge block color="blue darken-3" dark>送信</v-btn>
              </a>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    corporationName: "",
    deployment: "",
    position: "",
    postNumber: "",
    address: "",
    phone: "",
    email: "",
    content: "",
    mailUrl: "mailto:yjkbako@gmail.com?Subject=問い合わせ&body=",
    nameRules: [(v) => !!v || "名称を入力してください"],
    emailRules: [
      (v) => !!v || "メールを入力してください",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    contentRules: [(v) => !!v || "問い合わせ内容を入力してください"],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    createMail() {
      this.validate();
      let nameStr = "名前:" + this.name + "%0D%0A";
      let corporationNameStr = "法人名:" + this.corporationName + "%0D%0A";
      let deploymentStr = "部署:" + this.deployment + "%0D%0A";
      let positionStr = "役職:" + this.position + "%0D%0A";
      let postNumberStr = "郵便番号:" + this.postNumber + "%0D%0A";
      let addressStr = "ご住所:" + this.address + "%0D%0A";
      let phoneStr = "お電話番号:" + this.phone + "%0D%0A";
      let emailStr = "e-mail:" + this.email + "%0D%0A";
      let contentStr = "お問い合わせ内容:" + this.content + "%0D%0A";
      this.mailUrl =
        this.mailUrl +
        nameStr +
        corporationNameStr +
        deploymentStr +
        positionStr +
        postNumberStr +
        addressStr +
        phoneStr +
        emailStr +
        contentStr;
    },
  },
};
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