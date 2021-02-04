export  default class SwapiService {
    _apiBase = "https://swapi.dev/api";
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}` );
        }
        return await res.json();
    }

    // All People
    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }
    // One person
    getPersone(id) {
        return this.getResource(`/people/${id}`)
    }
    //All planets
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }
    // One planets
    getPlanet(id) {
        return this.getResource(`/planets/${id}`)
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarShips(id) {
        return this.getResource(`/starships/${id}`)
    }
}



const swapi = new SwapiService();
swapi.getAllStarships().then((p) => {
    p.forEach((p) => {
        console.log(p);
    })
})
