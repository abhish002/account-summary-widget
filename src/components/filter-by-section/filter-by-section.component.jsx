import React, { Component } from 'react';
import './filter-by-section.styles.scss';

export default class FilterBySection extends Component {
    handleChange = (e) => {
        console.log(e.target.ref);

        for (const [key] in this.props) {
            const ref = this.refs[`ref_${this.props[key]}`];
            const currentRef = this.refs[`ref_${e.target.value}`];
            if (ref && ref.checked && ref !== currentRef) {
                ref.checked = false;
            }
        }

        this.props.onSelect(e.target.value);
    }

    render() {
        const accountNameRows = [];
        for (const [key] in this.props) {
            this.props[key] &&
                accountNameRows.push(
                    <div key={key}>
                        <input name='accountName' value={this.props[key]} type='checkbox' onChange={this.handleChange} ref={`ref_${this.props[key]}`} />
                        {this.props[key]}
                    </div>
                )
        }

        return (
            <div className='filter-by-section'>
                <div className='filter-by-section__title'>{this.props.title}</div>
                {accountNameRows}
            </div>
        )
    }
}
