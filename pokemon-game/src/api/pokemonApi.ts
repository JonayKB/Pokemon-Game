import axios from "axios";

export class PokemonApi {
    async get(additions:string) {
        const response = axios.get('https://pokeapi.co/api/v2/pokemon'+additions);
        return await response;
    }
}
