import React, { Component } from 'react';
import MotorParksList from './containers/motorParksList.js';
import CarsList from './containers/carsList.js';

export default class App extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="main-title">Motor Park App</h1>
                        <hr/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <MotorParksList type={'motorpark'}/>
                    </div>
                    <div className="col-md-6">
                        <CarsList type={'car'}/>
                    </div>
                </div>
            </div>
        )
    }
}