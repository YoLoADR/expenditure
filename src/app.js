import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouters from './routers/AppRouters';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { setTimeout } from 'timers';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: '133', createdAt: Date.now() }));
store.dispatch(addExpense({ description: 'Gas bill', amount: '157', createdAt: Date.now() + 3 }));
store.dispatch(setTextFilter('water'));

setTimeout(()=>{
    store.dispatch(setTextFilter('bill'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouters />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
