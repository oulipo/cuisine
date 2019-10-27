import React, { Component } from 'react';
import Minuteur from './composants/Minuteur';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      liste: [],
      libelle: '',
      duree: 0
    }
  }

  handleClick = () => {
    this.setState((state) => ({
      liste: [...state.liste, {libelle: state.libelle, duree: state.duree}],
      duree: 0,
      libelle: ''
    }))
  }

  handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>Minuteur(s) : {this.state.liste.length}</h1>
        {this.state.liste.map((minuteur, index) => <Minuteur key={index} libelle={minuteur.libelle} duree={minuteur.duree} />)}

        <button onClick={this.handleClick}>+</button>
        <input type="text" value={this.state.libelle} name="libelle" placeholder="libellé" onChange={this.handleChange} />
        <input type="text" value={this.state.duree} name="duree" placeholder="durée en secondes" onChange={this.handleChange} />
      </div>
    );
  }

}

export default App;
