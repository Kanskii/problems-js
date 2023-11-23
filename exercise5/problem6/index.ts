interface PokemonData {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string;
    };
}

async function fetchPokemon(pokemonName: string): Promise<any> {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        const data: PokemonData = await response.json();

        const result = {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            image: data.sprites.front_default
        };

        return result;
    } catch (error) {
        return Promise.reject(new Error("Something went wrong"));
    }
}

// Usage
fetchPokemon("clefairy")
    .then((pokemon) => {
        console.log(pokemon);
    })
    .catch((error) => {
        console.error(error);
    });

fetchPokemon("no exist")
    .then((pokemon) => {
        console.log(pokemon);
    })
    .catch((error) => {
        console.error(error);
    });

export default fetchPokemon;
