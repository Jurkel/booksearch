import React, { Component } from 'react'
import BookItem from '../BookItem/BookItem'

function BookList({ results, loading }) {
  const listOfResults = results.map(book => {
    return <BookItem key={book.id} book={book} />
  })

    return ( 
        <div className='bookList'>
          {listOfResults}
        </div>
     )
  
}
 
export default BookList