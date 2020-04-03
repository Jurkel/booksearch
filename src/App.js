import React from 'react'
import BookList from './BookList/BookList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      searchResults: [],
      loading: false
    }
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=brandon+sanderson&key=AIzaSyA1rowpyT_Ye7N3wZngsMfSMnGv9Z-fQv8'
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again')
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          searchResults: data,
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
        <BookList 
          searchResults={this.state.currentSearch}
          loading={this.state.loading}  
        />
      </main>
    )
  }  
}

export default App

// AIzaSyA1rowpyT_Ye7N3wZngsMfSMnGv9Z-fQv8