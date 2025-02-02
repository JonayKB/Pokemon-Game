<template>
  <div class="flex justify-center flex-col flex-wrap">
    <button
      type="button"
      @click="$emit('selectedOption', item.id)"
      :class="[
        'btn capitalize bg-gradient-to-r from-purple-500 to-pink-500',
        blockSelection && (item.id === pokemonCorrect
          ? 'bg-gradient-to-r from-green-500 to-green-700'
          : 'bg-gradient-to-r from-red-500 to-red-700')
      ]"
      :disabled="blockSelection"
      v-for="(item) in pokemonOptions"
      :key="item.id"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/interfaces/pokemon';

interface Props {
  pokemonOptions: Pokemon[];
  blockSelection: boolean;
  pokemonCorrect: number;
}

const { pokemonOptions } = defineProps<Props>();
defineEmits<{
  selectedOption: [id: number];
}>();

</script>


<style scoped>
.btn {
  @apply text-white hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2;
}
</style>
