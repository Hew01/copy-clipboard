<template>
        <v-footer :absolute="!fixed" app>
            <span class="footer-text">&copy; {{ currentYear }}</span>
        </v-footer>
</template>

<script>
export default {
    data() {
        return {
            fixed: false,
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>

<style scoped>
    .v-footer {
        padding: 44px 100px;
        background-color: black;
    }
    
    .footer-text {
        font-size: 1.5em;
        color: white;
        font-family: 'Quicksand', sans-serif;
    }
</style>
  