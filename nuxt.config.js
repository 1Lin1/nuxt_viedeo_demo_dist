import colors from 'vuetify/es5/util/colors'

// 引入环境变量配置插件
import dotenv from 'dotenv'
dotenv.config()

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { name: 'referrer', content: 'no-referrer' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        '~assets/css/normalize.css',
        // 引入全局scss
        { src: '~assets/scss/main.scss', lang: 'scss' }
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',

        //登录token相关
        '@nuxtjs/auth',
        // '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
    ],



    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: { url: '/auth/login', method: 'post', },
                    logout: { url: '/auth/logout', method: 'post' },
                    user: { url: '/auth/user', method: 'get', propertyName: false }
                },
                // tokenRequired: true,
                // tokenType: 'bearer'
                // autoFetchUser: true
            }
        }
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    // 解决axios跨域问题
    // axios: {
    //     proxy: true
    // },

    // proxy: {
    //     '/api': process.env.API_URL
    // },


    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~assets/scss/main.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}