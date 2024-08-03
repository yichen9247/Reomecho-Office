
<script setup>
    import utils from '@/scripts/utils';

    const siteConfig = utils.siteConfig;
    const applicationStore = utils.useApplicationStore();
</script>

<template>
    <div class="statistics-frame" :class="applicationStore.isDeviceMobile && 'frame-mobile'">
        <div class="statistics-box">
            <h1 class="frame-title">{{ siteConfig.statistics.title }}</h1>
            <p class="frame-desc">{{ siteConfig.statistics.desc }}</p>

            <div class="statistics-data">
                <div class="statistics-item" v-for="(item,index) in siteConfig.statistics.data" :key="index">
                    <span class="item-value">{{ item.value }}</span>
                    <span class="item-title">{{ item.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import url("./assets/StatisticsFrame.css");
</style>