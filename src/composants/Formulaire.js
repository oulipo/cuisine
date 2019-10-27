import React, { Component } from 'react';

class Formulaire extends Component {

    constructor(props) {
        super(props);
        this.state = {
            civilite: '',
            nom: '',
            prenom: '',
            annee: '',
            adresse: '',
            cp: '',
            ville: '',
            tel: '',
            email: '',
            message: '',
            newsletter: false,
            error: false
        }
    }

    handleChange = (event) => {
        // console.log(event.target.name);
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // contrôle des champs requis/obligatoires
        if (this.state.nom === '' || this.state.prenom === '' 
            || this.state.adresse === '' || this.state.cp === '' || this.state.ville === ''
            || this.state.email === '') {
                this.setState({
                    error: true
                })
            }
        
    }

    render() {
        return (
            // civilite (select)
            // nom, prenom *
            // adresse, cp, ville *
            // tel
            // email *
            // message (textarea)
            // newsletter (checkbox)

            <form onSubmit={this.handleSubmit} method="POST">

                <p style={{color: 'red'}}>{ (this.state.error) ? "ERREUR" : "" }</p>

                <select name="civilite" onChange={this.handleChange}>
                    <option>M</option>
                    <option>Mlle</option>
                    <option>Autre</option>
                </select>
                <br />
                
                <input name="nom" type="text" placeholder="nom" onChange={this.handleChange}/>
                <br />
                <input name="prenom" type="text" placeholder="prénom" onChange={this.handleChange}/>
                <br />
                <input name="annee" type="number" placeholder="année de naissance" onChange={this.handleChange}/>
                <br />
                <input name="adresse" type="text" placeholder="adresse" onChange={this.handleChange}/>
                <br />
                <input name="cp" type="text" placeholder="cp" onChange={this.handleChange}/>
                <br />
                <input name="ville" type="text" placeholder="ville" onChange={this.handleChange}/>
                <br />
                <input name="tel" type="text" placeholder="téléphone" onChange={this.handleChange}/>
                <br />
                <input name="email" type="text" placeholder="email" onChange={this.handleChange}/>
                <br />
                Message  : <textarea name="message" onChange={this.handleChange}/>
                <br />
                newsletter <input name="newsletter" type="checkbox" onChange={this.handleChange}/>
                <br />
                <button>VALIDER</button>
            </form>
        )
    }

}

export default Formulaire;