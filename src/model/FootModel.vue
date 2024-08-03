
<script setup>
    import { onMounted, ref } from 'vue';
    import utils from '@/scripts/utils';

    const runDays = ref(0); 
    const siteConfig = utils.siteConfig;

    onMounted(async () => {
        runDays.value = Math.ceil(Math.abs(new Date() - new Date(siteConfig.footer.runDate)) / (1000 * 60 * 60 * 24));
    });
</script>

<template>
    <div class="footer-container">
        <div class="footer-box">
            <p v-html="siteConfig.footer.html"></p>
        </div>
    </div>
</template>

<style>
    @import url("./assets/FootModel.css");
</style>