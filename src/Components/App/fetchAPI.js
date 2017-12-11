export const fetchFilm = async () => {
  try {
    const randomFilm = Math.floor(Math.random() * (7) + 1);
    const filmCrawl = await fetch(`https://swapi.co/api/films/${randomFilm}/`);
    const filmData = await filmCrawl.json();
    return Object.assign(
      {},
      {title: filmData.title},
      {episode: filmData.episode_id},
      {text: filmData.opening_crawl}
    );
  } catch (type) {
    return Error('Fetch failed');
  }
};

export const fetchPeople = async () => {
  try {
    const fetchPeople = await fetch('https://swapi.co/api/people/');
    const peopleData = await fetchPeople.json();
    const people = await fetchHomeworldSpecies(peopleData.results);
    return people;
  } catch (type) {
    return Error('Fetch failed');
  }
};

export const fetchHomeworldSpecies = (peopleData) => {
  try {
    const unresolvedPromises = peopleData.map( async (person) => {
      let homeworldFetch = await fetch(person.homeworld);
      let homeworldData = await homeworldFetch.json();
      let speciesFetch = await fetch(person.species);
      let speciesData = await speciesFetch.json();
      return {
        name: person.name,
        info: {
          homeworld: homeworldData.name,
          species: speciesData.classification,
          language: speciesData.language,
          population: homeworldData.population
        }
      };
    });
    return Promise.all(unresolvedPromises);
  } catch (type) {
    return Error('Fetch failed');
  }
};

export const fetchPlanets = async () => {
  try {
    const fetchPlanets = await fetch('https://swapi.co/api/planets/');
    const planetResponse = await fetchPlanets.json();
    const planets = await fetchPlanetsData(planetResponse.results);
    return planets;
  } catch (type) {
    return Error('Fetch failed');
  }
};

export const fetchPlanetsData = (planets) => {
  try {
    const planetsPromises = planets.map( async (planet) => {
      const residentsPromises = planet.residents.map( async (resident) => { 
        const residentData = await fetch(resident);
        const residentObject = await residentData.json();
        return residentObject.name;
      });
      let residentNames = await Promise.all(residentsPromises);
      residentNames = residentNames.length ? residentNames : 'None';

      return {
        name: planet.name,
        info: {
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: residentNames
        }
      };
    });

    return Promise.all(planetsPromises);
  } catch (type) {
    return Error('Fetch failed');
  }
};

export const fetchVehicles = async () => {
  try {
    const fetchvehicles = await fetch('https://swapi.co/api/vehicles/');
    const vehicleObj = await fetchvehicles.json();
    const vehicles = vehicleObj.results.map( vehicle => {
      return {
        name: vehicle.name,
        info: {
          model: vehicle.model,
          class: vehicle.vehicle_class,
          passengers: vehicle.passengers
        }
      };
    });
    return vehicles;
  } catch (type) {
    return Error('Fetch failed');
  }
};
