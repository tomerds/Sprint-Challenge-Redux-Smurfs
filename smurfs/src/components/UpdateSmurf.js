import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSmurf } from '../actions';

class UpdateSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  updateSmurf = (event, id) => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };


    this.props.updateSmurf(newSmurf, id);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {

    return (
      <div className="UpdateSmurfForm">
        <form onSubmit={e => { this.updateSmurf(e, this.props.id) }}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">{`Update ${this.props.smurfs[this.props.id].name}`}</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(
  mapStateToProps,
  {
    updateSmurf
  }
)(UpdateSmurf);
