import React, { Component } from 'react';
import axios from 'axios';

import Icon from './Icon';

class Rating extends Component {
  state = {
    value: null,
    hover: false
  }

    render () {

    let rating = "";

    rating = for (let icon = 0; icon < 5; icon++) {
        <Icon
          key={icon} />
      }






      return rating;
    }
}

export default Rating;
