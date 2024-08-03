<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
  import utils from '@/scripts/utils';
  import { RouterView } from 'vue-router';
  document.title = utils.siteConfig.global.site_title;
</script>

<template>
  <RouterView/>
</template>