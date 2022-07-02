<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const props = defineProps({
  options: {
    type: Object,
    default: {}
  }
})
const emit = defineEmits(['intersection'])

const $root = ref(null)
const observer = ref(null)

const setEmitOnIntersection = ([entry]) => {
  if (entry?.isIntersecting) emit('intersection')
}
const initializeObserver = () => {
  observer.value = new IntersectionObserver(setEmitOnIntersection, props.options)
  observer.value.observe($root.value)
}
const disconnectObserver = () => {
  observer.value.disconnect()
}

onMounted(initializeObserver)
onUnmounted(disconnectObserver)
</script>

<template>
  <div ref="$root" class="IntersectionObserver" />
</template>
