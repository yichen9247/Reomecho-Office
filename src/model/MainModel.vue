
<script setup>
    import utils from '@/scripts/utils';

    const siteConfig = utils.siteConfig;
    const applicationStore = utils.useApplicationStore();
</script>

<template>
    <div class="main-container" :style="{ height: applicationStore.isDeviceMobile ? 'calc(100vh - 65px)' : '600px' }">
        <div class="main-box" v-if="!applicationStore.isDeviceMobile">
            <div class="container">
                <div class="left-introduce">
                    <h2 class="left-title">{{ siteConfig.main.title }}</h2>
                    <p class="left-desc">{{ siteConfig.main.desc }}</p>

                    <div class="button-group">
                        <a class="button-link" v-for="(item,index) in siteConfig.main.button" :key="index" :style="{ background: item.background }" :target="item.target" :title="item.title" :href="item.href">{{ item.title }}</a>
                    </div>
                </div>
                <img class="screenhot" :src="siteConfig.main.image" draggable="false">
            </div>
        </div>

        <div class="main-box box-mobile" v-if="applicationStore.isDeviceMobile">
            <div class="container">
                <img class="screenhot" :src="siteConfig.main.image" draggable="false">
                <div class="left-introduce">
                    <h2 class="left-title">{{ siteConfig.main.title }}</h2>
                    <p class="left-desc">{{ siteConfig.main.desc_mobile }}</p>

                    <div class="button-group">
                        <a class="button-link" v-for="(item,index) in siteConfig.main.button" :key="index" :style="{ background: item.background }" :target="item.target" :title="item.title" :href="item.href">{{ item.title }}</a>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<style>
    @import url("./assets/MainModel.css");
</style>