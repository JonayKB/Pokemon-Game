import { onMounted, ref } from 'vue'
import { GameStatus, type PokemonListResponse } from '@/interfaces'
import { PokemonApi } from '@/api/pokemonApi'

export const usePokemonGame = () => {

  const gameStatus = ref<GameStatus>(GameStatus.Playing)

  const getPokemons = async () => {
    const pokemonApi = new PokemonApi()
    const response = await pokemonApi.get("/?limit=151")
    const pokemons: PokemonListResponse = response.data
    console.log(pokemons.results)
  };

  onMounted(() => {
    getPokemons()
  });

  return {
    gameStatus,
  }
}
