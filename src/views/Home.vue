<template>
  <div>
    <v-card color="rgab(0,0,0,.7)" min-height="800" dark class="video-bg-warpper">

      <CarousalHome />
      <div class="viedo-bg">

      </div>
      <div class="mask">

      </div>
      <v-container class="main-container">
        <v-row>
          <v-col cols="12" md="8" offset="1" offset-md="2">
            <div>
              <h1 class="text-xl-h2 text-lg-h3 text-md-h4 text-h5 font-weight-medium " style="line-height:150%">
                {{ $t('home.title1') }}</h1>

            </div>

          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8" offset="1" offset-md="2">
            <div>
              <h1 class="text-xl-h2  text-lg-h3 text-md-h4  text-h5 font-weight-medium " style="line-height:150%;">
                {{ $t('home.title2') }}</h1>

              <p class="text-md-body-1 text-body-2 mt-8">{{ $t('home.subTitle') }}</p>
            </div>

          </v-col>
        </v-row>
      </v-container>

    </v-card>


    <v-container grid-list-xs>
      <v-row>
        <v-col>
          <h1 class="title-h2 text-center">{{ $t('home.buy.title') }}</h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{$t('home.buy.subTitle')}}</p>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <router-link to="/productPrice">
                  <v-card>
                    <v-img src="../assets/images/環球/買取1.jpg" height="400"></v-img>
                  </v-card>
                </router-link>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <router-link to="/productPrice">
                  <v-card>
                    <v-img src="../assets/images/環球/買取2.jpg" height="400"></v-img>
                  </v-card>
                </router-link>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <router-link to="/productPrice">
                  <v-card>
                    <v-img src="../assets/images/環球/買取3.jpg" height="400"></v-img>
                  </v-card>
                </router-link>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <router-link to="/productPrice">
                  <v-card>
                    <v-img src="../assets/images/環球/買取4.jpg" height="400"></v-img>
                  </v-card>
                </router-link>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <h1 class="title-h2 text-center">{{ $t('business.buy.title') }}</h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{$t('business.buy.content')}}</p>
            <v-row>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="500">
                  <v-img src="../assets/images/business/inquery.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.buy.process.inquery.title')}}</h3>
                    <p class="text-body-1 ">{{$t('business.buy.process.inquery.content')}}</p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="500">
                  <v-img src="../assets/images/business/bring.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.buy.process.bring.title')}}</h3>
                    <p class="text-body-1 ">{{$t('business.buy.process.bring.content')}}</p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="500">
                  <v-img src="../assets/images/business/weight.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.buy.process.weight.title')}}</h3>
                    <p class="text-body-1 ">{{$t('business.buy.process.weight.content')}}</p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="500">
                  <v-img src="../assets/images/business/payment.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.buy.process.payment.title')}}</h3>
                    <p class="text-body-1 ">{{$t('business.buy.process.payment.content')}}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col>
          <h1 class="title-h2 text-center">{{ $t('business.export.title') }}</h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{$t('business.export.content')}}</p>
            <v-row>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/factory4.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.export.factories.China')}}</h3>

                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/factory2.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.export.factories.Africa')}}</h3>

                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/factory3.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.export.factories.Thailand')}}</h3>

                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/factory1.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.export.factories.Malaysia')}}</h3>

                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col>
          <h1 class="title-h2 text-center">{{ $t('business.takeApart.title') }}</h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{$t('business.takeApart.content')}}</p>
            <v-row>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/steel.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.takeApart.material.iron')}}</h3>

                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/copper.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.takeApart.material.noIron')}}</h3>

                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/Al.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.takeApart.material.al')}}</h3>

                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/plastics.png" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.takeApart.material.plastic')}}</h3>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
      <v-row>
        <v-col>
          <h1 class="title-h2 text-center">{{ $t('business.recycle.title') }}</h1>
          <v-card max-width="1200" class="mx-auto" flat>
            <p>{{$t('business.recycle.content')}}</p>
            <v-row>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/step1.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.recycle.process.step1.title')}}</h3>

                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/step2.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.recycle.process.step2.title')}}</h3>

                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/step3.jpeg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.recycle.process.step3.title')}}</h3>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6" lg="3">
                <v-card outlined class="text-center" height="400">
                  <v-img src="../assets/images/business/step4.jpg" height="300px"></v-img>
                  <v-card-text class="d-flex flex-column align-center justify-center pa-10">
                    <h3 class="text-h6 pb-10">{{$t('business.recycle.process.step4.title')}}</h3>
                  </v-card-text>
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
  import CarousalHome from '../components/CarouselHome.vue'
  export default {
    name: 'home',

    components: {
      CarousalHome
    },
    created() {

    }
  }
</script>

<style scoped>
  .video-bg-warpper {
    position: relative;
    display: flex;
    align-items: center
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
    background-color: rgba(0, 0, 0, .5)
  }

  .main-container {
    z-index: 3
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
</style>