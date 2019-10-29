import React from 'react'
import './Filters.css'

export default class Filters extends React.Component {

    render() {

        return (
            <div className='Filters'>
                <div>
                    <label htmlFor='print-type'>Print Type</label>
                    <select
                        name='print-type'
                        onChange={event => this.props.handleChange(event)}
                    >
                        <option value='all'>All</option>
                        <option value='magazines'>Magazines</option>
                        <option value='books'>Books</option>   
                    </select>
                </div>
            </div>
        )
    }
}