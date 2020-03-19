import React, { useState, useEffect } from 'react';
import './accounts-summary-page.styles.scss';

import AccountsListRow from '../../components/accounts-list-row/accounts-list-row.component';

import data from '../data/data.json';

export default function AccountsSummaryPage() {
    const [transactions, setTransactions] = useState(data.transactions);

    useEffect(() => {
        console.log(transactions.transactions)
    });

    const filteredTransactions = transactions.filter((transaction, i) => i < 100);

    const accountsListRows = filteredTransactions.map(transaction => {
        const { iban, ...otherprops } = transaction;
        return (
            <AccountsListRow key={iban} {...otherprops} />
        )
    });

    return (
        <div className='accounts-summary-page'>            
            <div className='accounts-list-header'>
                <div className='accounts-list-header__row'>account number</div>
                <div className='accounts-list-header__row'>account name</div>
                <div className='accounts-list-header__row'>currency</div>
                <div className='accounts-list-header__row'>amount</div>
                <div className='accounts-list-header__row'>transaction type</div>
            </div>
            {accountsListRows}
        </div>
    )
}
