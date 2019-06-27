import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Card, CardText, CardTitle } from 'reactstrap';

import { getSmurfs } from '../actions';

class SmurfsList extends React.Component {

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Smurf Village</h1>
        {(this.props.fetchingSmurfs) ? <Loader type="Oval" color="white" height={40} width={40} /> : null}
        <div style={{ width: '100%' }}>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>{
            this.props.smurfs.map(e => (
              <li key={e.id} style={{ width: '50%', marginTop: '20px' }}>
                <Card body inverse style={{ backgroundColor: 'grey', borderColor: '#333', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CardTitle>{e.name}</CardTitle>
                  <CardText>
                    {`age: ${e.age}`}
                  </CardText>
                  <CardText>
                    {`height: ${e.height}`}
                  </CardText>
                </Card>
              </li>
            ))
          }
          </ul>
        </div>
      </div>
    )
  }

}


const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
})

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(SmurfsList)