
<script setup>
    import utils from '@/scripts/utils';

    const siteConfig = utils.siteConfig;
    const applicationStore = utils.useApplicationStore();
</script>

<template>
    <div class="selectntro-frame" :class="applicationStore.isDeviceMobile && 'frame-mobile'">
        <div class="selectntro-box">
            <h1 class="frame-title">{{ siteConfig.selectntro.title }}</h1>
            <p class="frame-desc">{{ siteConfig.selectntro.desc }}</p>

            <div class="selectntro-data">
                <div class="selectntro-item" v-for="(item,index) in siteConfig.selectntro.data" :key="index">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    @import url("./assets/SelectntroFrame.css");
</style>