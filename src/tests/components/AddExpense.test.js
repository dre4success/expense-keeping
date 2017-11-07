import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

let onSubmitExpense, history, wrapper;

beforeEach(() => {
  onSubmitExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpense onSubmit={onSubmitExpense} history={history} />
  );
});

test('should render AddExpense correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmitExpense).toHaveBeenLastCalledWith(expenses[1]);
});
