import { onMounted, ref } from 'vue'
import { GameStatus, type PokemonListResponse } from '@/interfaces'
import { PokemonApi } from '@/api/pokemonApi'

export const usePokemonGame = () => {

  const gameStatus = ref<GameStatus>(GameStatus.Playing)

  const getPokemons = async () => {
    const pokemonApi = new PokemonApi()
    const response: PokemonListResponse = (await pokemonApi.get("/?limit=151")).data as PokemonListResponse
    const pokemonsArray = response.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = parseInt(urlParts[urlParts.length - 2]) ?? 0;
      return { id, name: pokemon.name };
    });
    pokemonsArray.sort(() => Math.random() - 0.5)
    return pokemonsArray;
  };

  onMounted(async () => {
    const pokemons = await getPokemons();
    console.log(pokemons);
  });

  return {
    gameStatus,
  }
}
