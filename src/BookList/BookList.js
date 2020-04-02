import React, { Component } from 'react'
import BookItem from './BookItem/BookItem'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() { 
    const listItem = this.props.items.map((list, index) => (
      <BookItem 
        title={list.items.items[index].volumeInfo.title} 
      />
    ));
    return ( 
        <div className='bookList'>
          <ul>
            {listItem}
          </ul>
        </div>
     )
  }
}
 
export default BookList