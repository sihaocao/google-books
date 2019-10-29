import React from 'react'
import BookItem from '../BookItem/BookItem'

export default class BooksList extends React.Component {

    render() {
        const books = this.props.books.map((book, i) => <BookItem data={book} key={i} />)

        return (
            <ul>
                {books}
            </ul>
        )
    }
}