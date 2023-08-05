<template>
    <v-app dark class="d-flex flex-column h-100">
      <Header />
      <v-main>
        <v-container fluid>
          <nuxt />
        </v-container>
      </v-main>
      <Footer />
    </v-app>
  </template>
  
  <script>
  import Header from '@/components/header.vue'
  import Footer from '@/components/footer.vue'
  
  export default {
    components: {
      Header,
      Footer,
    },
  }
  </script>
  