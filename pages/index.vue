<template>
    <div class="container-fluid py-md-5 mb-5">
      <main>
        <v-row justify="center" align="center" class="py-sm-5">
          <v-col md="12" lg="8" class="col-custom mb-6 mb-md-0">
            <h1 class="primary--text text-h1 mb-4 position-relative">
              Type in your very favorite text.
            </h1>
            <p class="primary--text text-h2 mb-4">
              Experience the copy-to-clipboard to each and every moment.
            </p>
            <TextFieldWithButtonWrapper
              v-model="textInput"
              @copied="showCopiedMessage"
              label="Enter Text"
              outlined
              class="text-blue"
            />
            <p class="mt-3">{{ copiedMessage }}</p>
          </v-col>
          <v-col lg="4" md="0">
            <img class="app-logo" alt="App Logo" src="../assets/img/human-2.svg" />
          </v-col>
        </v-row>
      </main>
    </div>
  </template>
  
  <script>
  import TextFieldWithButtonWrapper from '@/components/TextFieldWithButtonWrapper.vue';
  
  export default {
    components: {
      TextFieldWithButtonWrapper,
    },
    data() {
      return {
        textInput: '',
        copiedMessage: '',
      };
    },
    methods: {
      showCopiedMessage() {
        this.copiedMessage = 'Text has been copied to clipboard';
      },
    },
  };
  </script>
  
  <style>
  @media (max-width: 1250px) {
    .app-logo {
      display: none;
    }
  }
  
  .col-custom {
    padding-left: 50px;
  }
  .app-logo {
    float: right;
    margin-right: -50px;
    margin-bottom: -100px;
  }
  </style>
  