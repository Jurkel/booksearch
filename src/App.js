import React from 'react'
import './App.css'
import BookList from './BookList/BookList'
import FilterList from './FilterList/FilterList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      searchResult: []
    }
  }

  getSearchTerm(term) {
    console.log('Search Term >>', term)
  }

  componentDidMount() {
    const key = 'AIzaSyA1rowpyT_Ye7N3wZngsMfSMnGv9Z-fQv8'
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchTerm + '&key=' + key

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again')
        } 
        return res
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchTerm: data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
      })
  }

  render() {
    return (
      <main className='App'>
        <FilterList sendData={val => this.getSearchTerm(val)}/>
        <BookList />
      </main>
    )
  }  
}

export default App;

// AIzaSyA1rowpyT_Ye7N3wZngsMfSMnGv9Z-fQv8