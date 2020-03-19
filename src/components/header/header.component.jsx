import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <h1 className='header__title'>My Transactions</h1>
            </Link>
        </div>
    )
}
