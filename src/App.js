import React from 'react';
import './App.css';

import SearchBar from './SearchBar/SearchBar'
import BooksList from './BooksList/Bookslist'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      options: {
        printType: 'all'
      }
    }
  }

  changePrintType = (type) => {
    this.setState({
      options: {
        printType: type
      }
    })
  }

  updateList = (books) => {
    this.setState({
      books: books.items
    })
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar
          options={this.state.options}
          handleChange={type => this.changePrintType(type)}
          updateList={books => this.updateList(books)}
        />
        <BooksList books={this.state.books} />
      </div>
    )
  }
}