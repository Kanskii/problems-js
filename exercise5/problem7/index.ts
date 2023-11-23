interface Pokemon {
  name: string;
  id: number;
  types: string[];
}


async function fetchPokemons(pokemonNames: string[]): Promise<Pokemon[]> {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

  const pokemonPromises = pokemonNames.map(async (name) => {
    const response = await fetch(`${apiUrl}${name.toLowerCase()}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch details for ${name}`);
    }

    const data = await response.json();
    return {
      name: data.name,
      id: data.id,
      types: data.types.map((type: any) => type.type.name),
    };
  });

  return Promise.all(pokemonPromises);
}

// Example usage:
const pokemonNames = ["bulbasaur", "charmander", "squirtle"];
fetchPokemons(pokemonNames)
  .then((pokemonDetails) => console.log(pokemonDetails))
  .catch((error) => console.error(error));

export default fetchPokemons;
