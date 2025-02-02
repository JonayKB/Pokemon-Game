<template>
  <div>
    <img v-if="!showPokemon" class="brightness-0 h-[200px]" :src="pokemonImage" alt="Pokemon" />
    <img v-else class="h-[200px] fade-in" :src="pokemonImage" alt="Pokemon" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
interface Props {
  pokemonId: number;
  showPokemon: boolean;
}
const props = defineProps<Props>();

const pokemonImage = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonId}.png`);

</script>

<style scoped></style>
