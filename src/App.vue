<template>
  <v-app>
    <v-app-bar
      fixed
      class="appBar d-block d-md-none"
      :color="appBarColor"
      height="80"
      style="border-bottom: 3px solid #565656"
      elevate-on-scroll
    >
      <v-btn icon x-large @click.stop="drawer = !drawer">
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          height="40"
          contain
          class="shrink mr-2 d-block d-md-none"
          src="@/assets/logo.jpg"
        />
        <v-img
          alt="Vuetify Logo"
          contain
          class="shrink mr-2 d-none d-md-block"
          src="@/assets/logo.jpg"
        />
      </div>
      <v-spacer></v-spacer>
      <i18n class="mr-10"></i18n>
    </v-app-bar>
    <v-app-bar
      fixed
      class="appBar d-none d-md-block"
      :color="appBarColor"
      height="100"
      style="border-bottom: 3px solid #565656"
      elevate-on-scroll
    >
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          height="30"
          contain
          class="shrink mr-2 d-block d-md-none"
          src="@/assets/logo.jpg"
        />
        <v-img
          alt="Vuetify Logo"
          height="80"
          width="80"
          contain
          class="shrink mr-2 d-none d-md-block"
          src="@/assets/logo.jpg"
        />
      </div>
      <v-toolbar-items>
        <v-btn width="150" color="primary" class="text-body-1" text to="/">{{
          $t("routes.home")
        }}</v-btn>
        <v-btn
          width="150"
          color="primary"
          class="text-body-1"
          text
          to="/about"
          >{{ $t("routes.about") }}</v-btn
        >
        <v-btn
          width="150"
          color="primary"
          class="text-body-1"
          text
          to="/productPrice"
          >{{ $t("routes.productPrice") }}
        </v-btn>
        <!-- <v-btn width="150" color="primary" class="text-body-1" text to="/business">{{ $t('routes.business') }}</v-btn> -->
        <v-btn
          width="150"
          color="primary"
          class="text-body-1"
          text
          to="/contact"
          >{{ $t("routes.contactUs") }}</v-btn
        >
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <i18n class="mr-10"></i18n>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item class="py-3">
        <v-img src="@/assets/logo.jpg"></v-img>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t("routes.home") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t("routes.about") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/productPrice">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{
              $t("routes.productPrice")
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item link to="/business">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t('routes.business') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
        <v-list-item link to="/contact">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t("routes.contactUs") }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="margin-top: 80px">
      <router-view />
    </v-main>

    <v-divider class="mt-10"></v-divider>
    <v-footer color="rgba(253,252,250)">
      <v-container grid-list-xs>
        <v-row class="text-center">
          <v-col cols="12" md="3">
            <v-btn
              width="120"
              color="primary"
              class="text-body-1"
              text
              to="/"
              >{{ $t("routes.home") }}</v-btn
            >
          </v-col>
          <v-col cols="12" md="3">
            <v-btn
              width="120"
              color="primary"
              class="text-body-1"
              text
              to="/about"
              >{{ $t("routes.about") }}</v-btn
            >
          </v-col>
          <v-col cols="12" md="3">
            <v-btn
              width="120"
              color="primary"
              class="text-body-1"
              text
              to="/productPrice"
            >
              {{ $t("routes.productPrice") }}
            </v-btn>
          </v-col>
          <!-- <v-col cols="12" md="2">
            <v-btn width="120" color="primary" class="text-body-1" text to="/business">{{ $t('routes.business') }}
            </v-btn>
          </v-col> -->
          <v-col cols="12" md="3">
            <v-btn
              width="120"
              color="primary"
              class="text-body-1"
              text
              to="/contact"
              >{{ $t("routes.contactUs") }}
            </v-btn>
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <v-row justify="center" class="text-center">
          <v-col cols="12">
            <p class="text-button grey--text">
              COPYRIGHT © KANKYU TRADE CO.,LTD All rights reserved.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import I18n from "./components/I18n";

export default {
  name: "App",

  data: () => ({
    offsetTop: 0,
    appBarColor: "rgba(255,255,255,1)",
    drawer: null,
    items: [
      {
        title: "Home",
        icon: "mdi-view-dashboard",
      },
      {
        title: "About",
        icon: "mdi-forum",
      },
    ],
    footerMenus: [
      {
        primaryMenu: "PRODUCT",
      },
      {
        primaryMenu: "RESOURCES",
      },
      {
        primaryMenu: "COMPANY",
      },
      {
        primaryMenu: "SUPPORT",
      },
    ],
  }),
  components: {
    I18n,
  },

  methods: {},
};
</script>


<style lang="css">
.appBar {
  box-sizing: border-box;
}

/* Bannner Style */
.banner-warp {
  background-image: url("./assets/images/環球/買取4.jpg");
  background-position: center center;
  background-size: cover;
  height: 400px;
}

.mask {
  background-color: rgba(0, 0, 0, 0.5);
  height: 400px;
}
</style>