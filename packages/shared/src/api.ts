export type Person = {
  id: string;
  name: string;
  gender: string;
  birthYear: string;
  eyeColor: string;
};

export type Planet = {
  id: string;
  name: string;
  population: string;
  rotationPeriod: string;
  diameter: string;
};

export type Starship = {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  crew: string;
  passengers: string;
  cargoCapacity: string;
};

const PRIMARY_API = "https://swapi.dev/api";
const FALLBACK_API = "https://swapi.py4e.com/api";

async function fetchJson(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

function extractId(url: string) {
  const m = url.match(/\/([0-9]*)\/?$/);
  return m ? m[1] : "";
}

async function getFromEndpoints<T>(path: string, transform?: (json: any) => T): Promise<T> {
  const endpoints = [PRIMARY_API, FALLBACK_API];
  let lastErr: unknown;
  for (const base of endpoints) {
    try {
      const json = await fetchJson(`${base}${path}`);
      return transform ? transform(json) : json;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr ?? new Error("All API endpoints failed");
}

export async function getAllPeople(): Promise<Person[]> {
  return getFromEndpoints("/people/", (json) => json.results.map(transformPerson));
}

export async function getPerson(id: string): Promise<Person> {
  return getFromEndpoints(`/people/${id}/`, transformPerson);
}

export async function getAllPlanets(): Promise<Planet[]> {
  return getFromEndpoints("/planets/", (json) => json.results.map(transformPlanet));
}

export async function getPlanet(id: string): Promise<Planet> {
  return getFromEndpoints(`/planets/${id}/`, transformPlanet);
}

export async function getAllStarships(): Promise<Starship[]> {
  return getFromEndpoints("/starships/", (json) => json.results.map(transformStarship));
}

export async function getStarship(id: string): Promise<Starship> {
  return getFromEndpoints(`/starships/${id}/`, transformStarship);
}

function transformPlanet(planet: any): Planet {
  return {
    id: extractId(planet.url),
    name: planet.name,
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
  };
}

function transformStarship(starship: any): Starship {
  return {
    id: extractId(starship.url),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.costInCredits ?? starship.cost_in_credits ?? "",
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargoCapacity ?? starship.cargo_capacity ?? "",
  };
}

function transformPerson(person: any): Person {
  return {
    id: extractId(person.url),
    name: person.name,
    gender: person.gender,
    birthYear: person.birth_year,
    eyeColor: person.eye_color,
  };
}