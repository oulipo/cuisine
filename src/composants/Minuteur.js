import React, { Component } from 'react';

class Minuteur extends Component {

    constructor(props) {
        super(props);
        this.state = {
            duree: this.props.duree,
            isRunning: false
        }
    }

    toggleIsRunning = () => {
        if (this.state.isRunning) {
            clearInterval(this.timerID);
        } else {
            this.timerID = setInterval(this.tick, 1000);
        }
        
        this.setState((state) => ({
           isRunning: !state.isRunning 
        }))
    }

    tick = () => {

        if (this.state.duree <= 0) {
            this.setState((state) => ({
                isRunning: false,
            }))
            clearInterval(this.timerID);
        } else {
            this.setState((state) => ({
                duree: state.duree - 1
            }))
        }

    }

    render() {
        return (
            <div className="card" style={{ width: '18rem', margin: '1rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.libelle}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">durée prévue : {this.props.duree} secondes</h6>
                    <h2 className="card-text">
                    {this.state.duree <= 0 ? "C'est fini..." : this.state.duree }
                    </h2>
                    <button onClick={this.toggleIsRunning} type="button" className="btn btn-primary">
                        { (this.state.isRunning) ? "Pause" : "Démarrer" }
                    </button>
                </div>
            </div>
        )
    }
}

export default Minuteur;