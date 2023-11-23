interface CharacterData {
  name: string;
  films: string[];
}

async function fetchCharacterWithMovies(characterId: number): Promise<CharacterData> {
  try {
      const response = await fetch(`https://swapi.dev/api/people/${characterId}/`);
      if (!response.ok) {
          throw new Error("Something went wrong");
      }

      const characterInfo = await response.json();
      const filmsPromises = characterInfo.films.map(async (filmUrl: string) => {
          const filmResponse = await fetch(filmUrl);
          if (!filmResponse.ok) {
              throw new Error("Something went wrong");
          }
          const filmData = await filmResponse.json();
          return filmData.title;
      });

      const films = await Promise.all(filmsPromises);

      const result: CharacterData = {
          name: characterInfo.name,
          films: films,
      };

      return result;
  } catch (error) {
      throw new Error("Something went wrong");
  }
}

// Usage
fetchCharacterWithMovies(1)
  .then((character) => {
      console.log(character);
  })
  .catch((error) => {
      console.error(error);
  });

fetchCharacterWithMovies(150)
  .then((character) => {
      console.log(character);
  })
  .catch((error) => {
      console.error(error);
  });


export default fetchCharacterWithMovies;
