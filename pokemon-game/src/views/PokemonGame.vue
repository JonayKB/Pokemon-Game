<template>

  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>
  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1>¿Quién es este Pokémon?</h1>
    <!-- Pokemon Picture -->
    <PokemonPicture :pokemon-id="randomPokemon.id" :show-pokemon="gameStatus != GameStatus.Playing" />
    <!-- Pokemon Options -->
    <PokemonOptions :pokemon-options="pokemonsOptions" @selected-option="onSelectedOption"
      :block-selection="gameStatus != GameStatus.Playing" :pokemon-correct="randomPokemon.id" />

    <button @click="restartGame" class="btn bg-gradient-to-r from-purple-300 to-pink-500 mt-5">Reiniciar</button>
  </section>

</template>

<script setup lang="ts">
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import { usePokemonGame } from '@/composables/usePokemonGame';
import { GameStatus } from '@/interfaces';
const { gameStatus, isLoading, randomPokemon, pokemonsOptions, checkAnswer, restartGame } = usePokemonGame();

const onSelectedOption = (id: number) => {
  checkAnswer(id);
}


</script>

<style scoped>
.btn {
  @apply text-white hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2;
}
</style>
