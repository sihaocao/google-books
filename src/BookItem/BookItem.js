import React from 'react'
import './BookItem.css'

export default class BookItem extends React.Component {
    
    render() {
        const book = this.props.data
        
        return (
            <li className='BookItem'>
                <div>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt='some book thumbnail' />
                </div>
                <div>
                    <h2>{book.volumeInfo.title}</h2>
                    <h3>Published: {book.volumeInfo.publishedDate}</h3>
                    {book.volumeInfo.authors ? <p>Author(s): {book.volumeInfo.authors.join(', ')}</p> : ''}
                    {book.searchInfo ? <p>Summary: {book.searchInfo.textSnippet.replace(/<\/?[^>]+(>|$)/g, "")}</p> : ''}
                    <h4><a href={book.volumeInfo.previewLink} target='_blank' rel="noopener noreferrer">Preview Book!</a></h4>
                </div>
            </li>
        )
    }
}