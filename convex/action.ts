import { action } from "./_generated/server"

export const getRandomPokemon = action( 
    {
        handler : async () => {
            const MAX_POKEMON = 1010;
            const randomId = Math.floor(Math.random() * MAX_POKEMON) + 1 ;
            const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`
          
          
            const response = await fetch(url)
            const data = await response.json();
          
            return data.sprites.front_default;
        }
    }
);