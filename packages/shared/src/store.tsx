import { types, flow, Instance } from "mobx-state-tree";
import { createContext, useContext } from "react";
import type { Person, Planet, Starship } from "./api";
import { getAllPeople, getAllPlanets, getAllStarships, getPerson, getPlanet, getStarship } from "./api";

const PersonModel = types.model("Person", {
  id: types.identifier,
  name: types.string,
  gender: types.string,
  birthYear: types.string,
  eyeColor: types.string,
});

const PlanetModel = types.model("Planet", {
  id: types.identifier,
  name: types.string,
  population: types.string,
  rotationPeriod: types.string,
  diameter: types.string,
});

const StarshipModel = types.model("Starship", {
  id: types.identifier,
  name: types.string,
  model: types.string,
  manufacturer: types.string,
  costInCredits: types.string,
  length: types.string,
  crew: types.string,
  passengers: types.string,
  cargoCapacity: types.string,
});

const PeopleStore = types
  .model("PeopleStore", {
    items: types.array(PersonModel),
    selectedId: types.maybe(types.string),
    loading: false,
    error: types.maybe(types.string),
  })
  .actions((self) => ({
    setSelected(id?: string) {
      self.selectedId = id;
    },
    load: flow(function* load() {
      self.loading = true;
      self.error = undefined;
      try {
        const data: Person[] = yield getAllPeople();
        self.items.replace(data as any);
      } catch (e: any) {
        self.error = e?.message ?? "Unknown error";
      } finally {
        self.loading = false;
      }
    }),
  }));

const PlanetsStore = types
  .model("PlanetsStore", {
    items: types.array(PlanetModel),
    selectedId: types.maybe(types.string),
    loading: false,
    error: types.maybe(types.string),
  })
  .actions((self) => ({
    setSelected(id?: string) {
      self.selectedId = id;
    },
    load: flow(function* load() {
      self.loading = true;
      self.error = undefined;
      try {
        const data: Planet[] = yield getAllPlanets();
        self.items.replace(data as any);
      } catch (e: any) {
        self.error = e?.message ?? "Unknown error";
      } finally {
        self.loading = false;
      }
    }),
  }));

const StarshipsStore = types
  .model("StarshipsStore", {
    items: types.array(StarshipModel),
    selectedId: types.maybe(types.string),
    loading: false,
    error: types.maybe(types.string),
  })
  .actions((self) => ({
    setSelected(id?: string) {
      self.selectedId = id;
    },
    load: flow(function* load() {
      self.loading = true;
      self.error = undefined;
      try {
        const data: Starship[] = yield getAllStarships();
        self.items.replace(data as any);
      } catch (e: any) {
        self.error = e?.message ?? "Unknown error";
      } finally {
        self.loading = false;
      }
    }),
  }));

export const RootStore = types.model("RootStore", {
  people: PeopleStore,
  planets: PlanetsStore,
  starships: StarshipsStore,
});

export type RootInstance = Instance<typeof RootStore>;

export function createRootStore(): RootInstance {
  return RootStore.create({
    people: { items: [] },
    planets: { items: [] },
    starships: { items: [] },
  });
}

const StoreContext = createContext<RootInstance | null>(null);
export function StoreProvider({ children, store }: { children: React.ReactNode; store: RootInstance }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("StoreProvider is missing");
  return ctx;
}