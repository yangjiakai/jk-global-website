<template>
    <div>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn class="ml-2 mt-2" icon v-bind="attrs" v-on="on">
                    <v-icon class="mr-1">
                        mdi-earth
                    </v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="(lang, i) in langs" :key="i" :value="lang.mode"
                        @click="changeLocale(lang.mode)">
                        <v-list-item-content>
                            <v-list-item-title v-text="lang.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        name: 'LanguageSwitch',
        data() {
            return {
                langs: [{
                        title: '日本語',
                        mode: 'ja'
                    },
                    {
                        title: 'English',
                        mode: 'en'
                    },
                    {
                        title: '简体中文',
                        mode: 'ch'
                    },

                ],

                languages: ["en", "ch", "ja"]
            }
        },
        components: {

        },
        methods: {
            changeLocale(localeMode) {
                this.$root.$i18n.locale = localeMode
            }
        },
    }
</script>

<style scoped lang="stylus">
</style>