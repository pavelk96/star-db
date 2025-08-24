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
export declare function getAllPeople(): Promise<Person[]>;
export declare function getPerson(id: string): Promise<Person>;
export declare function getAllPlanets(): Promise<Planet[]>;
export declare function getPlanet(id: string): Promise<Planet>;
export declare function getAllStarships(): Promise<Starship[]>;
export declare function getStarship(id: string): Promise<Starship>;
