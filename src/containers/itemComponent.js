import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemComponent extends Component {

	constructor(props) {
		super(props);
	}

	renderItem() {
		return <div className="card border-dark mb-3">
					<div className="card-header">
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-4 movement-description-label">
								{this.props.item.name}:
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 movement-amount-label">
								{this.props.item.city} - {this.props.item.address}
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 movement-amount-label">
								<button type="button" className="btn btn-primary" onClick={ () => this.props.getCarsByMotorPark(this.props.item.id) }>Show cars</button>
							</div>
						</div>
					</div>
				</div>
	}

	render() {
		return (this.renderItem())
	}
}

function mapStateToProps(state) {
	return {}
}

export default connect(mapStateToProps)(ItemComponent);