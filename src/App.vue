<script setup>
  import UsecaseCommonPagination from './example/UsecaseCommonPagination.vue';
  import UsecaseUniquePagination from './example/UsecaseUniquePagination.vue';
</script>

<template>
<div class="content">
  <div class="wrapper">
    <UsecaseCommonPagination />
  </div>

  <div class="wrapper">
    <UsecaseUniquePagination />
  </div>
</div>
</template>

<style>
:root {
  height: 100%;
  background-color: #fae7e7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 20px;
  column-gap: 30px;
}

.wrapper {
  height: 80vh;
  overflow: auto;
  flex-shrink: 0;
  flex-grow: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.136);
  background-color: #fff;
}

.info {
  position: fixed;
  top: 0px;
}
</style>
