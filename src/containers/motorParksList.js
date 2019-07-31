import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMotorParks, fetchCarsByMotorParks } from '../actions/index';

import ItemComponent from './itemComponent';

class MotorParksList extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			registers: [],
			showForm: false
		}
	}

	onSuccessStored(){
		this.hideTodoFormComponent();
	}	

	componentWillMount(){
		this.props.fetchMotorParks();
	}

	componentWillReceiveProps(nextProps){
		this.setState({ registers: nextProps.registers, showForm: false });
	}

	getCarsByMotorPark(id){
		//this.props.fetchCarsByMotorParks(id);
	}

	renderHeader(){
		return(
		<div className="card border-dark mb-3">
			<div className="card-header">
				<div className="row">
					<div className="col-lg-10 col-md-10 col-sm-10">
						<h4 className="movement-title-list">{ this.props.type == 'motorpark' ? 'Motor Parks' : 'Cars' } </h4>
					</div>
				</div>
			</div>
		</div>
		)
	}

	render(){
		return(
			<div className="main-container">
				{ this.renderHeader() }
                <div>
                    { this.state.registers.map((item, id) => { 
						return <ItemComponent getCarsByMotorPark={ (motorCarId) => this.getCarsByMotorPark(motorCarId) } key={id} type={this.props.type} item={item}/> }) 
					}
                </div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		registers: state.registers
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchMotorParks, fetchCarsByMotorParks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MotorParksList);