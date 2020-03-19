import React from 'react';
import './accounts-list-row.styles.scss';

import { Link } from 'react-router-dom';

export default function AccountsRowList({ account, accountName, currencyCode, amount, transactionType }) {
    return (
        <div className='accounts-list-row'>
            <Link to={{
                pathname: `/account/${account}`,
                state: { account, accountName, currencyCode, amount, transactionType }
            }}
            >
                <div className='accounts-list-row__column'>{account}</div>
            </Link>
            <div className='accounts-list-row__column'>{accountName}</div>
            <div className='accounts-list-row__column'>{currencyCode}</div>
            <div className='accounts-list-row__column'>{amount}</div>
            <div className='accounts-list-row__column'>{transactionType}</div>
        </div>
    )
}
