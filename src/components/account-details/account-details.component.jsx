import React from 'react';

import './account-details.styles.scss';

export default function AccountDetails(props) {
    console.log(props)
    const { account, accountName, currencyCode, amount, transactionType } = props.location.state;
    return (
        <div className='account-details'>
            <div className='account-details__row'><span>account no:</span> {account}</div>
            <div className='account-details__row'><span>account name:</span>{accountName}</div>
            <div className='account-details__row'><span>currency code:</span>{currencyCode}</div>
            <div className='account-details__row'><span>amount:</span>{amount}</div>
            <div className='account-details__row'><span>transaction type:</span> {transactionType}</div>
        </div>
    )
}
