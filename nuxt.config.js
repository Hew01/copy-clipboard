import colors from 'vuetify/es5/util/colors'
import path from 'path'
import fs from 'fs'

export default {

    ssr: false,

    server: {
      https: {
        key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
      }
    },

    head: {
        titleTemplate: '%s - Copy clipboard',
        title: 'Copy clipboard',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      },

    css: [
      '~/assets/main.css'
    ],

    buildModules: [
      '@nuxtjs/vuetify',
      '@nuxtjs/google-fonts'
    ],

    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        treeShake: true,
        theme: {
          dark: true,
          themes: {
            dark: {
              primary: "#100073",
              error: colors.red,
              success: colors.green.accent4,
              background: "#FFC700",
            },
            typography: {
              fontFamily: {
                primary: 'Bungee',
                secondary: 'Montserrat',
              }
            }
          },
        },
        defaultAssets: false,
        // {
        //   font: {
        //       family: 'Quicksand',
        //     },
        //   },
        //   webfontloader: {
        //     google: {
        //       families: ['Quicksand'],
        //     },
        // },
      },
    googleFonts: {
      download: true,
      stylePath: 'css/fonts.css',

      families: {
        Bungee: true,
        Montserrat: true,
        Quicksand: true,
      }
    }
  }
  