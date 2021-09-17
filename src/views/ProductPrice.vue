<template>
  <div>
    <div class="banner-warp">
      <div class="mask d-flex align-center justify-center">
        <h2 class="text-h2 my-5 font-weight-black  white--text">{{ $t('routes.productPrice') }}
        </h2>
      </div>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" lg="3">
          <v-sheet rounded="lg" width="100%">


            <v-list shaped>
              <v-subheader>商品種類</v-subheader>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.url">

                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>


                </v-list-item>
              </v-list-item-group>
            </v-list>

          </v-sheet>
        </v-col>

        <v-col cols="12" sm="9" lg="9">
          <v-sheet rounded="lg" class="pa-5" elevation="3" max-width="1200">

            <!--  -->
            <router-view>

            </router-view>

          </v-sheet>
        </v-col>
      </v-row>

    </v-container>
    <!-- <v-container>
      <v-row>
        <v-col>
          <v-card max-width="1200" class="mx-auto">
            <v-tabs next-icon="mdi-arrow-right-bold-box-outline" prev-icon="mdi-arrow-left-bold-box-outline"
              show-arrows>
              <v-tab width="1">
                <v-icon left>
                  mdi-buffer
                </v-icon>
                鉄金属
              </v-tab>
              <v-tab>
                <v-icon left>
                  mdi-buffer
                </v-icon>
                非鉄金属
              </v-tab>
              <v-tab>
                <v-icon left>
                  mdi-buffer
                </v-icon>
                廃プラスチック
              </v-tab>
              <v-tab>
                <v-icon left>
                  mdi-buffer
                </v-icon>
                日用雑貨
              </v-tab>
              <v-tab>
                <v-icon left>
                  mdi-buffer
                </v-icon>
                その他
              </v-tab>
         
            </v-tabs>
          </v-card>
        </v-col>

      </v-row>
    </v-container> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page: 1,
        overlay: false,
        selectedItem: 1,
        items: [{
            text: '鉄金属',
            icon: 'mdi-flag',
            url: '/productPrice/metal'
          },
          {
            text: '非鉄金属',
            icon: 'mdi-flag',
            url: '/productPrice/nonMetal'
          },
          {
            text: '廃プラスチック',
            icon: 'mdi-flag',
            url: '/'
          },
          {
            text: '日用雑貨',
            icon: 'mdi-flag',
            url: '/'
          },
          {
            text: 'その他',
            icon: 'mdi-flag',
            url: '/'
          }, 
        ]

      }
    },
    components: {

    },

    created() {

    }
  }
</script>

<style scoped>
  img {
    height: 300px;
  }
</style>