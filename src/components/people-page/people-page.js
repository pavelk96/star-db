import React, {Component} from 'react';
import './people-page.css';
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row"
import ErrorBoundry from "../error-boundry";


export default class PeoplePage extends  Component {

    swapiService = new SwapiService();

    state = {
        selectPerson: 3,
        hasErrors: false
    };



    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        if (this.state.hasErrors) {
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList
                getData={this.swapiService.getAllPeople}
                onItemSelected={this.onPersonSelected}
                >

                {(i) => (
                `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        );

        const personDetails = (
            <ItemDetails personId={this.state.selectedPerson} />
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        )
    }
}