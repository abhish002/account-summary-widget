import React, { Component } from 'react';
import './accounts-summary-page.styles.scss';

import AccountsListRow from '../../components/accounts-list-row/accounts-list-row.component';
import FilterBySection from '../../components/filter-by-section/filter-by-section.component';

import data from '../data/data.json';


export default class AccountsSummaryPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: data.transactions,
            filterBy: '',
            filterByValue: '',
            filteredTransactions: [],
            filteredTransactionsByName: [],
            filteredTransactionsByType: []
        }
    }

    componentDidMount() {
        const filteredTransactions = this.state.transactions.filter((transaction, i) => i < 100);
        this.setState({
            filteredTransactions,
        });
    }

    handleSelectAccountName = (accountName) => {
        console.log(accountName);
        const filteredTransactions = this.state.transactions.filter(transaction =>
            transaction.accountName === accountName);

        this.setState({
            filteredTransactions,
            filteredTransactionsByName: filteredTransactions,
        });
    }

    handleSelectAccountType = (transactionType) => {
        console.log(transactionType);
        const filteredTransactions = this.state.filteredTransactionsByName.filter(transaction =>
            transaction.transactionType === transactionType);

        this.setState({
            filteredTransactions,
        });
    }

    render() {
        const { transactions } = this.state;

        // get unique account names
        const accountNames = Array.from(new Set(transactions.map(transaction => transaction.accountName)));
        console.log(accountNames);

        const accountTypes = Array.from(new Set(transactions.map(transaction => transaction.transactionType)));
        console.log(accountTypes)
        const accountsListRows = this.state.filteredTransactions.map(transaction => {
            const { iban, ...otherprops } = transaction;
            return (
                <AccountsListRow key={iban} {...otherprops} />
            )
        });

        return (
            <div className='accounts-summary-page'>
                <div className='filters-section'>
                    <div className='filters-section__filters-title'>Filters</div>
                    <FilterBySection onSelect={this.handleSelectAccountName} {...accountNames} title='account name' />
                    <FilterBySection onSelect={this.handleSelectAccountType} {...accountTypes} title='transaction type' />
                </div>
                <div>
                    <div className='accounts-list-header'>
                        <div className='accounts-list-header__row'>account number</div>
                        <div className='accounts-list-header__row'>account name</div>
                        <div className='accounts-list-header__row'>currency</div>
                        <div className='accounts-list-header__row'>amount</div>
                        <div className='accounts-list-header__row'>transaction type</div>
                    </div>
                    {accountsListRows}
                </div>
            </div>
        )
    }
}
