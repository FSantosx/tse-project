<template>
  <tHeader/>
  <tGraph/>
  <tFooter/>
</template>

<script>

import tFooter from '@/components/TseFooter.vue';
import tHeader from '@/components/TseHeader.vue';
import tGraph from '@/components/GraphG5.vue';

export default {
  name: 'App',
  components: {
   tFooter, tGraph, tHeader
  } 
}
</script>

<style>

</style>
