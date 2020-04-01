import React from 'react'
import BookSearch from './BookSearch/BookSearch'
import PrintType from './PrintType/PrintType'

class FilterList extends React.Component {
  render() {
    return (
      <div className='filterList'>
        <section className='title-bg'>
          <h2>Google Book Search</h2>
        </section>
        <form>
          <label>
            Search:
            <input 
              type='text'
              onChange={e => this.props.getData(e.target.value)} />
          </label>
          <button>Search</button>
        </form>
        <PrintType />
        
      </div>
    )
  }
}

export default FilterList