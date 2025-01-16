<template>

  <section v-show="show" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokémons</h3>
  </section>
  <section class="flex flex-col justify-center items-center w-screen h-screen">
    <h1>¿Quién es este Pokémon?</h1>
    <!-- Pokemon Picture -->
    <!-- Pokemon Options -->
  </section>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);

</script>

<style scoped></style>
