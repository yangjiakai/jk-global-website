<template>
    <div>
        <v-row>
            <v-col v-for="item in products" :key="item.index" md="4">
                <v-hover>
                    <template v-slot:default="{ hover }">
                        <v-fade-transition>
                            <v-card class="pa-5" :elevation="hover?12:1">
                                <img :src="item.imgUrl" alt="" width="100%" max-height="300" elevation-10>
                                <v-card-title primary-title>
                                    {{item.titleJp}}
                                </v-card-title>

                                <v-card-subtitle>
                                    {{item.price}}
                                </v-card-subtitle>

                            </v-card>
                        </v-fade-transition>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
        <v-row>
            <template>
                <div class="text-center mx-auto ma-5">
                    <v-pagination v-model="page" :length="1" prev-icon="mdi-menu-left" next-icon="mdi-menu-right">
                    </v-pagination>
                </div>
            </template>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [{
                        imgUrl: require('../assets/images/metal/ピカ線.jpg'),
                        titleJp: "ピカ線・ピカ銅",
                        price: "580円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/並銅.jpg'),
                        titleJp: "並銅",
                        price: "500円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/上銅.jpg'),
                        titleJp: "上銅",
                        price: "460円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/込銅.jpg'),
                        titleJp: "込銅",
                        price: "460円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/砲金.jpg'),
                        titleJp: "砲金",
                        price: "400円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/込砲金.jpg'),
                        titleJp: "込砲金（バルブ砲金）",
                        price: "380円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/真鍮ラジエーター.jpg'),
                        titleJp: "真鍮",
                        price: "340円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/込真鍮.jpg'),
                        titleJp: "込真鍮",
                        price: "320円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/水道メーター.jpg'),
                        titleJp: "水道メーター",
                        price: "300円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/エアコン.jpg'),
                        titleJp: "エアコン",
                        price: "575円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/GHP工業エアコン.jpg'),
                        titleJp: "GHP工業エアコン",
                        price: "60円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/給湯器.jpg'),
                        titleJp: "給湯器",
                        price: "125円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/ラジエーター.jpg'),
                        titleJp: "ラジエター",
                        price: "220円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/黒モーター.jpg'),
                        titleJp: "黒モーター",
                        price: "25円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/電車モーター.jpg'),
                        titleJp: "モーター",
                        price: "35円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/並銅.jpg'),
                        titleJp: "並銅",
                        price: "500円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/銅芯トランス.jpg'),
                        titleJp: "銅芯トランス",
                        price: "85円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/配電盤.jpg'),
                        titleJp: "配電盤",
                        price: "50円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/工業雑品.jpg'),
                        titleJp: "工業雑品",
                        price: "35～40円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/家電雑品.jpg'),
                        titleJp: "家電雑品",
                        price: "15円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/アルミ.jpg'),
                        titleJp: "アルミ",
                        price: "90円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/一本線.jpg'),
                        titleJp: "一本線（銅率80%）",
                        price: "330円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/三本線.jpg'),
                        titleJp: "三本線（銅率65%）",
                        price: "260円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/車のハーネス.jpg'),
                        titleJp: "車のハーネス",
                        price: "210円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/雑線（VA）.jpg'),
                        titleJp: "雑線（VA)",
                        price: "180円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/家電線.jpg'),
                        titleJp: "家電線（コード線）",
                        price: "130円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/パイプ（皮付）.jpg'),
                        titleJp: "パイプ（皮付）",
                        price: "265円/kg（税込）"
                    },
                ]
            }
        },
        components: {

        }
    }
</script>

<style scoped>
    img {
        height: 300px;
    }
</style>