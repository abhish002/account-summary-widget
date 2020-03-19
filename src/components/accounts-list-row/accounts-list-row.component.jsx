import React from 'react';
import './accounts-list-row.styles.scss';

export default function AccountsRowList({account, accountName, currencyCode, amount, transactionType}) {
    return (
        <div className='accounts-list-row'>
            <div className='accounts-list-row__column'>{account}</div>
            <div className='accounts-list-row__column'>{accountName}</div>
            <div className='accounts-list-row__column'>{currencyCode}</div>
            <div className='accounts-list-row__column'>{amount}</div>
            <div className='accounts-list-row__column'>{transactionType}</div>
        </div>
    )
}
