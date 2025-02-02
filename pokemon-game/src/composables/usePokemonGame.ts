import { computed, onMounted, ref } from 'vue'
import { GameStatus, type PokemonListResponse } from '@/interfaces'
import { PokemonApi } from '@/api/pokemonApi'
import type { Pokemon } from '@/interfaces/pokemon'
import confetti from 'canvas-confetti'

export const usePokemonGame = () => {

  const gameStatus = ref<GameStatus>(GameStatus.Playing)
  const pokemons = ref<Pokemon[]>([])
  const pokemonsOptions = ref<Pokemon[]>([])
  const isLoading = computed(() => pokemons.value.length === 0)
  const randomPokemon = computed(() => {
    const randomIndex = Math.floor(Math.random() * pokemonsOptions.value.length);
    return pokemonsOptions.value[randomIndex]
  }
  )


  const getPokemons = async () => {
    const pokemonApi = new PokemonApi()
    const response: PokemonListResponse = (await pokemonApi.get("/?limit=151")).data as PokemonListResponse
    const pokemonsArray = response.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = parseInt(urlParts[urlParts.length - 2]) ?? 0;
      return { id, name: pokemon.name };
    });
    pokemonsArray.sort(() => Math.random() - 0.5)
    pokemons.value = pokemonsArray;
  };

  const getNextOptions = (amount: number = 4) => {
    gameStatus.value = GameStatus.Playing
    pokemonsOptions.value = pokemons.value.slice(0, amount)
    pokemons.value = pokemons.value.slice(amount)
  };

  const checkAnswer = (id: number) => {
    if (randomPokemon.value.id === id) {
      gameStatus.value = GameStatus.Won
      confetti({
        particleCount: 1000,
        spread: 150,
        origin: { y: 0.6 }
      })
    } else {
      gameStatus.value = GameStatus.Lost
    }
  }
  const restartGame = () => {
    gameStatus.value = GameStatus.Playing
    getPokemons();
    getNextOptions();
  }

  onMounted(async () => {
    await getPokemons();
    await getNextOptions();

  });

  return {
    gameStatus, pokemons, isLoading, getPokemons, getNextOptions,
    pokemonsOptions, randomPokemon, checkAnswer, restartGame
  }
}
