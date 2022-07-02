<script setup>
  import { ref } from 'vue'
  import InfiniteScroll from '../modules/InfiniteScroll/InfiniteScroll.vue'

  const items = ref([])
  const $ref = ref(null)

  const fetchItems = (page) => fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`)
  .then(response => response.json())
  .then(res => res)

  const extractNextPage = (response, currentPage) => {
    if (!response.length) return null
    return currentPage + 1 
  }

  const extractNewItems = (response) => response
</script>

<template>
  <h2 class="info" v-text="`nextPage: ${$ref?.nextPage}, loading: ${$ref?.isLoading}`" />
  <InfiniteScroll 
    ref="$ref"
    v-model="items"
    :extractNextPage="extractNextPage" 
    :extractNewItems="extractNewItems" 
    fetchOffset="20vh"
    :fetch="fetchItems">
      <div v-for="item in items">
        <h2 v-text="item.title"></h2>
        <img width="100" height="100" :src="item.url">
      </div>
  </InfiniteScroll>
</template>
