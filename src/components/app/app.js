import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import './app.css';
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true
    };

    test = () => {
        this.setState({test:true});
}

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };



    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
            <div className="stardb-app">
                <Header />
                { planet }
                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>
                <PeoplePage
                    renderItem={(item) => item.name}
                />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPlanets}
                                  renderItem={(item) => (
                                      <span>{item.name}<button>!</button></span>
                                  )}
                        />
                    </div>
                    <div className="col-md-6">
                        <ItemDetails personId={this.state.selectedPerson} />
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                                  getData={this.swapiService.getAllStarships}
                                  renderItem={(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <ItemDetails personId={this.state.selectedPerson} />
                    </div>
                </div>

            </div>
        );
    }
}
