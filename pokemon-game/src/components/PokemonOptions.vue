<template>
  <div>
    <button type="button" class="btn block" v-for="(item, index) in pokemons" :key="index">Pokemon {{ item.id
      }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pokemons = ref([
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
]);

</script>


<style scoped>
.btn {
  @apply text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2;
}
</style>
