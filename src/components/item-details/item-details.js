import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemDetails extends Component {

  swapiServce = new SwapiService();

  state ={
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId != prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }
    this.setState({loading: true})
    this.swapiServce
        .getPerson(personId)
        .then((person) => {
          this.setState( {loading: false, person} );
        })
        .catch(this.onError);

  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };



  render() {
    const {person, loading} = this.state;

    if (!person) {
      return <span>Select a person from a list</span>;
    }
    const content = loading ? <Spinner/> : <PersonView person={person} />;
    return (
      <div className="person-details card">
        {content}
      </div>
    )
  }
}

const PersonView = ({person}) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  console.log(person);
  return (
    <>
      <img className="person-image"
       src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

  <div className="card-body">
    <h4>{name}</h4>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <span className="term">Gender</span>
        <span>{gender}</span>
      </li>
      <li className="list-group-item">
        <span className="term">Birth Year</span>
        <span>{birthYear}</span>
      </li>
      <li className="list-group-item">
        <span className="term">Eye Color</span>
        <span>{eyeColor}</span>
      </li>
    </ul>
  </div>
    </>
)
}
