<template>
        <v-system-bar color="#100073" class="header-custom" :clipped-left="clipped" app dark>
            <v-toolbar-title class="header-text">{{ title }}</v-toolbar-title>
            <v-spacer />
        </v-system-bar>
</template>
  
<script>
export default {
    data() {
        return {
        clipped: false,
        drawer: false,
        fixed: false,
        miniVariant: false,
        rightDrawer: false,
        title: 'Front-end test',
        };
    },
};
</script>

<style scoped>
    ::v-deep .v-toolbar__content {
        height: 32px !important;
    }

    .header-custom {
        height: 120px !important;
        padding: 40px 100px;
    }

    .header-text {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 2em;
    }
</style>
