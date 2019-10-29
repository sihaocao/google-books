import React from 'react'
import Filters from '../Filters/Filters'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    getBooks(event) {
        event.preventDefault();
        const term = this.state.term
        const url = `https://www.googleapis.com/books/v1/volumes?q=${term}`
        const options = {
            key: 'AIzaSyDGKNUHlZNk3G8nHMpinFPDO8PSuxm1rO0',
            ...this.props.options
        }
        console.log(options)

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong. Please try again later.')
                }
                return response.json()
            })
            .then(results => this.props.updateList(results))
            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }

    termChange = (value) => {
        this.setState({
            term: value
        })
    }

    render() {
        return (
            <div className='SearchBar'>
                <form onSubmit={event => this.getBooks(event)}>
                    <label htmlFor='search-input'>Search</label>
                    <input
                        name='search-input'
                        type='text'
                        value={this.state.term}
                        onChange={event => this.termChange(event.target.value)}
                        placeholder='Enter a book name'
                        required
                    />
                    <button type='submit'>Search</button>
                </form>
                <Filters handleChange={this.props.handleChange} />
            </div>
        )
    }
}