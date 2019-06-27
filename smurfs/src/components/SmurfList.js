import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardText, CardTitle, Collapse } from 'reactstrap';

import { deleteSmurf, getSmurfs } from '../actions';
import UpdateSmurf from './UpdateSmurf';

class SmurfsList extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  deleteSmurf = (event, id) => {
    event.preventDefault();
    this.props.deleteSmurf(id);
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
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                    <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Update Smurf</Button>
                    <Collapse isOpen={this.state.collapse}>
                      <Card>
                        <CardBody style={{ color: 'black' }}>
                          <UpdateSmurf id={e.id} name={e.name} />
                        </CardBody>
                      </Card>
                    </Collapse>
                    <Button color="danger" onClick={(event) => this.deleteSmurf(event, e.id)} style={{ marginBottom: '1rem' }}>Delete Smurf</Button>
                  </div>
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
    getSmurfs,
    deleteSmurf
  }
)(SmurfsList)