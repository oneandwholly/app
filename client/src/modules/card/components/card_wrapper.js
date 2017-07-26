import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card';
import * as actions from '../actions';


class CardWrapper extends Component {
  componentWillMount() {
    this.props.fetchPhoto(this.props.match.params.photo_id);
  }

  render() {
    return (
      <Card photo={this.props.photo}/>
    );
  }
}

function mapStateToProps ({ card }) {
  return { photo: card.photo };
}

export default connect(mapStateToProps, actions)(CardWrapper);
