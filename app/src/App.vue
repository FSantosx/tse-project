<template>
  <tHeader />
  <tGraph />
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
  },
  data() {
    return {
      post: []
    }
  },
  methods: {
    getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(data => this.post = data)
    }
  }
}
</script>

<style>

</style>
