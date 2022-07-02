<script setup>
import IntersectionObserver from './IntersectionObserver.vue'
import { reactive } from 'vue'
const props = defineProps({
  fetch: {
    type: Function,
    required: true
  },
  extractNewItems: {
    type: Function,
    required: true
  },
  extractNextPage: {
    type: Function,
    required: true
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  fetchOffset: {
    type: String,
    default: '50px'
  }
})

const emit = defineEmits(['update:modelValue'])

const data = reactive({
  isLoading: false,
  nextPage: 1
})

defineExpose(data)

const onIntersection = async () => {
  if (!data.nextPage || data.isLoading) return
  data.isLoading = true
  const response = await props.fetch(data.nextPage)
  data.nextPage = props.extractNextPage(response, data.nextPage)
  emit('update:modelValue', [ ...props.modelValue, ...props.extractNewItems(response) ])
  data.isLoading = false
}
</script>

<template>
<div class="InfiniteScroll">
  <slot />
  <IntersectionObserver 
    @intersection="onIntersection" 
    class="InfiniteScroll__observer" 
    :style="{ height: fetchOffset}"
  />
</div>
</template>

<style>
.InfiniteScroll {
  position: relative;
}

.InfiniteScroll__observer {
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>