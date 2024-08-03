
<script setup>
    import utils from '@/scripts/utils';

    const siteConfig = utils.siteConfig;
    const applicationStore = utils.useApplicationStore();
</script>

<template>
    <div class="display-frame" :class="applicationStore.isDeviceMobile && 'frame-mobile'">
        <div class="display-box">
            <div class="display-item" v-for="(item, index) in siteConfig.display" :key="index">
                <div class="display-intro">
                    <h1 class="display-title">{{ item.title }}</h1>
                    <p class="display-desc">{{ item.desc }}</p>

                    <div class="display-data">
                        <p class="display-card" v-for="(items, indexs) in item.data" :key="indexs">{{ items.title }}</p>
                    </div>
                </div>

                <img class="display-image" :src="item.image" :alt="item.title" draggable="false">
            </div>
        </div>
    </div>
</template>

<style>
    @import url("./assets/DisplaysFrame.css");
</style>