import React, { Component } from 'react'

class BookItem extends Component {
  constructor(props) {
    super(props)
    this.setState = {

    }
  }
  render() { 
    return ( 
        <li>
          <h3>{this.props.volumeInfo.title}</h3>
        </li>
     );
  }
}
 
export default BookItem