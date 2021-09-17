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
                        imgUrl: require('../assets/images/metal/鉄スクラップ.jpg'),
                        titleJp: "鉄スクラップ",
                        price: "18円/kg（税込）"
                    },
                    {
                        imgUrl: require('../assets/images/metal/板.jpg'),
                        titleJp: "敷鉄板",
                        price: "25円/kg（税込）"
                    }

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